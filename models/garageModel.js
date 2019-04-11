const databasePromise = require("../bin/db");

module.exports.getCollectionGarage = async () => {
    let database = await databasePromise.mongoClient;
    return database.collection("Garage");
};

