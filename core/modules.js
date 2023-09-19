const db = require('../db');

module.exports = {
  create: async (userId, name, description) => {
    return new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO modules (userId, name, description) VALUES (?, ?, ?)',
        [userId, name, description],
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
        'SELECT * FROM modules', 
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

  update: async (userId, name, description, id) => {
    return new Promise((resolve, reject) => {
      db.run(
        'UPDATE modules SET userId = ?, name = ?, description = ? WHERE id = ?',
        [userId, name, description, id],
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
      db.run('DELETE FROM modules WHERE id = ?', 
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
