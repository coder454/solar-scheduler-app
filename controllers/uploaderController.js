const Panel = require('../models/Panel');

exports.uploadPanelData = async (req, res) => {
    const { data } = req.body;
    await Panel.insertMany(data);
    res.json({ message: 'Data uploaded successfully' });
};