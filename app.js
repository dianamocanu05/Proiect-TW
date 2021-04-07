const http = require('http');
const fs = require('fs');
<<<<<<< HEAD
=======
process.env.PORT = 5000;
>>>>>>> 7d95624ea7c73891f385c50234ef14c8ff5dc075
const port = process.env.PORT || 3000;
console.log(process.env.PORT)
console.log(port)
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
