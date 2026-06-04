import { BusinessRule } from '@servicenow/sdk/core'

/**
 * Business Rule: Availability Check
 * Runs BEFORE insert and update on the Hire Request table.
 * Automatically checks unit availability for the requested date range.
 * Auto-rejects if no units are free, otherwise allows the record to proceed.
 */
export const AvailabilityCheck = BusinessRule({
    $id: Now.ID['availability_check'],
    name: 'Availability Check',
    table: 'x_agri_hire_hire_request',
    when: 'before',
    action: ['insert', 'update'],
    active: true,
    order: 100,
    description:
        'Checks machinery unit availability for the requested date range. Auto-rejects when all 5 units are booked.',
    script: Now.include('../../server/business-rules/availability-check.server.js'),
})
