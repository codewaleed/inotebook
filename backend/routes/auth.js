const { Router } = require("express");
const express = require("express");
const Users = require("../models/Users");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require("express-validator");

const JWT_SECRET = 'mynameiskhanbitch1'


//mongodb+srv://wali2:wali2@cluster0.boucay5.mongodb.net/test

//create a user using POST: /api/auth/createuser "no login required"
router.post(
  "/createuser",
  [
    body("name", "enter valid name").isLength({ min: 3 }),
    body("email", "enter valid email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    Users.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    })

    const data={
      user:{
        id: user.id
      }
    }

    //const jwtToken = jwt.sign(data, JWT_SECRET);
    //console.log(jwtToken)

      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        res.json({ error: "dont duplicate values" });
      });
  }
);

module.exports = router;
