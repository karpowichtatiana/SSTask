const fieldModel = require('../models/fieldModel');
const carServicePromise = require('../services/carService');

let fieldService;
(async () => {
    let collection = await fieldModel.getCollectionField();
    fieldService = new FiledService(collection);
})();


class FiledService {
    constructor(collection) {
        this.collection = collection;
    }

    async getField() {
        return await this.collection.findOne({});
    }

    async addCarToField(id) {
        let carService = await carServicePromise();
        let car = await carService.getCarById(id);
        let field = await this.getField();
        console.log(field["carsCurrentList"]);
        field["carsCurrentList"].push(car);
        let newArrayCar = field["carsCurrentList"];

        return await this.collection.findOneAndUpdate({},
            {$set: {carsCurrentList: newArrayCar}}, {returnOriginal: false});
    }

}


module.exports = async () => {
    return fieldService;
};
