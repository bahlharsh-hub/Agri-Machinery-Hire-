import { EmailNotification } from '@servicenow/sdk/core'

/**
 * Email Notification: Hire Request Rejected
 * Fired when a hire request status is updated to 'rejected'.
 * Includes rejection reason so the farmer can resubmit with different dates.
 */
EmailNotification({
    $id: Now.ID['hire_request_rejected'],
    table: 'x_agri_hire_hire_request',
    name: 'Hire Request Rejected',
    description: 'Notifies the farmer when their machinery hire request has been rejected.',
    active: true,
    triggerConditions: {
        onRecordUpdate: true,
        condition: "current.status == 'rejected' && previous.status != 'rejected'",
    },
    recipientDetails: {
        recipientFields: ['farmer_email'],
        sendToCreator: false,
    },
    emailContent: {
        subject: 'Your AgriMachinery Hire Request could not be Approved',
        messageHtml: '<p>Dear Farmer,</p><p>We regret to inform you that your agricultural machinery hire request has been <strong>rejected</strong>.</p><table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif;"><tr><td><strong>Machinery Type</strong></td><td>${machinery_name}</td></tr><tr><td><strong>Units Requested</strong></td><td>${units_needed}</td></tr><tr><td><strong>Start Date</strong></td><td>${start_date}</td></tr><tr><td><strong>End Date</strong></td><td>${end_date}</td></tr><tr><td><strong>Reason</strong></td><td>${rejection_reason}</td></tr></table><p>You may submit a new request with a different date range or machinery type.</p><p>We apologise for any inconvenience caused.<br/><strong>AgriMachinery Hire Team</strong></p>',
    },
})
