const garageService = require('../services/garageService');

module.exports.getCarsInGarage = async (req, res, next)=> {
    let garageClass = await garageService();
    let garage = await garageClass.getGarage();
    res.json(garage);
};
