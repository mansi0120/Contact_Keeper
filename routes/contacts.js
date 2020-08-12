const express = require("express");
const router = express.Router();

// @route GET api/contacts
// @desc get all users contacts
// @access Private

router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route POST api/contacts
// @desc add new contact
// @access Private

router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route PUT api/contacts/:id
// @desc update contact
// @access Private

router.post("/:id", (req, res) => {
  res.send("Update contact");
});

// @route PUT api/contacts/:id
// @desc delete contact
// @access Private

router.post("/:id", (req, res) => {
  res.send("delete contact");
});

module.exports = router;
