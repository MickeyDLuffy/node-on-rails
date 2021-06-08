let fs = require('fs');

const zlib = require('zlib');

fs.createReadStream('text.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.gz'));

//   fs.createReadStream('input.gz')
//   .pipe(zlib.createGunzip())
//   .pipe(fs.createWriteStream('new_unzipped.txt'));
