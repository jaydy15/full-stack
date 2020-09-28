const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    test route
//@access   Pulic
router.get('/', (req, res) => res.send('posts Route'));

module.exports = router;
