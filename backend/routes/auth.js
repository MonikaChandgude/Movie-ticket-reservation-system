const express = require("express");

const User = require("../Models/userModel");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");

const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const JWT_SECRET = "$secretstring@";

//create a user using: POST

router.post(
  "/createuser",
  [
    body("name", "Enter Valid name").isLength({ min: 5 }),
    body("email", "Enter Valid Email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res.status(400).json({ error: "email exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
        // cpassword: req.body.cpassword,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      console.log(authToken);
      res.json({ authToken });
      //   res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occered");
    }
  }
);

//Login User
router.post(
  "/loginuser",
  [
    body("email", "Enter Valid Email").isEmail(),
    body("password", "password canot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req); //validate  errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //destruct email and password
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "please try login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "please try login with correct credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server 4error occered");
    }
  }
);

//get use information
router.post(
  "/fetchuser",fetchuser,

  async (req, res) => {
    try {
        const userID = req.user.id;
        const user = await User.findById(userID).select("-password");
        res.send(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server 4error occered");
    }
  }
);
module.exports = router;
