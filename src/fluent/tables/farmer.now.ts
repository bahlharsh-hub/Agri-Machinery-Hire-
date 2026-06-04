import { Table, StringColumn } from '@servicenow/sdk/core'

/**
 * Farmer Table
 * Stores farmer profile details for the AgriMachinery Hire system.
 */
export const x_agri_hire_farmer = Table({
    name: 'x_agri_hire_farmer',
    label: 'Farmer',
    display: 'name',
    accessibleFrom: 'public',
    allowWebServiceAccess: true,
    schema: {
        name: StringColumn({
            label: 'Farmer Name',
            mandatory: true,
            maxLength: 100,
        }),
        phone_number: StringColumn({
            label: 'Phone Number',
            mandatory: true,
            maxLength: 15,
        }),
        email: StringColumn({
            label: 'Email Address',
            maxLength: 100,
        }),
        village: StringColumn({
            label: 'Village',
            mandatory: true,
            maxLength: 100,
        }),
        district: StringColumn({
            label: 'District',
            mandatory: true,
            maxLength: 100,
        }),
        state: StringColumn({
            label: 'State',
            mandatory: true,
            maxLength: 100,
        }),
        sys_user: StringColumn({
            label: 'System User',
            maxLength: 32,
        }),
    },
})
