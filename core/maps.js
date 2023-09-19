const db = require('../db');

module.exports = {
  newMap: async (moduleId, name, description, width, height) => {
    return new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO maps (moduleId, name, description, width, height) VALUES (?, ?, ?, ?, ?)',
        [moduleId, name, description, width, height],
        (err, rows) => 
      {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  },

  getMap: async (mapId) => {
    return new Promise((resolve, reject) => {
      db.all(
        'SELECT * FROM maps WHERE id = ?', 
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

  updateMap: async (mapId, name, description, width, height) => {
    return new Promise((resolve, reject) => {
      db.run(
        'UPDATE maps SET name = ?, description = ?, width = ?, height = ? WHERE id = ?',
        [name, description, width, height, mapId],
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
