const express = require('express');
const router = express.Router();
const core = require('../core');

router.post('/newMap', async (req, res) => {    
  const { moduleId, name, description, width, height } = req.body;

  try {
    await core.maps.newMap(moduleId, name, description, width, height);
    res.status(201).json({ message: 'Map created successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to create map' });
  }
});

router.post('/getMap', async (req, res) => {
  const { mapId } = req.body;
  try {
    const result = await core.maps.getMap(mapId);
    return res.json(result);
  } catch (err) {
    console.log('/getMap Failed')
    console.error(err);
    return res.status(500).json({ error: 'Failed to retrieve maps' });
  }
});

router.post('/updateMap', async (req, res) => {
  const { mapId, name, description, width, height } = req.body;

  try {
    await core.maps.updateMap(mapId, name, description, width, height);
    res.json({ message: 'Map updated successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to update map' });
  }
});

module.exports = router;
;