const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Panel = require('./models/Panel');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const seedDatabase = async () => {
    try {
        // Clear existing data
        await User.deleteMany();
        await Panel.deleteMany();

        // Create users
        const hashedPassword = await bcrypt.hash('123456', 10);
        const users = await User.insertMany([
            { name: 'Admin User', email: 'admin@example.com', password: hashedPassword, role: 'admin' },
            { name: 'Manager User', email: 'manager@example.com', password: hashedPassword, role: 'manager' },
            { name: 'Technician User', email: 'tech@example.com', password: hashedPassword, role: 'technician' },
            { name: 'Uploader User', email: 'uploader@example.com', password: hashedPassword, role: 'uploader' },
            { name: 'Analyst User', email: 'analyst@example.com', password: hashedPassword, role: 'analyst' },
        ]);

        // Create panel assigned to technician
        await Panel.insertMany([
            {
                node: 'Node-001',
                scheduledDate: new Date('2025-07-10'),
                assignedTo: users[2]._id, // assigned to technician
                status: 'pending',
            },
            {
                node: 'Node-002',
                scheduledDate: new Date('2025-07-15'),
                assignedTo: users[2]._id,
                status: 'pending',
            }
        ]);

        console.log('✅ Database seeded successfully');
        process.exit();
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
