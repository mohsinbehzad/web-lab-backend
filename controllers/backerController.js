const Backer = require('../models/backerModel');

// Create a new backer (pledge)
exports.createBacker = async (req, res) => {
  try {
    const backer = new Backer(req.body);
    await backer.save();
    res.status(201).json({ message: 'Pledge created successfully', backer });
  } catch (error) {
    res.status(500).json({ error: 'Error creating pledge' });
  }
};

// Get all backers for a specific project
exports.getBackersByProject = async (req, res) => {
  const { projectId } = req.params;
  try {
    const backers = await Backer.find({ projectId });
    res.status(200).json({ backers });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching backers' });
  }
};