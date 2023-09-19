const express = require('express');
const router = express.Router();
const core = require('../core');

// New force route
router.post('/', async (req, res) => {    
  const { moduleId, forceType, x, y } = req.body;

  try {
    await core.forces.create(moduleId, forceType, x, y);
    res.status(201).json({ message: 'Force created successfully' });
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to create force' });
  }
});

// Get all forces route
router.get('/', async (req, res) => {
  try {
    const result = await core.forces.read();
    return res.json(result);
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to retrieve forces' });
  }
});

// Update force route
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { forceType, x, y } = req.body;

  try {
    await core.forces.update(forceType, x, y, id);
    res.json({ message: 'Force updated successfully' });
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to update force' });
  }
});

// Delete force route
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await core.forces.delete(id);
    res.json({ message: 'Force deleted successfully' });
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to delete force' });
  }
});

module.exports = router;
