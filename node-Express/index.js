const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const hostname = 'localhost';
const port = 4000;
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');
    next();
});

/*
app.get('/dishes', (req, res, next) => {
    res.end('will send all the dishes to you!');
});
app.post('/dishes', (req, res, next) => {
    res.end('will add the dish: ' + req.body.name + 'with details:' + req.body.description);
});
app.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
});
app.delete('/dishes', (req, res, next) => {
    res.end('Deleting all the dishes!');
});



app.get('/dishes/:dishId', (req, res, next) => {
    res.end('will send details of the dish:' + req.params.dishId + 'to you!');
});

app.post('/dishes/:dishId', (req, res, next) => {
    res.end('will add the dish: ' + req.body.name + 'with details:' + req.body.description);
});

app.put('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
});

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleting all the dishes!');
});
*/

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