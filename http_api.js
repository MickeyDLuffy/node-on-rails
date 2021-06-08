const http = require('http');

http.createServer((request, response) => {
  if(request.url === '/technology') {
      response.write(`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <style>
              h1 {
                  color: red;
                  font-size: 20px;
              }
          </style>
      </head>
      <body>
           <h1>Index here</h1>
      </body>
      </html>`);
      response.end;
  } else if(request.url == '/partner') {
    response.write(``);
    response.end;
  } else {
      response.write('Invalid request')
      response.end();
  }
} ).listen(3000);

console.log('Node running on port 3000')