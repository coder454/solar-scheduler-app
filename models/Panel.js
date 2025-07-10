const mongoose = require('mongoose');

const panelSchema = new mongoose.Schema({
    node: String,
    scheduledDate: Date,
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: String
});

module.exports = mongoose.model('Panel', panelSchema);