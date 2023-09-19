const express = require('express');
const router = express.Router();
const core = require('../core');

// New character route
router.post('/', async (req, res) => {    
  const { moduleId, name, combatPower, headItemId, bodyItemId, bless, forceId } = req.body;

  try {
    await core.characters.create(moduleId, name, combatPower, headItemId, bodyItemId, bless, forceId);
    res.status(201).json({ message: 'Character created successfully' });
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to create character' });
  }
});

// Get all characters route
router.get('/', async (req, res) => {
  try {
    const result = await core.characters.read();
    return res.json(result);
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to retrieve characters' });
  }
});

// Update character route
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, combatPower, headItemId, bodyItemId, bless, forceId } = req.body;

  try {
    await core.characters.update(name, combatPower, headItemId, bodyItemId, bless, forceId, id);
    res.json({ message: 'Character updated successfully' });
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to update character' });
  }
});

// Delete character route
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await core.characters.delete(id);
    res.json({ message: 'Character deleted successfully' });
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to delete character' });
  }
});

module.exports = router;
