const fs = require('fs');
const http = require('http');
const readLine = require('readline');

http.createServer((req, res) =>{
    if(req.url == '/details') {
        let fileAray = [];
        console.log('in details')
        let readFIle = readLine.createInterface({
            input: fs.createReadStream('input.txt'),
            output: process.stdout
        });

        readFIle.on('line', data => {
            fileAray.push(data);
           
        });

        readFIle.on('close', () => {
            console.log(fileAray, 'file array');
            res.end(JSON.stringify(fileAray))
            // res.end(fileAray);
        })
    } else {
        console.log('not details')
    }
}).listen(3000);