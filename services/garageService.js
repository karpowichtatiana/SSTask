let garageModel = require("../models/garageModel");//промис из garageModel

class Garage {
    constructor(garageCollection) {
        this.garageCollection = garageCollection;
    };

    async getGarage() {
        return await this.garageCollection.findOne();
    };

}

let exportGarage;


(async () => {
    let collection = await garageModel.getCollectionGarage();
    exportGarage = new Garage(collection);
})();

module.exports = async () => exportGarage;