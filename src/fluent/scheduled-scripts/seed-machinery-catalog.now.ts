import { ScheduledScript } from '@servicenow/sdk/core'

/**
 * Scheduled Script: Seed Machinery Catalog
 * Run once after first deployment to populate 12 machinery types (5 units each).
 * After seeding, deactivate this job or set it to run once only.
 */
export const SeedMachineryCatalog = ScheduledScript({
    $id: Now.ID['seed_machinery_catalog'],
    name: 'Seed Machinery Catalog',
    active: false, // Activate manually for first-install seeding, then deactivate
    frequency: 'on_demand',
    script: Now.include('../../server/scheduled-scripts/seed-machinery-catalog.server.js'),
})
