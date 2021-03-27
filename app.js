const http = require('http');
const port = process.env.PORT
const fs = require('fs');

const server = http.createServer((req, res) => {
    //res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const path = "D:\\UNI\\SEM_2\\Proiect TW\\HTML\\index.html";
    fs.readFile(path, function (err, html) {
        if (err) {
            throw err;
        }
        res.end(html);
    });
});

server.listen(port,() => {
    console.log(`Server running at port `+port);
});