const express = require('express');
const { createUser } = require('../controllers/userControllers');

router = express.Router();

router.post('/', createUser);

module.exports = router;
