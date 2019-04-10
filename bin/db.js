const MongoClient = require('mongodb').MongoClient;
const config = require('../config/nconf');
const url = config.get('database');

const mongoDb = new MongoClient.connect(url, {useNewUrlParser: true}).then(connect => {
    return connect;
}).catch(reason => console.log(reason));

const mongoClient = mongoDb.then(result => {
    console.log('Подключилось');
    return result.db('Farm');
}).catch(error => {
    console.log('error');
})
module.exports.mongoClient = mongoClient;