const Panel = require('../models/Panel');

exports.getAnalytics = async (req, res) => {
    const completed = await Panel.countDocuments({ status: 'Completed' });
    const pending = await Panel.countDocuments({ status: 'Pending' });
    res.json({ completed, pending });
};