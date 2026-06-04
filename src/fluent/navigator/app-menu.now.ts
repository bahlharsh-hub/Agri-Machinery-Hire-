import { ApplicationMenu, Record } from '@servicenow/sdk/core'
import { adminRole, farmerRole } from '../roles/roles.now'

/**
 * AgriMachinery Hire — Application Navigator Menu
 *
 * Adds the app to the ServiceNow navigator sidebar with modules for:
 *   Admin section:  Hire Requests | Machinery Catalog | Farmers
 *   Farmer section: My Hire Requests | Submit New Request
 */

// ── Menu category (green agri branding) ──────────────────────────────────────
export const agriMenuCategory = Record({
    $id: Now.ID['agri_menu_category'],
    table: 'sys_app_category',
    data: {
        name: 'AgriMachinery Hire',
        style: 'border-color: #2d7d46; background-color: #e8f5e9;',
        default_order: 100,
    },
})

// ── Top-level Application Menu ────────────────────────────────────────────────
export const agriAppMenu = ApplicationMenu({
    $id: Now.ID['agri_app_menu'],
    title: 'AgriMachinery Hire',
    hint: 'Manage agricultural machinery hire requests',
    description: 'End-to-end machinery hire management for farmers and admins.',
    category: agriMenuCategory,
    roles: [adminRole, farmerRole],
    active: true,
    order: 100,
})

// ═════════════════════════════════════════════════════════════════════════════
// ADMIN MODULES
// ═════════════════════════════════════════════════════════════════════════════

// Separator: Admin
Record({
    $id: Now.ID['agri_module_sep_admin'],
    table: 'sys_app_module',
    data: {
        title: 'Administration',
        application: agriAppMenu,
        link_type: 'SEPARATOR',
        roles: [adminRole],
        active: true,
        order: 100,
    },
})

// All Hire Requests (list view)
Record({
    $id: Now.ID['agri_module_all_requests'],
    table: 'sys_app_module',
    data: {
        title: 'All Hire Requests',
        application: agriAppMenu,
        link_type: 'LIST',
        name: 'x_agri_hire_hire_request',
        hint: 'View and manage all hire requests',
        roles: [adminRole],
        active: true,
        order: 200,
    },
})

// Pending Hire Requests (filtered list)
Record({
    $id: Now.ID['agri_module_pending_requests'],
    table: 'sys_app_module',
    data: {
        title: 'Pending Requests',
        application: agriAppMenu,
        link_type: 'FILTER',
        name: 'x_agri_hire_hire_request',
        filter: 'status=pending',
        hint: 'View all requests awaiting approval',
        roles: [adminRole],
        active: true,
        order: 300,
    },
})

// Create New Hire Request (admin)
Record({
    $id: Now.ID['agri_module_new_request_admin'],
    table: 'sys_app_module',
    data: {
        title: 'New Hire Request',
        application: agriAppMenu,
        link_type: 'NEW',
        name: 'x_agri_hire_hire_request',
        hint: 'Create a new machinery hire request',
        roles: [adminRole],
        active: true,
        order: 400,
    },
})

// Separator: Machinery
Record({
    $id: Now.ID['agri_module_sep_machinery'],
    table: 'sys_app_module',
    data: {
        title: 'Machinery',
        application: agriAppMenu,
        link_type: 'SEPARATOR',
        roles: [adminRole],
        active: true,
        order: 500,
    },
})

// Machinery Catalog (list view)
Record({
    $id: Now.ID['agri_module_machinery_list'],
    table: 'sys_app_module',
    data: {
        title: 'Machinery Catalog',
        application: agriAppMenu,
        link_type: 'LIST',
        name: 'x_agri_hire_machinery_catalog',
        hint: 'Browse and manage the machinery fleet (12 types, 60 units)',
        roles: [adminRole],
        active: true,
        order: 600,
    },
})

// Add New Machinery
Record({
    $id: Now.ID['agri_module_new_machinery'],
    table: 'sys_app_module',
    data: {
        title: 'Add Machinery',
        application: agriAppMenu,
        link_type: 'NEW',
        name: 'x_agri_hire_machinery_catalog',
        hint: 'Add a new machinery type to the catalog',
        roles: [adminRole],
        active: true,
        order: 700,
    },
})

// Separator: Farmers
Record({
    $id: Now.ID['agri_module_sep_farmers'],
    table: 'sys_app_module',
    data: {
        title: 'Farmers',
        application: agriAppMenu,
        link_type: 'SEPARATOR',
        roles: [adminRole],
        active: true,
        order: 800,
    },
})

// All Farmers (list view)
Record({
    $id: Now.ID['agri_module_farmers_list'],
    table: 'sys_app_module',
    data: {
        title: 'Farmers',
        application: agriAppMenu,
        link_type: 'LIST',
        name: 'x_agri_hire_farmer',
        hint: 'View and manage all registered farmers',
        roles: [adminRole],
        active: true,
        order: 900,
    },
})

// Register New Farmer
Record({
    $id: Now.ID['agri_module_new_farmer'],
    table: 'sys_app_module',
    data: {
        title: 'Register Farmer',
        application: agriAppMenu,
        link_type: 'NEW',
        name: 'x_agri_hire_farmer',
        hint: 'Register a new farmer in the system',
        roles: [adminRole],
        active: true,
        order: 1000,
    },
})

// ═════════════════════════════════════════════════════════════════════════════
// FARMER MODULES
// ═════════════════════════════════════════════════════════════════════════════

// Separator: My Account
Record({
    $id: Now.ID['agri_module_sep_farmer'],
    table: 'sys_app_module',
    data: {
        title: 'My Account',
        application: agriAppMenu,
        link_type: 'SEPARATOR',
        roles: [farmerRole],
        active: true,
        order: 1100,
    },
})

// My Hire Requests
Record({
    $id: Now.ID['agri_module_my_requests'],
    table: 'sys_app_module',
    data: {
        title: 'My Hire Requests',
        application: agriAppMenu,
        link_type: 'LIST',
        name: 'x_agri_hire_hire_request',
        hint: 'View all your machinery hire requests',
        roles: [farmerRole],
        active: true,
        order: 1200,
    },
})

// Submit New Hire Request (farmer)
Record({
    $id: Now.ID['agri_module_submit_request'],
    table: 'sys_app_module',
    data: {
        title: 'Submit Hire Request',
        application: agriAppMenu,
        link_type: 'NEW',
        name: 'x_agri_hire_hire_request',
        hint: 'Submit a new machinery hire request',
        roles: [farmerRole],
        active: true,
        order: 1300,
    },
})

// Browse Machinery Catalog (farmer — read only)
Record({
    $id: Now.ID['agri_module_browse_machinery'],
    table: 'sys_app_module',
    data: {
        title: 'Browse Machinery',
        application: agriAppMenu,
        link_type: 'LIST',
        name: 'x_agri_hire_machinery_catalog',
        hint: 'Browse available agricultural machinery types',
        roles: [farmerRole],
        active: true,
        order: 1400,
    },
})
