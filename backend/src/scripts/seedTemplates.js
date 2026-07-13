const mongoose = require('mongoose');
const Template = require('../models/Template');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

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

const seed = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Connected to MongoDB");

        await Template.deleteMany({});
        console.log("🗑️  Cleared existing templates");

        const result = await Template.insertMany(TEMPLATES);
        console.log(`✅ Seeded ${result.length} templates:\n`);

        result.forEach(t => {
            console.log(`  • ${t.name}`);
            console.log(`    Type: ${t.type}, Fields: ${t.fields.length}`);
        });

        console.log("\n✨ Template seeding complete!");
        process.exit(0);
    } catch (e) {
        console.error('❌ Error:', e.message);
        process.exit(1);
    }
};

seed();
