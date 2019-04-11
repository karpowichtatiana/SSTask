const carService = require('../services/carService');

module.exports.getCars = async (req, res, next) => {
    let carClass = await carService();
    let car = await carClass.getAllCars();
    res.json(car);
};

module.exports.getCarById = async (req, res, next) => {
    var id = req.params.id;
    let carClass = await carService();
    let car = await carClass.getCarById(id);
    res.json(car);
};

module.exports.deleteCarById = async (req, res, next) => {
    var id = req.params.id;
    let carClass = await carService();
    let car = await carClass.deleteCarById(id);
    res.json(car);
};

module.exports.addCar = async (req, res, next) => {
    if (!req.body) return res.sendStatus(400);
    let carClass = await carService();
    let car = await carClass.createCar(req.body);
    res.json(car.body);
};

module.exports.updateCar = async (req, res, next)=> {
    if (!req.body) return res.sendStatus(400);
    let carClass = await carService();
    let car = await carClass.updateCar(req.body);
    res.json(car.body)
};