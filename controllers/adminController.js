const User = require('../models/User');

exports.createUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });
    await user.save();
    res.json({ message: 'User created successfully' });
};

exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};