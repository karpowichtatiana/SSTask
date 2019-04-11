const databasePromise = require('../bin/db');

module.exports.getCollectionField = async () => {
    // Принимает промис бд и потом мЫ получаем нужную нам колекцию
    let database = await databasePromise.mongoClient;
    return database.collection('Field');
};