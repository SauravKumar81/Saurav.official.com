const express = require('express');
const router = express.Router();
const { submitContact, getMessages, deleteMessage } = require('../controllers/contactController');

// Public route to submit message
router.post('/', submitContact);

// Private routes to view/manage messages
router.get('/', getMessages);
router.delete('/:id', deleteMessage);

module.exports = router;
