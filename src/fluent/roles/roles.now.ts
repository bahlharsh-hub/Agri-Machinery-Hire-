import { Role } from '@servicenow/sdk/core'

/**
 * Admin Role
 * Company staff role: can manage machinery catalog, view all hire requests,
 * approve or reject requests, and access dashboards.
 */
export const adminRole = Role({
    name: 'x_agri_hire.admin',
    description:
        'AgriMachinery Hire Admin — full access to machinery management, hire request approvals/rejections, and dashboards.',
    grantable: true,
})

/**
 * Farmer Role
 * Farmer portal role: can submit new hire requests and view only their own requests.
 */
export const farmerRole = Role({
    name: 'x_agri_hire.farmer',
    description:
        'AgriMachinery Hire Farmer — can submit hire requests and view their own requests only.',
    grantable: true,
})
