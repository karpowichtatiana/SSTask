const fieldService = require('../services/fieldService');


module.exports.getCars = async (req, res, next) => {
    let fieldClass = await fieldService();
    let field = await fieldClass.getField();
    res.json(field);

};

module.exports.getState = async (req, res, next) => {

    //
    // fieldService().then(fieldClass => {
    //     var id = '5cae8c13bf956a2d3848834c';
    //     fieldClass.addCarToField(id).then(car => {
    //         console.log(car);
    //     })
    // })
    let fieldClass = await fieldService();
    let field = await fieldClass.getField();
    res.json(field["currentState"]);
};