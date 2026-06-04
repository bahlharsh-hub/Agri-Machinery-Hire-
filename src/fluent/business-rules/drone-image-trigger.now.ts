import { BusinessRule } from '@servicenow/sdk/core'

/**
 * Business Rule: Drone Image Analysis Trigger
 * Watches for new image attachments on hire request records.
 * When detected, calls DroneAnalysisUtil to invoke Claude AI Vision API
 * and populate the field health report fields automatically.
 */
export const DroneImageTrigger = BusinessRule({
    $id: Now.ID['drone_image_trigger'],
    name: 'Drone Image Analysis Trigger',
    table: 'sys_attachment',
    when: 'after',
    action: ['insert'],
    active: true,
    order: 200,
    description:
        'Triggers Claude AI Vision analysis when a drone image is attached to a Hire Request record.',
    script: Now.include('../../server/business-rules/drone-image-trigger.server.js'),
})
