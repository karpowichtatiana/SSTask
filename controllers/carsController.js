const carService = require('../services/carService');

module.exports.getCars = function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    carService().then(result => {
        result.getAllCars().then(result => {
            res.send(JSON.stringify(result));
        });
    })
};

module.exports.getCar = function (req, res, next) {

}

module.exports.addCar = function (req, res, next) {

}