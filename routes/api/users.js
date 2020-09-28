const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// @route   post api/user
// @desc    Register User
//@access   Pulic
router.post(
  '/',
  [
    body('name', 'Name is required').not().isEmpty(),
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Please enter 4 or more character').isLength({ min: 4 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);
    res.send('user Route');
  }
);

module.exports = router;
