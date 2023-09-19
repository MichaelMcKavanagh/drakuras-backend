const db = require('../db');

module.exports = {
  create: async (name, imageName, movementCost) => {
    return new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO terrainTypes (name, imageName, movementCost) VALUES (?, ?, ?)',
        [name, imageName, movementCost],
        (err, rows) => 
      {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  },

  read: async (moduleId) => {
    return new Promise((resolve, reject) => {
      db.all(
        'SELECT * FROM terrainTypes WHERE moduleId = ?', 
        [moduleId], 
        (err, rows) => 
      {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  },

  update: async (name, imageName, movementCost, id) => {
    return new Promise((resolve, reject) => {
      db.run(
        'UPDATE terrainTypes SET name = ?, imageName = ?, movementCost = ? WHERE id = ?',
        [name, imageName, movementCost, id],
        (err, rows) => 
      {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  },

  delete: async (id) => {
    return new Promise((resolve, reject) => {
      db.run('DELETE FROM terrainTypes WHERE id = ?', 
      [id],
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
