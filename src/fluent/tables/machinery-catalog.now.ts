import { Table, StringColumn, IntegerColumn, BooleanColumn } from '@servicenow/sdk/core'

/**
 * Machinery Catalog Table
 * Stores all 12 types of agricultural machinery with unit counts.
 * Total fleet: 12 types × 5 units each = 60 machines
 */
export const x_agri_hire_machinery_catalog = Table({
    name: 'x_agri_hire_machinery_catalog',
    label: 'Machinery Catalog',
    display: 'name',
    accessibleFrom: 'public',
    allowWebServiceAccess: true,
    schema: {
        name: StringColumn({
            label: 'Machinery Name',
            mandatory: true,
            maxLength: 100,
            choices: {
                tractor: 'Tractor',
                harvester: 'Harvester',
                plough: 'Plough',
                seed_drill: 'Seed Drill',
                sprayer: 'Sprayer',
                rotavator: 'Rotavator',
                baler: 'Baler',
                cultivator: 'Cultivator',
                thresher: 'Thresher',
                water_pump: 'Water Pump',
                drone_irrigation: 'Drone (Irrigation)',
                drone_fertilizer: 'Drone (Fertilizer Spray)',
            },
        }),
        total_units: IntegerColumn({
            label: 'Total Units',
            mandatory: true,
            default: 5,
        }),
        available_units: IntegerColumn({
            label: 'Available Units',
            mandatory: true,
            default: 5,
        }),
        description: StringColumn({
            label: 'Description',
            maxLength: 500,
        }),
        is_active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
    },
})
