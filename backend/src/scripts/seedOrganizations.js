const ValidOrganization = require('../models/ValidOrganization');

const ORGS = [
    { organizationName: "Sunbeam Pune", issuerCode: "SUN-PUNE" },
    { organizationName: "CDAC Mumbai", issuerCode: "CDAC-MUM" },
    { organizationName: "IIT Bombay", issuerCode: "IIT-B" },
    { organizationName: "Tech Mahindra", issuerCode: "TECH-M" },
    { organizationName: "Infosys Training", issuerCode: "INF-TR" },
    { organizationName: "Grand Valley University", issuerCode: "GVU-USA" },
    { organizationName: "Tech Inc", issuerCode: "TECH-1234" }
];

const seedOrganizations = async () => {
    try {
        const existing = await ValidOrganization.countDocuments();
        if (existing > 0) {
            console.log(`✅ Organizations already seeded (${existing} found)`);
            return;
        }

        await ValidOrganization.insertMany(ORGS);
        console.log("✅ Seeded Valid Organizations:");
        ORGS.forEach(o => console.log(`   - ${o.organizationName} (${o.issuerCode})`));
    } catch (e) {
        console.error('❌ Organization seeding error:', e.message);
        throw e;
    }
};

// Support both direct execution and module import
if (require.main === module) {
    const mongoose = require('mongoose');
    const path = require('path');
    require('dotenv').config({ path: path.join(__dirname, '../../.env') });

    (async () => {
        try {
            await mongoose.connect(process.env.MONGO_URI);
            console.log("Connected to DB.");
            await seedOrganizations();
            process.exit(0);
        } catch (e) {
            console.error(e);
            process.exit(1);
        }
    })();
}

module.exports = seedOrganizations;
