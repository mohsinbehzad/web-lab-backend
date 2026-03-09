const express = require('express');
const router = express.Router();

// GET /projects
router.get('/', async (req, res) => {
  res.send('GET /projects route for testing');
});

module.exports = router;