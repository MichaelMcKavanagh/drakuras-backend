const express = require('express');
const router = express.Router();
const core = require('../core');

// New user route
router.post('/', async (req, res) => {    
  const { firstName, lastName, balance, email, login, passwordHash } = req.body;

  try {
    await core.users.create(firstName, lastName, balance, email, login, passwordHash);
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to create user' });
  }
});

// Get all users route
router.get('/', async (req, res) => {
  try {
    const result = await core.users.read();
    return res.json(result);
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

// Update user route
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, balance, login, passwordHash } = req.body;

  try {
    await core.users.update(firstName, lastName, balance, login, passwordHash, id);
    res.json({ message: 'User updated successfully' });
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to update user' });
  }
});

// Delete user route
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await core.users.delete(id);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ error: 'Failed to delete user' });
  }
});

module.exports = router;
