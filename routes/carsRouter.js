const express = require('express');
const router = express.Router();
const userController = require('../controllers/carsController');

/* GET users listing. */
router.get('/', userController.getCars);
router.get('/:id', userController.getCarById);
router.post('/', userController.addCar);
router.delete('/:id', userController.deleteCarById);
router.put('/:id', userController.updateCar);

module.exports = router;
