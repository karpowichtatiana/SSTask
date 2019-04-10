var express = require('express');
var router = express.Router();
var userController = require('../controllers/carsController');

/* GET users listing. */
router.get('/', userController.getCars);
router.get('/:id', userController.getCar);
router.post('/',userController.addCar);


module.exports = router;
