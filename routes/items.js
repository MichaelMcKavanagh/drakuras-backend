const express = require('express');
const router = express.Router();
const core = require('../core');

// New item route
router.post('/', async (req, res) => {    
  const { moduleId, name, combatPowerBoost } = req.body;

  try {
    await core.items.create(moduleId, name, combatPowerBoost);
    res.status(201).json({ message: 'Item created successfully' });
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to create item' });
  }
});

// Get all items route
router.get('/', async (req, res) => {
  try {
    const result = await core.items.read();
    return res.json(result);
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to retrieve items' });
  }
});

// Update item route
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, combatPowerBoost } = req.body;

  try {
    await core.items.update(name, combatPowerBoost, id);
    res.json({ message: 'Item updated successfully' });
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to update item' });
  }
});

// Delete item route
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await core.items.delete(id);
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to delete item' });
  }
});

module.exports = router;
