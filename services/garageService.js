let garageModel = require("../models/garageModel");//промис из garageModel

class Garage {
    constructor(garageCollection) {
        this.garageCollection = garageCollection;
    };

    async getGarage() {
        return await this.garageCollection.findOne();
    };
}

let exportGarage = async () => new Garage(await garageModel.getCollectionGarage());

module.exports = async () => exportGarage();