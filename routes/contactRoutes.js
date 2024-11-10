const express = require('express');
const router = express.Router();
const { Contact } = require('../models');

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    res.render('index', { contacts });
  } catch (err) {
    res.status(500).send('Error fetching contacts: ' + err.message);
  }
});

router.post('/add', async (req, res) => {
  const { name, phone } = req.body;
  try {
    await Contact.create({ name, phone });
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error adding contact: ' + err.message);
  }
});

router.post('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Contact.destroy({ where: { id } });
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error deleting contact: ' + err.message);
  }
});

module.exports = router;
