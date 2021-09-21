const http = require('http');
const apps=require('./app');
const app=apps();
const server=http.createServer(app);


server.listen(8000,()=>{console.log('running on https://localhost:8000')});
