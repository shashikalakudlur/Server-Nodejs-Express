const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = "localhost";
const port = 8000;
const server = http.createServer((req, res) => {
    //console.log(req.headers);
    /* res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<html><body><h1>Hello world</h1></body></html>');

});
server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
});*/

    console.log("Request for " + req.url + 'by method' + req.method);
    if (req.method == 'GET') {
        var fileUrl;
        if (req.url == '/') fileUrl = '/aboutus.html';
        else fileUrl = req.url;
        var filePath = path.resolve('./public' + fileUrl);
        const fileExt = path.extname(filePath);
        if (fileExt == '.html') {
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    res.statusCode = 404;
                    res.setHeader('content-Type', 'text/html');
                    res.end('<html><body><h1>Error 404:' + fileUrl + 'not found </h1></body></html>');
                    return;
                }
                res.statusCode = 200;
                res.setHeader('content-Type', 'text/html');
                fs.createReadStream(filePath).pipe(res);
            })
        } else {
            res.statusCode = 404;
            res.setHeader('content-Type', 'text/html');
            res.end('<html><body><h1>Error 404:' + fileUrl + 'not an Html file </h1></body></html>');
            return;
        }
    } else {
        res.statusCode = 404;
        res.setHeader('content-Type', 'text/html');
        res.end('<html><body><h1>Error 404:' + req.method + 'not supported</h1></body></html>');
        return;
    }
})
server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
})