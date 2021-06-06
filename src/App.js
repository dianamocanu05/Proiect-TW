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
    // console.log(path);
    res.statusCode = 200;

    if(path === '/'){
        directHtml(res,"./webapp/public/html/index.html");
    }else if(path === '/favicon.ico'){

    }
    else if(path === '/styles/loader.css'){
        fs.readFile('./webapp/public/styles/loader.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
    }
    else if (path === '/api/loginAdmin') {
        directHtml(res, "./webapp/public/html/loginAdmin.html");
    }else if(path === '/api/adminPanel'){
        directHtml(res,"./webapp/public/html/adminPanel.html");
    }else if(path === '/api/adminPanel.html#update-accident'){
        directHtml(res,"./webapp/public/html/adminPanel.html#update-accident");
    }
    else if (path === '/styles/loginAdmin.css') {
        fs.readFile('./webapp/public/styles/loginAdmin.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
    }else if (path === '/styles/header.css') {
        fs.readFile('./webapp/public/styles/header.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
    }else if (path === '/styles/navbar.css') {
        fs.readFile('./webapp/public/styles/navbar.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
    } else if (path === '../mvc/chartsService/controllers/mapController.js'){
        fs.readFile('./webapp/public/views/loginAdminView.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    } else if (path === '../views/mapView.js'){
        fs.readFile('./webapp/public/views/mapView.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }
    else if (path === '/views/map.js') {
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
        case '/api/getCountYear':
            return AccidentController.apiGetAccidentsCountInStatePerYear(res,req);
        case '/api/weathers':
            return AccidentController.apiGetWeathers(res,req);
        case '/api/states':
            return AccidentController.apiGetStates(res,req);
        case '/api/getByTemp':
            return AccidentController.apiGetAccidentsByTemperature(res,req);
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

