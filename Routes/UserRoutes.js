const express = require('express');
const router = express.Router();
const { createUser } = require('../Controllers/UserController');

router.post('/users', createUser);

module.exports = router;
