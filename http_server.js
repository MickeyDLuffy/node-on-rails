const http = require('http');

http.createServer((request, response) => {
    console.log(request);
    
    response.write("Succesfully accesd the server");
    response.end();
} ).listen(3000);

console.log('Node running on port 3000')