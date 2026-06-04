import { EmailNotification } from '@servicenow/sdk/core'

/**
 * Email Notification: Hire Request Approved
 * Fired when a hire request status is updated to 'approved'.
 * ServiceNow resolves ${field_name} tokens at runtime from the record.
 */
EmailNotification({
    $id: Now.ID['hire_request_approved'],
    table: 'x_agri_hire_hire_request',
    name: 'Hire Request Approved',
    description: 'Notifies the farmer when their machinery hire request has been approved.',
    active: true,
    triggerConditions: {
        onRecordUpdate: true,
        condition: "current.status == 'approved' && previous.status != 'approved'",
    },
    recipientDetails: {
        recipientFields: ['farmer_email'],
        sendToCreator: false,
    },
    emailContent: {
        subject: 'Your AgriMachinery Hire Request has been Approved',
        messageHtml: '<p>Dear Farmer,</p><p>Great news! Your agricultural machinery hire request has been <strong>approved</strong>.</p><table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif;"><tr><td><strong>Machinery Type</strong></td><td>${machinery_name}</td></tr><tr><td><strong>Units Approved</strong></td><td>${units_needed}</td></tr><tr><td><strong>Start Date</strong></td><td>${start_date}</td></tr><tr><td><strong>End Date</strong></td><td>${end_date}</td></tr></table><p>Please ensure you are available to collect or receive the machinery on the scheduled start date.</p><p>For any queries, please contact us.<br/><strong>AgriMachinery Hire Team</strong></p>',
    },
})
