const express = require('express');
const router = express.Router();

// POST /backers
router.post('/', async (req, res) => {
  res.send('POST /backers route for testing');
});

// GET /backers/{projectId}
router.get('/:projectId', async (req, res) => {
  res.send('GET /backers/{projectId} route for testing');
});

// PUT /backers/{userId}/pledges/{pledgeId}
router.put('/backers/:userId/pledges/:pledgeId', async (req, res) => {
  res.send('PUT /backers/{userId}/pledges/{pledgeId} route for testing');
});

// POST /backers/{userId}/pledges/{pledgeId}/refund
router.post('/backers/:userId/pledges/:pledgeId/refund', async (req, res) => {
  res.send('POST /backers/{userId}/pledges/{pledgeId}/refund route for testing');
});

// GET /backers/{userId}/pledges
router.get('/backers/:userId/pledges', async (req, res) => {
  res.send('GET /backers/{userId}/pledges route for testing');
});

// DELETE /backers/{backerId}/pledge/{pledgeId}
router.delete('/backers/:backerId/pledge/:pledgeId', async (req, res) => {
  res.send('DELETE /backers/{backerId}/pledge/{pledgeId} route for testing');
});

module.exports = router;