const url = require('url');
// import { query } from 'express';
// import { URL } from 'url';

const address = 'http://localhost:3000/index.html?year=2021&month=June';

const newAddress = url.parse(address, true);
const q = require('querystring');
// const newAddress = new URL(address);


console.log('host', newAddress.host);
console.log('pathname', newAddress.pathname);
console.log('search query', newAddress.search);
console.log('query', newAddress.query);
console.log('host', newAddress.host);

var queryToObject = newAddress.query;
let objectToquery = q.stringify({name: 'dDee', age: '23'});

console.log('oooo',queryToObject);
console.log('queryString',objectToquery);
const webaddress = url.format({
    protocol: 'http',

})
