const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

require('dotenv').config();

const server = http.createServer(app);

server.listen(port);


// console.log(process.env.API_URL);
// console.log('mongo-atlas' + process.env.MONGO_ATLAS_PW);
// console.log('secret' + process.env.JWT_KEY);
