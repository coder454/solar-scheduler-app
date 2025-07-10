const Panel = require('../models/Panel');

exports.getAssignedTasks = async (req, res) => {
    const technicianId = req.user.id;
    const tasks = await Panel.find({ assignedTo: technicianId });
    res.json(tasks);
};

exports.markTaskComplete = async (req, res) => {
    const { panelId } = req.body;
    await Panel.findByIdAndUpdate(panelId, { status: 'Completed' });
    res.json({ message: 'Task marked as complete' });
};