const carModel = require('../models/carModel');
const ObjectId = require('mongodb').ObjectId;

//Класс для представления наших данных и работы с ними , все функции async возвращают промис
class CarService {
    constructor(collection) {
        this.collection = collection;
    }

    async getAllCars() {
        return await this.collection.find().toArray();
    }

    async getCarById(id) {
        id = ObjectId(id);
        return await this.collection.findOne({_id: id});
    }

    async deleteCarById(id) {
        id = ObjectId(id);
        return await this.collection.deleteOne({_id: id});
    }

    async createCar(newCar) {
        return await this.collection.insertOne(newCar);
    }

    async updateCar(id, updatedCar) {
        id = ObjectId(id);
        return await this.collection.findOneAndUpdate({_id: id}, {$set: {updatedCar}}, {returnOriginal: false});
    }
}

//Получение колекции с модели
let exportCarModel;
(async () => {
    let collection = await carModel.getCollectionCar();
    exportCarModel = new CarService(collection);
})();

//Отправка в функции async потому что мы не знаем когда прийдут значения с модели
module.exports = async () => {
    return exportCarModel;
};
