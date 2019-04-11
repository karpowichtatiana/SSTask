const databasePromise = require('../bin/db');

module.exports.getCollectionCar = async () => {
    // Принимает промис бд и потом мЫ получаем нужную нам колекцию
    let database = await databasePromise.mongoClient;
    return database.collection('Cars');
}