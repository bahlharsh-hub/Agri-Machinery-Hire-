import { Dashboard } from '@servicenow/sdk/core'

/**
 * AgriMachinery Hire — Operations Dashboard
 *
 * Displays:
 *  - Total hire requests submitted today
 *  - Approved requests count
 *  - Rejected requests count
 *  - Pending requests count
 *  - Available units per machinery type (donut chart)
 *  - Recent hire requests list
 */
export const AgriMachineryDashboard = Dashboard({
    $id: Now.ID['agri_machinery_dashboard'],
    name: 'AgriMachinery Hire — Operations Dashboard',
    active: true,

    permissions: [
        {
            $id: Now.ID['dashboard_admin_perm'],
            role: 'x_agri_hire.admin',
            canRead: true,
            canWrite: true,
            canShare: true,
            owner: true,
        },
    ],

    tabs: [
        {
            $id: Now.ID['dashboard_tab_overview'],
            name: 'Overview',
            active: true,
            widgets: [
                // ── Row 1: KPI Scorecards ────────────────────────────────────

                // Total requests today
                {
                    $id: Now.ID['widget_total_today'],
                    component: 'single-score',
                    height: 4,
                    width: 3,
                    position: { x: 0, y: 0 },
                    componentProps: {
                        title: 'Requests Today',
                        table: 'x_agri_hire_hire_request',
                        encodedQuery:
                            'sys_created_onONToday@javascript:gs.beginningOfToday()@javascript:gs.endOfToday()',
                        statistic: 'COUNT',
                        colorScheme: 'primary',
                    },
                },

                // Approved requests
                {
                    $id: Now.ID['widget_approved'],
                    component: 'single-score',
                    height: 4,
                    width: 3,
                    position: { x: 3, y: 0 },
                    componentProps: {
                        title: 'Approved Requests',
                        table: 'x_agri_hire_hire_request',
                        encodedQuery: 'status=approved',
                        statistic: 'COUNT',
                        colorScheme: 'positive',
                    },
                },

                // Rejected requests
                {
                    $id: Now.ID['widget_rejected'],
                    component: 'single-score',
                    height: 4,
                    width: 3,
                    position: { x: 6, y: 0 },
                    componentProps: {
                        title: 'Rejected Requests',
                        table: 'x_agri_hire_hire_request',
                        encodedQuery: 'status=rejected',
                        statistic: 'COUNT',
                        colorScheme: 'negative',
                    },
                },

                // Pending requests
                {
                    $id: Now.ID['widget_pending'],
                    component: 'single-score',
                    height: 4,
                    width: 3,
                    position: { x: 9, y: 0 },
                    componentProps: {
                        title: 'Pending Requests',
                        table: 'x_agri_hire_hire_request',
                        encodedQuery: 'status=pending',
                        statistic: 'COUNT',
                        colorScheme: 'caution',
                    },
                },

                // ── Row 2: Charts ────────────────────────────────────────────

                // Requests by Status — donut chart
                {
                    $id: Now.ID['widget_status_donut'],
                    component: 'donut',
                    height: 8,
                    width: 6,
                    position: { x: 0, y: 4 },
                    componentProps: {
                        title: 'Hire Requests by Status',
                        table: 'x_agri_hire_hire_request',
                        encodedQuery: '',
                        groupBy: 'status',
                        statistic: 'COUNT',
                    },
                },

                // Requests by Machinery Type — vertical bar
                {
                    $id: Now.ID['widget_machinery_bar'],
                    component: 'vertical-bar',
                    height: 8,
                    width: 6,
                    position: { x: 6, y: 4 },
                    componentProps: {
                        title: 'Requests by Machinery Type',
                        table: 'x_agri_hire_hire_request',
                        encodedQuery: '',
                        groupBy: 'machinery_name',
                        statistic: 'COUNT',
                    },
                },

                // ── Row 3: Lists ─────────────────────────────────────────────

                // Recent hire requests list
                {
                    $id: Now.ID['widget_recent_requests'],
                    component: 'list',
                    height: 10,
                    width: 12,
                    position: { x: 0, y: 12 },
                    componentProps: {
                        title: 'Recent Hire Requests',
                        table: 'x_agri_hire_hire_request',
                        encodedQuery: 'ORDERBYDESCsys_created_on',
                        fields: 'number,farmer_name,machinery_name,units_needed,start_date,end_date,status',
                        maxCount: 20,
                    },
                },
            ],
        },

        {
            $id: Now.ID['dashboard_tab_fleet'],
            name: 'Fleet Availability',
            active: true,
            widgets: [
                // Heading
                {
                    $id: Now.ID['widget_fleet_heading'],
                    component: 'rich-text',
                    height: 2,
                    width: 12,
                    position: { x: 0, y: 0 },
                    componentProps: {
                        content:
                            '<h2 style="font-family:Arial;color:#2d7d46">Fleet Availability — 5 Units per Machinery Type (60 Total)</h2>',
                    },
                },

                // Machinery catalog list — shows available units per type
                {
                    $id: Now.ID['widget_fleet_list'],
                    component: 'list',
                    height: 14,
                    width: 12,
                    position: { x: 0, y: 2 },
                    componentProps: {
                        title: 'Machinery Catalog — Unit Availability',
                        table: 'x_agri_hire_machinery_catalog',
                        encodedQuery: 'is_active=true',
                        fields: 'name,total_units,available_units,description',
                        maxCount: 12,
                    },
                },
            ],
        },
    ],
})
