const MongoClient = require('mongodb').MongoClient;
const config = require('../config/nconf');
const url = config.get('database');

const mongodb = async () => new MongoClient.connect(url, {useNewUrlParser: true});

const mongoClient = async () => {
    let value = await mongodb();
    return value.db('Farm');
};

module.exports.mongoClient = mongoClient();
module.exports.connect = mongodb();
module.exports.close = async () => {
    var closeConnection = await mongodb();
    closeConnection.close();
};