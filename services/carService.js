const carModel = require('../models/carModel');

//Класс для представления наших данных и работы с ними , все функции async возвращают промис
class CarModel {
    constructor(collection) {
        this.collection = collection;
    }

    async getAllCars() {
        return await this.collection.find().toArray();
    }
}

//Получение колекции с модели
let exportCarModel;
carModel.getCollectionCar().then((result => {
    exportCarModel = new CarModel(result);
})).catch(error => {
    console.log(error);
});

//Отправка в функции async потому что мы не знаем когда прийдут значения с модели
module.exports = async () => {
    return  exportCarModel;
};
