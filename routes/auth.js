const express = require("express");
const router = express.Router();

// @route GET api/auth
// @description GET LOGGED IN USER
// @access Private

router.get("/", (req, res) => {
  res.send("get logged in user");
});

// @route POST api/auth
// @description AUTH USER AND GET TOKEN
// @access PUBLIC

router.post("/", (req, res) => {
  res.send("log in user");
});

module.exports = router;
