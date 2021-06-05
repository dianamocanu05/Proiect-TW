const sqlite3 = require('sqlite3').verbose();
const http = require('http');
const url = require('url');
const fs = require('fs');
const AccidentController = require("./server/controllers/accidentController");
const AdminController = require("./server/controllers/adminController");
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const reqUrl = url.parse(req.url);

    const path = reqUrl.pathname;
    res.statusCode = 200;
    if (path === '/api/loginAdmin') {
        directHtml(res, "./webapp/public/html/loginAdmin.html");
    }
    else if (path === '/styles/loginAdmin.css') {
        fs.readFile('./webapp/public/styles/loginAdmin.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
    }else if (path === '/views/loginAdminView.js') {
        fs.readFile('./webapp/public/views/loginAdminView.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }
    else {
        res.setHeader('Content-Type', 'application/json');
        await routing(path, res, req);
        res.end();
    }

});

function directHtml(res, path) {
    fs.readFile(path, function (err, html) {
        if (err) {
            throw err;
        }
        res.write(html);
        res.end();
    });
}

function routing(path, res, req) {
    switch (path) {
        case '/':
            return 'home';
        case '/api/getAll':
            return AccidentController.apiGetAllAccidents(res, req);
        case '/api/add':
            return 'add';
        case '/api/update':
            return 'update';
        case '/api/getWhere' :
            return AccidentController.apiGetAccidentsWhere(res, req);
        case '/api/login' :
            return AdminController.apiLoginAdmin(res, req);
        case '/api/getCount':
            return AccidentController.apiGetAccidentsCount(res,req);

    }
    if (path.includes('/api/delete')) {
        return AccidentController.apiDeleteAccident(res, req);
    } else if (path.includes('/api/get/')) {

        return AccidentController.apiGetAccidentById(res, req);
    }
    return "Invalid route!";
}

server.listen(port, hostname, () => {
    console.log('Server running on port 5000...');
})

