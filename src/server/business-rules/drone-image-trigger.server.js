/**
 * Business Rule: Drone Image Analysis Trigger
 * Table: sys_attachment
 * When: After Insert
 *
 * Fires when a new attachment is added to a Hire Request record.
 * If the hire request status is 'approved' and the attachment is an image,
 * it triggers the Claude AI Vision analysis asynchronously.
 */

(function executeRule(current, previous) {
    // Only process attachments on the hire request table
    if (current.getValue('table_name') !== 'x_agri_hire_hire_request') {
        return;
    }

    var contentType = current.getValue('content_type') || '';
    var isImage =
        contentType.indexOf('image/') === 0 ||
        contentType.indexOf('jpeg') !== -1 ||
        contentType.indexOf('png') !== -1 ||
        contentType.indexOf('webp') !== -1 ||
        contentType.indexOf('gif') !== -1;

    if (!isImage) {
        return;
    }

    var hireRequestSysId = current.getValue('table_sys_id');

    // Mark the hire request as analysis pending
    var hireGr = new GlideRecord('x_agri_hire_hire_request');
    if (!hireGr.get(hireRequestSysId)) {
        return;
    }

    hireGr.setValue('drone_image_analyzed', 'pending');
    hireGr.update();

    // Trigger analysis via Script Include
    try {
        var util = new DroneAnalysisUtil();
        util.analyzeImage(hireRequestSysId, current.getUniqueValue());
    } catch (e) {
        gs.error('Drone Image Analysis Trigger error: ' + e.message);
        hireGr.setValue('drone_image_analyzed', 'failed');
        hireGr.update();
    }
})(current, previous);
