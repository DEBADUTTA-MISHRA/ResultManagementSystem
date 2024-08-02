const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const validator = require('../validator/studentValidator');
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/createStudent',
    validator.createStudentValidator,
    studentController.createStudent
);


module.exports = router;