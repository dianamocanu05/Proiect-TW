const fs = require('fs');
const http = require('http');

const sqlite3 = require("sqlite3");
module.exports = {sqlite3}
const port = process.env.PORT || 3000;

//const port = 3000;
const server = http.createServer((req, res) => {
    //res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    const path = "./html/index.html";
    fs.readFile(path, function (err, html) {
        if (err) {
            throw err;
        }
        res.write(html);
        res.end();
    });
});

server.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
