var express = require('express');
var router = express.Router();
var fieldController = require('../controllers/fieldController');

/* GET users listing. */
router.get('/cars', fieldController.getCars);
router.get('/state',fieldController.getState);
// router.get('/:id', userController.getCar);
// router.post('/',userController.addCar);


module.exports = router;
