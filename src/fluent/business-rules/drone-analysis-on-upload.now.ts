import { BusinessRule } from '@servicenow/sdk/core'

/**
 * Business Rule: Trigger Drone Analysis on Upload
 *
 * Runs AFTER UPDATE on the Hire Request table.
 * Condition: drone_image_analyzed field changes to 'uploaded'
 *
 * Finds the latest image attachment on the record and calls
 * DroneAnalysisUtil → Claude claude-sonnet-4-20250514 Vision API to produce:
 *   - crop_health_assessment
 *   - areas_needing_irrigation
 *   - areas_needing_fertilizer
 *   - pest_disease_detection
 *   - field_health_score (0-10)
 *   - field_health_report
 */
BusinessRule({
    $id: Now.ID['drone_analysis_on_upload'],
    name: 'Trigger Drone Analysis on Upload',
    table: 'x_agri_hire_hire_request',
    when: 'after',
    action: ['update'],
    active: true,
    order: 300,
    filterCondition: 'drone_image_analyzedCHANGESTOuploaded',
    description: 'Triggers Claude AI Vision analysis when Drone Image Analysis Status changes to Uploaded.',
    script: Now.include('../../server/business-rules/drone-analysis-on-upload.server.js'),
})
