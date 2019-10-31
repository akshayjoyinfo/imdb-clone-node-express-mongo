const express = require('express')
const router = express.Router()

const users = require('./users')
const auth = require('./auth')
const actors = require('./actors');


router.post('/users', users.create);
router.post('/auth', auth.login);
router.get('/actors', actors.getAllActors);

module.exports = router;