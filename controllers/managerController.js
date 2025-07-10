const Panel = require('../models/Panel');
const User = require('../models/User');

exports.createSchedule = async (req, res) => {
    const { node, date, technicianId } = req.body;
    const panel = new Panel({ node, scheduledDate: date, assignedTo: technicianId, status: 'Pending' });
    await panel.save();
    res.json({ message: 'Schedule created successfully' });
};

exports.getAllSchedules = async (req, res) => {
    const schedules = await Panel.find().populate('assignedTo');
    res.json(schedules);
};