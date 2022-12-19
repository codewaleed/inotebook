const { Router } = require("express");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  obj = {
    name: "dani",
  };
  res.json(obj);
});

module.exports = router;
