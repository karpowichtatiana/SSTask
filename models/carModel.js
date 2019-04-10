var express = require('express');
var app = express();
const MongoClient = require('mongodb').MongoClient;
const config = require('../config/nconf');
const url = config.get('database');

var databasePromise = require('../bin/db');

module.exports.getCollectionCar = async () => {
    // Принимает промис бд и потом мЫ получаем нужную нам колекцию
    return await databasePromise.mongoClient.then(client => {
        return client.collection('Cars');
    }).catch(error => {
        console.log("Owubka CarModel");
    });
}