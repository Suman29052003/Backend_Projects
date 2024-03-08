const express = require('express');
const router = express.Router();
const { getContacts, createContact, getContact, putContact, deleteContact } = require('../controllers/contactController.js');

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(putContact).delete(deleteContact);

module.exports = router; // Export the router only once
