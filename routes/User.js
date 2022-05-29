const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

//user controller routes
router.get('/', UserController.getAllUsers)

//export
module.exports = router;
