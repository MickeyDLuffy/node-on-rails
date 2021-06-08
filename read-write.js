const fs = require('fs');

let readerStream = fs.createReadStream('text.txt');
let writeStream = fs.createWriteStream('output.txt');
readerStream.pipe(writeStream);