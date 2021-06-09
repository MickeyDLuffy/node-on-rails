const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
http.createServer((request, response) => {
   if(request.method == 'POST') {
       console.log('posting');
       var body = '';
       request.on('data', (chunk)=> {
    body += chunk;
       })

       request.on('end', () => {
           console.log('after endindg',queryString.parse(body));
           const {user, lastname} = queryString.parse(body);

           let csvData = `\n ${user}, ${lastname}`;

           fs.writeFile('names.csv', csvData, {flag: 'a'}, (error) => {
              if(error) {

              }
           })
       })

   } else {
       

           fs.readFile('index.html', (error, data) => {
            response.end(data);
           })
       
   }
} ).listen(3000);

console.log('Node running on port 300d0')