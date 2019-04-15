let path = require('path');
let fs = require('fs');
const databasePromise = require('../bin/db').mongoClient;
const ObjectId = require('mongodb').ObjectId;

module.exports.initialScript = async () => {

    let objectCars;
    let i = 0;
    let readStream = fs.createReadStream(path.join(__dirname, 'initdb.json'));
    readStream.on('data', (chunk) => {
        objectCars = JSON.parse(chunk.toString());
    });

    let mainCollection = await databasePromise;
    let carCollection = mainCollection.collection('Cars');

    while (i < 5) {
        console.log(`Add car ${i + 1} ----------------------------------`);
        console.log((await carCollection.insertOne(objectCars[i])).ops);
        i++;
    }
    i = 0;
    while (i < 2) {
        let resultUpdate = await carCollection.findOneAndUpdate({numberSign: objectCars[i].numberSign}, {
            $set: {numberSign: `numberSing${i}`}
        }, {returnOriginal: false});
        console.log('Change car  ----------------------------------');
        console.log(resultUpdate.value);
        i++;
    }
    i = 0;
    while (i < 2) {
        console.log(`Delete car ${i + 1} ----------------------------------`);
        console.log((await carCollection.findOneAndDelete({cornWeight: 400})).value);
        i++;
    }
    let carWithDB = await carCollection.find().toArray();
    console.log(carWithDB);
    console.log("--------------------------------------------------------");
    carWithDB.forEach(element => console.log(element));
};

