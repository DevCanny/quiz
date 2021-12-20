const express = require('express')
const router = express.Router()
const mainController = require('../controller/mainController')

// Info: This is the Router we want to fire the Controller

router.get('/', mainController.HomeController)
router.get('/home', mainController.HomeController)

router.get('/createnew', mainController.CreateAccount)

module.exports = router;