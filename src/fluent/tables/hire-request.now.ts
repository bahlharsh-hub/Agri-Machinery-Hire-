import { Table, StringColumn, IntegerColumn, DateColumn, ReferenceColumn, ChoiceColumn } from '@servicenow/sdk/core'

/**
 * Hire Request Table
 * Core transactional table where farmers submit machinery hire requests.
 * Captures scheduling, unit requirements, and request lifecycle status.
 */
export const x_agri_hire_hire_request = Table({
    name: 'x_agri_hire_hire_request',
    label: 'Hire Request',
    display: 'number',
    accessibleFrom: 'public',
    allowWebServiceAccess: true,
    autoNumber: {
        prefix: 'HIRE',
        number: 1000001,
        numberOfDigits: 7,
    },
    schema: {
        farmer: ReferenceColumn({
            label: 'Farmer',
            mandatory: true,
            referenceTable: 'x_agri_hire_farmer',
        }),
        farmer_name: StringColumn({
            label: 'Farmer Name',
            maxLength: 100,
        }),
        farmer_email: StringColumn({
            label: 'Farmer Email',
            maxLength: 100,
        }),
        machinery_type: ReferenceColumn({
            label: 'Machinery Type',
            mandatory: true,
            referenceTable: 'x_agri_hire_machinery_catalog',
        }),
        machinery_name: StringColumn({
            label: 'Machinery Name',
            maxLength: 100,
        }),
        start_date: DateColumn({
            label: 'Requested Start Date',
            mandatory: true,
        }),
        end_date: DateColumn({
            label: 'Requested End Date',
            mandatory: true,
        }),
        units_needed: IntegerColumn({
            label: 'Number of Units Needed',
            mandatory: true,
            default: 1,
        }),
        status: StringColumn({
            label: 'Request Status',
            mandatory: true,
            default: 'pending',
            choices: {
                pending: 'Pending',
                approved: 'Approved',
                rejected: 'Rejected',
            },
        }),
        rejection_reason: StringColumn({
            label: 'Rejection Reason',
            maxLength: 500,
        }),
        field_health_report: StringColumn({
            label: 'Field Health Report (AI)',
            maxLength: 4000,
        }),
        crop_health_assessment: StringColumn({
            label: 'Crop Health Assessment',
            maxLength: 1000,
        }),
        irrigation_areas: StringColumn({
            label: 'Areas Needing Irrigation',
            maxLength: 1000,
        }),
        fertilizer_areas: StringColumn({
            label: 'Areas Needing Fertilizer',
            maxLength: 1000,
        }),
        pest_detection: StringColumn({
            label: 'Pest / Disease Detection',
            maxLength: 1000,
        }),
        health_score: IntegerColumn({
            label: 'Field Health Score (out of 10)',
        }),
        drone_image_analyzed: ChoiceColumn({
            label: 'Drone Image Analysis Status',
            default: 'not_uploaded',
            choices: {
                not_uploaded: { label: 'Not Uploaded' },
                uploaded:     { label: 'Uploaded' },
                processing:   { label: 'Processing' },
                completed:    { label: 'Analysis Completed' },
                failed:       { label: 'Analysis Failed' },
            },
        }),
        notes: StringColumn({
            label: 'Additional Notes',
            maxLength: 1000,
        }),
    },
})
