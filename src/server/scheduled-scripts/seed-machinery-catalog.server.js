/**
 * Scheduled Script: Seed Machinery Catalog
 * Run ONCE on first install to populate the 12 machinery types (5 units each).
 * Navigate to: System Definition > Scheduled Jobs → Run this manually on first deploy.
 */

(function seedMachineryCatalog() {
    var machineryTypes = [
        { name: 'tractor',          label: 'Tractor',                 description: 'Multipurpose farm tractor for tilling, towing, and heavy fieldwork.' },
        { name: 'harvester',        label: 'Harvester',               description: 'Combine harvester for efficient crop cutting, threshing, and collecting.' },
        { name: 'plough',           label: 'Plough',                  description: 'Disc or moldboard plough for primary soil tillage and turning.' },
        { name: 'seed_drill',       label: 'Seed Drill',              description: 'Precision seed drill for uniform sowing at controlled depth and spacing.' },
        { name: 'sprayer',          label: 'Sprayer',                 description: 'Boom sprayer for herbicide, pesticide, and liquid fertilizer application.' },
        { name: 'rotavator',        label: 'Rotavator',               description: 'Rotary tiller for secondary tillage and fine seedbed preparation.' },
        { name: 'baler',            label: 'Baler',                   description: 'Round or square baler for compressing and binding crop residue.' },
        { name: 'cultivator',       label: 'Cultivator',              description: 'Inter-row cultivator for weed control and soil aeration.' },
        { name: 'thresher',         label: 'Thresher',                description: 'Stationary thresher to separate grain from stalks after manual harvesting.' },
        { name: 'water_pump',       label: 'Water Pump',              description: 'Diesel/electric pump set for irrigation from wells, canals, or ponds.' },
        { name: 'drone_irrigation', label: 'Drone (Irrigation)',      description: 'Agricultural drone equipped with water tank for precision micro-irrigation.' },
        { name: 'drone_fertilizer', label: 'Drone (Fertilizer Spray)',description: 'Agricultural drone with fertilizer tank for aerial crop nutrition spraying.' },
    ];

    machineryTypes.forEach(function (m) {
        // Avoid duplicates
        var existing = new GlideRecord('x_agri_hire_machinery_catalog');
        existing.addQuery('name', m.name);
        existing.query();
        if (existing.next()) {
            gs.info('Machinery already exists, skipping: ' + m.label);
            return;
        }

        var gr = new GlideRecord('x_agri_hire_machinery_catalog');
        gr.initialize();
        gr.setValue('name', m.name);
        gr.setValue('total_units', 5);
        gr.setValue('available_units', 5);
        gr.setValue('description', m.description);
        gr.setValue('is_active', true);
        gr.insert();
        gs.info('Seeded machinery: ' + m.label);
    });

    gs.info('Machinery catalog seeded successfully — 12 types × 5 units = 60 machines.');
})();
