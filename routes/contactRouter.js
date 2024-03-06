const express = require('express')
const router = express.Router();
const {getContacts,createContact,getContact,putContact,deleteContact} = require( '../controllers/contactController.js');

// router.route("/").get(getContacts);

// router.route("/").post(createContact);

// router.route("/:id").get(getContact);

// router.route("/:id").put(putContact);

// router.route("/:id").delete(deleteContact);

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(putContact).delete(deleteContact);

module.exports=router;