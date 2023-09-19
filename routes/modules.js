const express = require('express');
const router = express.Router();
const core = require('../core');

// New module route
router.post('/', async (req, res) => {    
  const { userId, name, description } = req.body;

  try {
    await core.modules.create(userId, name, description);
    res.status(201).json({ message: 'Module created successfully' });
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to create module' });
  }
});

// Get all modules route
router.get('/', async (req, res) => {
  try {
    const result = await core.modules.read();
    return res.json(result);
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to retrieve modules' });
  }
});

// Update module route
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { userId, name, description } = req.body;

  try {
    const rows = await core.modules.update(userId, name, description, id);
    res.json({ message: 'Module updated successfully' });
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to update module' });
  }
});

// Delete module route
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const rows = await core.modules.delete(id);
    res.json({ message: 'Module deleted successfully' });
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to delete module' });
  }
});

module.exports = router;
