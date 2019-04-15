const fs = require("fs");
const path = require('path');


module.exports = (req, res, next) => {
    req.time = new Date();

    let writableStream = fs.createWriteStream(__dirname + "/Log.txt", { flags: "a"});
    //let writableStream = fs.createWriteStream(path.join('..', 'Log.txt'), {flags: "a"});
    writableStream.write(`\r\nMethod: ${req.method}`);
    writableStream.write(`\r\nURL: ${req.protocol}://${req.hostname}${req.originalUrl}`);
    writableStream.write(`\r\n${JSON.stringify(req.headers)}`);
    writableStream.write(`\r\nDate: ${getDate(req.time)}`);
    writableStream.end(`\r\n`);
    next();
};

let getDate = (time) => {
    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();
    let date = time.getDate();
    let month = time.getMonth() + 1;
    let year = time.getFullYear();

    let fullDate = `${year}.${month}.${date}   ${hours}:${minutes}:${seconds}`;

    return fullDate;

};