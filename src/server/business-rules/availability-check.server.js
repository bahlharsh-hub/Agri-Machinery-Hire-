/**
 * Business Rule: Availability Check
 * Table: x_agri_hire_hire_request
 * When: Before Insert / Before Update
 *
 * Checks if the requested machinery type has available units for the
 * requested date range. Auto-rejects requests when no units are available.
 * Max units per machinery type = 5.
 */

(function executeRule(current, previous) {
    var MAX_UNITS = 5;

    var machineryTypeId = current.getValue('machinery_type');
    var startDate = current.getValue('start_date');
    var endDate = current.getValue('end_date');
    var unitsNeeded = parseInt(current.getValue('units_needed')) || 1;

    // Only run availability check when status is Pending (new request or re-submission)
    if (current.getValue('status') !== 'pending') {
        return;
    }

    // Validate date range
    if (!startDate || !endDate) {
        current.setAbortAction(true);
        gs.addErrorMessage('Start Date and End Date are required for a hire request.');
        return;
    }

    if (startDate > endDate) {
        current.setAbortAction(true);
        gs.addErrorMessage('Start Date must be before or equal to End Date.');
        return;
    }

    if (unitsNeeded < 1 || unitsNeeded > MAX_UNITS) {
        current.setAbortAction(true);
        gs.addErrorMessage('Units needed must be between 1 and ' + MAX_UNITS + '.');
        return;
    }

    // Count already approved (booked) units for overlapping date range
    // Overlap condition: existing.start_date <= new.end_date AND existing.end_date >= new.start_date
    var bookedGr = new GlideAggregate('x_agri_hire_hire_request');
    bookedGr.addQuery('machinery_type', machineryTypeId);
    bookedGr.addQuery('status', 'approved');
    bookedGr.addQuery('start_date', '<=', endDate);
    bookedGr.addQuery('end_date', '>=', startDate);

    // Exclude current record on updates
    if (!current.isNewRecord()) {
        bookedGr.addQuery('sys_id', '!=', current.getUniqueValue());
    }

    bookedGr.addAggregate('SUM', 'units_needed');
    bookedGr.query();

    var totalBookedUnits = 0;
    if (bookedGr.next()) {
        totalBookedUnits = parseInt(bookedGr.getAggregate('SUM', 'units_needed')) || 0;
    }

    var availableUnits = MAX_UNITS - totalBookedUnits;

    if (availableUnits < unitsNeeded) {
        // Auto-reject with reason message
        current.setValue('status', 'rejected');
        current.setValue(
            'rejection_reason',
            'No units available for the selected schedule. Available units: ' +
                availableUnits +
                ' / ' +
                MAX_UNITS +
                '. Please choose a different date range.'
        );
        gs.addInfoMessage(
            'Hire request automatically rejected: No units available for the selected schedule.'
        );
    }

    // Denormalize farmer name and email for easy reporting
    if (current.getValue('farmer')) {
        var farmerGr = new GlideRecord('x_agri_hire_farmer');
        if (farmerGr.get(current.getValue('farmer'))) {
            current.setValue('farmer_name', farmerGr.getValue('name'));
            current.setValue('farmer_email', farmerGr.getValue('email'));
        }
    }

    // Denormalize machinery name
    if (current.getValue('machinery_type')) {
        var machGr = new GlideRecord('x_agri_hire_machinery_catalog');
        if (machGr.get(current.getValue('machinery_type'))) {
            current.setValue('machinery_name', machGr.getDisplayValue('name'));
        }
    }
})(current, previous);
