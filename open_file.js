const fs = require('fs');
let buffer = new Buffer.alloc(1024);
const readLine = require('readline');

/* r -- read mode
 r+ -> read and write ::throw exception if file doesnt exists
 w -> write
 w+ -> read and write :: creates new file if file does not exist
 a -> append : creates new file if file not exists
 a+ -> reading and appending 
*/

/*fs.open('input.txt', 'w', (err, fd) => {
    if(err) throw err;
    console.log('Data is saved');

    fs.close(fd, () => {
        // console.log('file was closed', fd);
    })
});*/

/*fs.open('input.txt', 'r+', (err, fd) => {
    if(err) throw err;
    console.log('FIle oppend sucesfully');

    fs.read(fd, buffer,  0, buffer.length, 0, (error, bytes) => {
       if(error) throw error;

       console.table(['Number of bytes', bytes]);

       if(bytes > 0) {
           console.log(buffer.slice(0, bytes).toString())
       }
    })
})*/

// fetch entire file at ones
fs.readFile('input.txt', {encoding: 'utf8'}, (err,  filedata) => {
    if(err) throw err;
    // console.log(filedata); 
});

// Reading a file line by line

const file = readLine.createInterface({
    input: fs.createReadStream('input.txt'),
    output: fs.createWriteStream('text.txt')
});

file.on('line', (line) => {
//    console.log(line);
});

file.question