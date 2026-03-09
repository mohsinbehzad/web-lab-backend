const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  creatorId: mongoose.Schema.Types.ObjectId,  // reference to the creator (user)
  status: { type: String, default: 'active' },  // e.g., 'active', 'completed', 'failed'
  rewards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reward' }],
  milestones: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Milestone' }],
  media: [String], // Array of media URLs
  backers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Backer' }],
});

module.exports = mongoose.model('Project', projectSchema);