const mongoose = require('mongoose');

const backerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  pledgeAmount: Number,
  pledgeId: String, // Unique pledge ID
  reward: { type: mongoose.Schema.Types.ObjectId, ref: 'Reward' },
});

module.exports = mongoose.model('Backer', backerSchema);