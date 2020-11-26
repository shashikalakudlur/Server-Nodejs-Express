const express = require('express');
const http = require('http');
const morgan = require('morgan');
const hostname = 'localhost';
const port = 4000;
const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {

    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});
const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
});