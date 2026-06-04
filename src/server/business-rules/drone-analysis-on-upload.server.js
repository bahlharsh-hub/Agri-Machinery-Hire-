/**
 * Business Rule: Trigger Drone Analysis on Upload
 * Table:  x_agri_hire_hire_request
 * When:   After Update
 * Filter: drone_image_analyzed CHANGES TO 'uploaded'
 *
 * When an admin or farmer sets Drone Image Analysis Status = "Uploaded",
 * this rule finds the most recently attached image on the record and
 * calls DroneAnalysisUtil to invoke the Claude AI Vision API.
 */

(function executeRule(current, previous) {

    // Find the most recent image attachment on this hire request record
    var attachGr = new GlideRecord('sys_attachment');
    attachGr.addQuery('table_name', 'x_agri_hire_hire_request');
    attachGr.addQuery('table_sys_id', current.getUniqueValue());
    attachGr.addQuery('content_type', 'STARTSWITH', 'image/');
    attachGr.orderByDesc('sys_created_on');
    attachGr.setLimit(1);
    attachGr.query();

    if (!attachGr.next()) {
        gs.addErrorMessage(
            'No image attachment found on this request. ' +
            'Please attach a drone image before setting status to Uploaded.'
        );
        // Roll back the status change
        current.setValue('drone_image_analyzed', 'not_uploaded');
        current.update();
        return;
    }

    var attachmentSysId = attachGr.getUniqueValue();

    // Invoke Claude AI analysis via Script Include
    try {
        var util = new DroneAnalysisUtil();
        util.analyzeImage(current.getUniqueValue(), attachmentSysId);
    } catch (e) {
        gs.error('Drone Analysis on Upload BR error: ' + e.message);
        current.setValue('drone_image_analyzed', 'failed');
        current.update();
    }

})(current, previous);
