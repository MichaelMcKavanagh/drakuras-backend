const db = require('../db');

module.exports = {
  create: async (firstName, lastName, balance, email, login, passwordHash) => {
    return new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO users (firstName, lastName, balance, email, emailVerified, login, passwordHash) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [firstName, lastName, balance, email, false, login, passwordHash],
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
        'SELECT * FROM users', 
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

  update: async (firstName, lastName, balance, login, passwordHash, id) => {
    return new Promise((resolve, reject) => {
      db.run(
        'UPDATE users SET firstName = ?, lastName = ?, balance = ?, login = ?, passwordHash = ? WHERE id = ?',
        [firstName, lastName, balance, login, passwordHash, id],
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
      db.run('DELETE FROM users WHERE id = ?', 
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
