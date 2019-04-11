const MongoClient = require('mongodb').MongoClient;
const config = require('../config/nconf');
const url = config.get('database');

const mongodb = async () => new MongoClient.connect(url, {useNewUrlParser: true});

const mongoClient = async () => {
    let value = await mongodb();
    console.log('Подключилось к БД');
    return value.db('Farm');
};

module.exports.mongoClient = mongoClient();