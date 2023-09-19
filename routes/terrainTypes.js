const express = require('express');
const router = express.Router();
const core = require('../core');

// New terrainType route
router.post('/', async (req, res) => {    
  const { name, imageName, movementCost } = req.body;

  try {
    await core.terrainTypes.create(name, imageName, movementCost);
    res.status(201).json({ message: 'TerrainType created successfully' });
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to create terrainType' });
  }
});

// Get all terrainTypes route
router.get('/module/:moduleId', async (req, res) => {
  const { moduleId } = req.params;
  try {
    const result = await core.terrainTypes.read(moduleId);
    return res.json(result);
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to retrieve terrainTypes' });
  }
});

// Update terrainType route
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, imageName, movementCost } = req.body;

  try {
    await core.terrainTypes.update(name, imageName, movementCost, id);
    res.json({ message: 'TerrainType updated successfully' });
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to update terrainType' });
  }
});

// Delete terrainType route
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await core.terrainTypes.delete(id);
    res.json({ message: 'TerrainType deleted successfully' });
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to delete terrainType' });
  }
});

module.exports = router;
