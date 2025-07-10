const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const connectDB = require('./config/db');

const seedAdmin = async () => {
    await connectDB();

    const existing = await User.findOne({ email: 'admin@example.com' });
    if (existing) {
        console.log('Admin user already exists.');
        return process.exit(0);
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);

    const adminUser = new User({
        name: 'Admin User',
        email: 'admin@example.com',
        password: hashedPassword,
        role: 'admin',
    });

    await adminUser.save();
    console.log('✅ Admin user created successfully!');
    process.exit(0);
};

seedAdmin();
