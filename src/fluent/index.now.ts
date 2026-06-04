/**
 * AgriMachinery Hire — ServiceNow Scoped Application
 * Scope: x_agri_hire
 *
 * Provides end-to-end machinery hire management for agricultural companies:
 *  • Machinery Catalog (12 types × 5 units = 60 machines)
 *  • Farmer profiles
 *  • Hire Request lifecycle (Pending → Approved / Rejected)
 *  • Automated availability checking (Business Rule)
 *  • Email notifications on approval / rejection
 *  • Role-based access control (Admin, Farmer)
 *  • Operations dashboard
 *  • AI-powered drone image field health analysis (Claude Vision API)
 */

// ── Tables ────────────────────────────────────────────────────────────────────
export * from './tables/machinery-catalog.now'
export * from './tables/farmer.now'
export * from './tables/hire-request.now'

// ── Roles ─────────────────────────────────────────────────────────────────────
export * from './roles/roles.now'

// ── Business Rules ────────────────────────────────────────────────────────────
export * from './business-rules/availability-check.now'
export * from './business-rules/drone-image-trigger.now'
import './business-rules/drone-analysis-on-upload.now'

// ── Script Includes ───────────────────────────────────────────────────────────
export * from './script-includes/drone-analysis-util.now'

// ── Email Notifications ───────────────────────────────────────────────────────
import './notifications/hire-request-approved.now'
import './notifications/hire-request-rejected.now'

// ── Access Control Lists ──────────────────────────────────────────────────────
export * from './acls/hire-request-acls.now'

// ── Dashboard ─────────────────────────────────────────────────────────────────
export * from './dashboard/agri-dashboard.now'

// ── Scheduled Scripts ─────────────────────────────────────────────────────────
export * from './scheduled-scripts/seed-machinery-catalog.now'

// ── Navigator Menu ────────────────────────────────────────────────────────────
export * from './navigator/app-menu.now'
