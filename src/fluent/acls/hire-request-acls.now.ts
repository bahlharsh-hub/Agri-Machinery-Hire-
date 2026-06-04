import { Acl } from '@servicenow/sdk/core'
import { adminRole, farmerRole } from '../roles/roles.now'

// ─── Hire Request ACLs ────────────────────────────────────────────────────────

/** Admin: full read access to ALL hire requests */
Acl({
    $id: Now.ID['hire_request_admin_read'],
    type: 'record',
    table: 'x_agri_hire_hire_request',
    operation: 'read',
    roles: [adminRole],
    description: 'Admins can read all hire requests',
})

/** Admin: full write access to ALL hire requests (approve/reject) */
Acl({
    $id: Now.ID['hire_request_admin_write'],
    type: 'record',
    table: 'x_agri_hire_hire_request',
    operation: 'write',
    roles: [adminRole],
    description: 'Admins can update any hire request',
})

/** Admin: create hire requests */
Acl({
    $id: Now.ID['hire_request_admin_create'],
    type: 'record',
    table: 'x_agri_hire_hire_request',
    operation: 'create',
    roles: [adminRole],
    description: 'Admins can create hire requests',
})

/** Admin: delete hire requests */
Acl({
    $id: Now.ID['hire_request_admin_delete'],
    type: 'record',
    table: 'x_agri_hire_hire_request',
    operation: 'delete',
    roles: [adminRole],
    description: 'Admins can delete hire requests',
})

/**
 * Farmer: can read ONLY their own hire requests
 * The condition checks that the farmer field matches the sys_user linked to the logged-in farmer profile.
 */
Acl({
    $id: Now.ID['hire_request_farmer_read'],
    type: 'record',
    table: 'x_agri_hire_hire_request',
    operation: 'read',
    roles: [farmerRole],
    script: `
(function checkAccess(current) {
    // Find the farmer profile linked to the current user
    var farmerGr = new GlideRecord('x_agri_hire_farmer');
    farmerGr.addQuery('sys_user', gs.getUserID());
    farmerGr.setLimit(1);
    farmerGr.query();
    if (farmerGr.next()) {
        return current.getValue('farmer') === farmerGr.getUniqueValue();
    }
    return false;
})(current)
    `,
    description: 'Farmers can only read their own hire requests',
})

/** Farmer: can create new hire requests */
Acl({
    $id: Now.ID['hire_request_farmer_create'],
    type: 'record',
    table: 'x_agri_hire_hire_request',
    operation: 'create',
    roles: [farmerRole],
    description: 'Farmers can submit new hire requests',
})

// ─── Machinery Catalog ACLs ───────────────────────────────────────────────────

/** Admin: full CRUD on machinery catalog */
Acl({
    $id: Now.ID['machinery_catalog_admin_read'],
    type: 'record',
    table: 'x_agri_hire_machinery_catalog',
    operation: 'read',
    roles: [adminRole],
    description: 'Admins can read the machinery catalog',
})

Acl({
    $id: Now.ID['machinery_catalog_admin_write'],
    type: 'record',
    table: 'x_agri_hire_machinery_catalog',
    operation: 'write',
    roles: [adminRole],
    description: 'Admins can update machinery catalog entries',
})

Acl({
    $id: Now.ID['machinery_catalog_admin_create'],
    type: 'record',
    table: 'x_agri_hire_machinery_catalog',
    operation: 'create',
    roles: [adminRole],
    description: 'Admins can add new machinery',
})

/** Farmer: read-only access to machinery catalog (to browse available machinery) */
Acl({
    $id: Now.ID['machinery_catalog_farmer_read'],
    type: 'record',
    table: 'x_agri_hire_machinery_catalog',
    operation: 'read',
    roles: [farmerRole],
    description: 'Farmers can browse the machinery catalog',
})

// ─── Farmer Table ACLs ────────────────────────────────────────────────────────

/** Admin: full CRUD on farmer profiles */
Acl({
    $id: Now.ID['farmer_admin_read'],
    type: 'record',
    table: 'x_agri_hire_farmer',
    operation: 'read',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['farmer_admin_write'],
    type: 'record',
    table: 'x_agri_hire_farmer',
    operation: 'write',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['farmer_admin_create'],
    type: 'record',
    table: 'x_agri_hire_farmer',
    operation: 'create',
    roles: [adminRole],
})

/** Farmer: can read and update their OWN profile only */
Acl({
    $id: Now.ID['farmer_self_read'],
    type: 'record',
    table: 'x_agri_hire_farmer',
    operation: 'read',
    roles: [farmerRole],
    script: `(function(current){ return current.getValue('sys_user') === gs.getUserID(); })(current)`,
    description: 'Farmers can read their own profile',
})

Acl({
    $id: Now.ID['farmer_self_write'],
    type: 'record',
    table: 'x_agri_hire_farmer',
    operation: 'write',
    roles: [farmerRole],
    script: `(function(current){ return current.getValue('sys_user') === gs.getUserID(); })(current)`,
    description: 'Farmers can update their own profile',
})
