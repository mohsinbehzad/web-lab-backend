const express = require('express');
const router = express.Router();

// POST /projects/create
router.post('/', async (req, res) => {
  res.send('POST /projects/create route for testing');
});

// GET /projects
router.get('/', async (req, res) => {
  res.send('GET /projects route for testing');
});

// GET /projects/{projectId}
router.get('/:projectId', async (req, res) => {
  res.send('GET /projects/{projectId} route for testing');
});

// GET /projects/{projectId}/status
router.get('/:projectId/status', async (req, res) => {
  res.send('GET /projects/{projectId}/status route for testing');
});

// DELETE /projects/{projectId}
router.delete('/:projectId', async (req, res) => {
  res.send('DELETE /projects/{projectId} route for testing');
});

// POST /projects/{projectId}/rewards
router.post('/:projectId/rewards', async (req, res) => {
  res.send('POST /projects/{projectId}/rewards route for testing');
});

// GET /projects/{projectId}/rewards
router.get('/:projectId/rewards', async (req, res) => {
  res.send('GET /projects/{projectId}/rewards route for testing');
});

// PUT /projects/{projectId}/update
router.put('/:projectId/update', async (req, res) => {
  res.send('PUT /projects/{projectId}/update route for testing');
});

// PUT /projects/{projectId}/milestones
router.put('/:projectId/milestones', async (req, res) => {
  res.send('PUT /projects/{projectId}/milestones route for testing');
});

// POST /projects/{projectId}/media/upload
router.post('/:projectId/media/upload', async (req, res) => {
  res.send('POST /projects/{projectId}/media/upload route for testing');
});

// POST /projects/{projectId}/back
router.post('/:projectId/back', async (req, res) => {
  res.send('POST /projects/{projectId}/back route for testing');
});

module.exports = router;