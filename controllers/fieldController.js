const fieldService = require('../services/fieldService');

module.exports.getCars = async (req, res, next) => {
    let fieldClass = await fieldService();
    let field = await fieldClass.getField();
    res.json(field["carsCurrentList"]);

};

module.exports.getState = async (req, res, next) => {
    let fieldClass = await fieldService();
    let field = await fieldClass.getField();
    res.json(field["currentState"]);
};