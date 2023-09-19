const db = require('../db');

module.exports = {
  newMapTile: async (mapId, x, y, terrainTypeId) => {
    return new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO mapTiles (mapId, x, y, terrainTypeId) VALUES (?, ?, ?, ?)',
        [mapId, x, y, terrainTypeId],
        (err, rows) => 
      {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  },

  getAllMapTiles: async (mapId) => {
    return new Promise((resolve, reject) => {
      db.all(
        'SELECT * FROM mapTiles WHERE mapId = ?', 
        [mapId], 
        (err, rows) => 
      {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  },

  updateMapTile: async (mapId, x, y, terrainTypeId) => {
    return new Promise((resolve, reject) => {
      db.run(
        'UPDATE mapTiles SET terrainTypeId = ? WHERE mapId = ? and x = ? and y = ?',
        [terrainTypeId, mapId, x, y],
        (err, rows) => 
      {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  }
}
