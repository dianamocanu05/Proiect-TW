const http = require('http');
const fs = require('fs');
process.env.PORT = 5000;
const port = process.env.PORT || 3000;
console.log(process.env.PORT)
console.log(port)
const server = http.createServer((req, res) => {
    //res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    const path = "D:\\UNI\\SEM_2\\Proiect TW\\HTML\\index.html";
    fs.readFile(path, function (err, html) {
        if (err) {
            throw err;
        }
        res.end(html);
    });
});

server.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
