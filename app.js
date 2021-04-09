const fs = require('fs');
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    console.log(req.url);
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url === "/"){
        routing(res,"./html/index.html");
    }
    else if(req.url !== "/favicon.ico"){
        let url = req.url;
        const extension = url.split('.').pop();
        switch (extension) {
            case "svg":
                res.setHeader('Content-Type','image/svg+xml');
                break;
            case "css":
                res.setHeader('Content-Type', 'text/css');
                break;
            case "js":
                res.setHeader('Content-Type', 'application/javascript');
                break;
            case "html":
                res.setHeader('Content-Type', 'text/html');
                break;
            case "jpg":
                res.setHeader('Content-Type', 'image/jpg');
                break;
            case "png":
                res.setHeader('Content-Type', 'image/png');
                break;
        }
        routing(res,`.${req.url}`);
    }


});

function routing(res, path){

    fs.readFile(path, function (err, html) {
        if (err) {
            throw err;
        }
        res.write(html);
        res.end();
    });
}
server.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
