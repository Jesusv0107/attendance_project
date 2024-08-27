const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

//Home route
router.get('/home', studentController.getHome);









module.exports = router;