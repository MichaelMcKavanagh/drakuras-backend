const db = require('../db');

module.exports = {
  create: async (moduleId, forceType, x, y) => {
    return new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO forces (moduleId, forceType, x, y) VALUES (?, ?, ?, ?)',
        [moduleId, forceType, x, y],
        (err, rows) => 
      {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  },

  read: async () => {
    return new Promise((resolve, reject) => {
      db.all(
        'SELECT * FROM forces', 
        [], 
        (err, rows) => 
      {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  },

  update: async (forceType, x, y, id) => {
    return new Promise((resolve, reject) => {
      db.run(
        'UPDATE forces SET forceType = ?, x = ?, y = ? WHERE id = ?',
        [forceType, x, y, id],
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
      db.run('DELETE FROM forces WHERE id = ?', 
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
