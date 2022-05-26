const express = require('express')
const router = express.Router()

//constant usercontroller
const UserController = require('../controllers/UserController')
router.get('/', UserController.getAllUsers)

//export
module.exports = router;
