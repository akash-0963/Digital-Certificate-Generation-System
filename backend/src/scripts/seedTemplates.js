const Template = require('../models/Template');

// Hardcoded templates from mongo_uri2
const TEMPLATES = [
    {
        name: "Professional Gold Edge",
        description: "Professional Standard Template",
        type: "free",
        price: 50,
        bgImageUrl: "/templates/t1.png",
        previewUrl: "",
        fields: [
            { key: "undefined", x: undefined, y: undefined, fontSize: undefined }
        ],
        qr: { x: 0, y: 0, size: 0 }
    },
    {
        name: "Classic Ornamental",
        description: "Professional Standard Template",
        type: "free",
        price: 50,
        bgImageUrl: "/templates/t2.png",
        previewUrl: "",
        fields: [
            { key: "undefined", x: undefined, y: undefined, fontSize: undefined }
        ],
        qr: { x: 0, y: 0, size: 0 }
    },
    {
        name: "Modern Blue Geometric",
        description: "Professional Standard Template",
        type: "free",
        price: 50,
        bgImageUrl: "/templates/t3.png",
        previewUrl: "",
        fields: [
            { key: "undefined", x: undefined, y: undefined, fontSize: undefined }
        ],
        qr: { x: 0, y: 0, size: 0 }
    },
    {
        name: "Luxury Dark Gold",
        description: "Professional Standard Template",
        type: "free",
        price: 50,
        bgImageUrl: "/templates/t4.png",
        previewUrl: "",
        fields: [
            { key: "undefined", x: undefined, y: undefined, fontSize: undefined }
        ],
        qr: { x: 0, y: 0, size: 0 }
    },
    {
        name: "Minimalist Waves",
        description: "Professional Standard Template",
        type: "free",
        price: 50,
        bgImageUrl: "/templates/t5.png",
        previewUrl: "",
        fields: [
            { key: "undefined", x: undefined, y: undefined, fontSize: undefined }
        ],
        qr: { x: 0, y: 0, size: 0 }
    }
];

const seedTemplates = async () => {
    try {
        const existing = await Template.countDocuments();
        if (existing > 0) {
            console.log(`✅ Templates already seeded (${existing} found)`);
            return;
        }

        const result = await Template.insertMany(TEMPLATES);
        console.log(`✅ Seeded ${result.length} templates:`);
        result.forEach(t => console.log(`   - ${t.name}`));
    } catch (e) {
        console.error('❌ Template seeding error:', e.message);
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
            await seedTemplates();
            process.exit(0);
        } catch (e) {
            console.error(e);
            process.exit(1);
        }
    })();
}

module.exports = seedTemplates;
