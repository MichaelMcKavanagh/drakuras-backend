const db = require('../db');

module.exports = {
  create: async (moduleId, name, combatPower, headItemId, bodyItemId, bless, forceId) => {
    return new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO characters (moduleId, name, combatPower, headItemId, bodyItemId, bless, forceId) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [moduleId, name, combatPower, headItemId, bodyItemId, bless, forceId],
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
        'SELECT * FROM characters', 
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

  update: async (name, combatPower, headItemId, bodyItemId, bless, forceId, id) => {
    return new Promise((resolve, reject) => {
      db.run(
        'UPDATE characters SET name = ?, combatPower = ?, headItemId = ?, bodyItemId = ?, bless = ?, forceId = ? WHERE id = ?',
        [name, combatPower, headItemId, bodyItemId, bless, forceId, id],
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
      db.run('DELETE FROM characters WHERE id = ?', 
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
