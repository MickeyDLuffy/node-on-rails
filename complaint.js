
const fs = require('fs');
// const readLine = require(readLine);
const htpp = require('http');
const queryString = require('querystring');

htpp.createServer((req, res) => {

    if(req.method == 'POST') {
        let data1 = '';
        req.on('data', (data) => {
            data1 += data;
        })
        req.on('end', () => {
        
            const {firstname, lastname, complaint} = queryString.parse(data1);
            console.log(complaint, 'complaint')

            fs.appendFile('complaint.txt', complaint, (err, bytes) => {
                if(err) throw err;
                console.log(`Bytes ${bytes}`);
                res.end('SUcessful');
            }); 
           
        })
       
    } 

    else if(req.url == '/complaint') {
       console.log('compl')
    } else {
        fs.readFile('complaint.html', (error, data) => {
            res.end(data);
           })
    }
}).listen('3000')


