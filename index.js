const express =require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3000;
const hostname = "localhost";

const app =express();
app.use(morgan('dev'));

app.use(bodyParser.json());
res.send("server is created");
const server =http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`server running at http ${hostname}`)
});