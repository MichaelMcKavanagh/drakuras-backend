const db = require('../db');

module.exports = {
  create: async (moduleId, name, combatPowerBoost) => {
    return new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO items (moduleId, name, combatPowerBoost) VALUES (?, ?, ?, ?)',
        [moduleId, name, combatPowerBoost],
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
        'SELECT * FROM items', 
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

  update: async (name, combatPowerBoost, id) => {
    return new Promise((resolve, reject) => {
      db.run(
        'UPDATE items SET name = ?, combatPowerBoost = ? WHERE id = ?',
        [name, combatPowerBoost, id],
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
      db.run('DELETE FROM items WHERE id = ?', 
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
