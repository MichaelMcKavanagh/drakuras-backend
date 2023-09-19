const express = require('express');
const router = express.Router();
const core = require('../core');

router.post('/newMapTile', async (req, res) => {    
  const { mapId, x, y, terrainTypeId } = req.body;
  try {
    await core.mapTiles.newMapTile(mapId, x, y, terrainTypeId);
    res.status(201).json({ message: 'MapTile created successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to create mapTile' });
  }
});

router.post('/getAllMapTiles', async (req, res) => {
  const { mapId } = req.body;

  try {
    const result = await core.mapTiles.getAllMapTiles(mapId);
    return res.json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to retrieve mapTiles' });
  }
});

router.post('/updateMapTile', async (req, res) => {
  const { mapId, x, y, terrainTypeId } = req.body;

  try {
    await core.mapTiles.updateMapTile(mapId, x, y, terrainTypeId);
    res.json({ message: 'Map updated successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to update mapTile' });
  }
});

module.exports = router;
