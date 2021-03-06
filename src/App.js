const sqlite3 = require('sqlite3').verbose();
const http = require('http');
const url = require('url');
const fs = require('fs');
const AccidentController = require("./server/controllers/accidentController");
const AdminController = require("./server/controllers/adminController");
const hostname = '127.0.0.1';
const port = 3000;

/*
* Creating http server and routing
* */
const server = http.createServer(async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    const reqUrl = url.parse(req.url);

    const path = reqUrl.pathname;

    res.statusCode = 200;

    if(path === '/'){
        directHtml(res,"./src/webapp/public/html/index.html");
    }else if(path === '/favicon.ico'){

    }else if(path === '/report.html'){
        directHtml(res,"./src/webapp/public/html/report.html");
    }else if(path === '/contact.html') {
        directHtml(res, "./src/webapp/public/html/contact.html");

    }else if(path === 'src/webapp/public/img/lightbulb.png'){
        fs.readFile("./src/webapp/public/img/lightbulb.png", function (err, page) {
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.write(Buffer.from(page).toString('base64'));
            res.end();
        });
    }
    else if(path === 'src/webapp/public/img/admin.png'){
        fs.readFile("./src/webapp/public/img/admin.png", function (err, page) {
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.write(page);
            res.end();
        });
    }
    else if(path === 'src/webapp/public/img/diagram.png'){
        fs.readFile("./src/webapp/public/img/diagram.png", function (err, page) {
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.write(page);
            res.end();
        });
    }
    else if(path === 'src/webapp/public/img/user.png'){
        fs.readFile("./src/webapp/public/img/user.png", function (err, page) {
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.write(page);
            res.end();
        });
    }
    else if(path === 'src/webapp/public/img/scholarly-html.svg'){
        fs.readFile("./src/webapp/public/img/scholarly-html.svg", function (err, page) {
            res.writeHead(200, {'Content-Type': 'image/svg+xml'});
            res.write(page);
            res.end();
        });
    }
    else if(path === '/styles/loader.css'){
        fs.readFile('./src/webapp/public/styles/loader.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
    }
    else if(path === '/styles/report.css'){
        fs.readFile('./src/webapp/public/styles/report.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
    }
    else if (path === '/api/loginAdmin' || path === '/loginAdmin.html') {
        directHtml(res, "./src/webapp/public/html/loginAdmin.html");
    }else if(path === '/api/adminPanel' || path === './adminPanel.html'){
        directHtml(res,"./src/webapp/public/html/adminPanel.html");
    }else if(path === '/api/adminPanel.html#update-accident'){
        directHtml(res,"./src/webapp/public/html/adminPanel.html#update-accident");
    }else if(path === '/test'){
        directHtml(res,'./src/webapp/public/html/test.html');
    }
    else if (path === '/styles/loginAdmin.css') {
        fs.readFile('./src/webapp/public/styles/loginAdmin.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
    }
    else if (path === '/src/webapp/app-logic/exportService/exportWebP.js') {
        fs.readFile('./src/webapp/app-logic/exportService/exportWebP.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }
    else if (path === '/src/webapp/app-logic/exportService/exportSVG.js') {
        fs.readFile('./src/webapp/app-logic/exportService/exportSVG.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }else if (path === '/src/webapp/app-logic/exportService/exportCSV.js') {
        fs.readFile('./src/webapp/app-logic/exportService/exportCSV.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }
    else if (path === '/styles/header.css') {
        fs.readFile('./src/webapp/public/styles/header.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
    }else if (path === '/styles/navbar.css') {
        fs.readFile('./src/webapp/public/styles/navbar.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
    } else if (path === '/styles/select.css') {
        fs.readFile('./src/webapp/public/styles/select.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
    }
    else if (path === '/styles/layout.css') {
        fs.readFile('./src/webapp/public/styles/layout.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
    }else if (path === '/styles/filters.css') {
        fs.readFile('./src/webapp/public/styles/filters.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
    }else if (path === '/styles/tags.css') {
        fs.readFile('./src/webapp/public/styles/tags.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
    }
    else if (path === '../app-logic/chartsService/controllers/mapController.js'){
        fs.readFile('./src/webapp/public/views/loginAdminView.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    } else if (path === '../views/mapView.js'){
        fs.readFile('./src/webapp/public/views/mapView.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }else if (path === '../views/tmp.js'){
        fs.readFile('./src/webapp/public/views/tmp.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }
    else if (path === '/src/webapp/app-logic/entities/map.js') {
        fs.readFile('./src/webapp/app-logic/entities/map.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }else if (path === '/src/webapp/app-logic/entities/pieChart.js') {
        fs.readFile('./src/webapp/app-logic/entities/pieChart.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }else if (path === '/src/webapp/app-logic/entities/columnchart.js') {
        fs.readFile('./src/webapp/app-logic/entities/columnchart.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }else if (path === '/src/webapp/public/scripts/inputManager.js') {
        fs.readFile('./src/webapp/public/scripts/inputManager.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }else if (path === '/views/loginAdminView.js') {
        fs.readFile('./src/webapp/public/views/loginAdminView.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }else if (path === '/scripts/admin-utils.js') {
        fs.readFile('./src/webapp/public/scripts/admin-utils.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }else if (path === '/src/webapp/public/views/tagView.js') {
        fs.readFile('./src/webapp/public/views/tagView.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }else if (path === '/src/webapp/app-logic/entities/barchart.js') {
        console.log('05')
        fs.readFile('./src/webapp/app-logic/entities/barchart.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }else if (path === '/src/webapp/app-logic/entities/donutchart.js') {
        console.log('05')
        fs.readFile('./src/webapp/app-logic/entities/donutchart.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }else if (path === '/src/webapp/app-logic/entities/table.js') {
        console.log('05')
        fs.readFile('./src/webapp/app-logic/entities/table.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }else if (path === '/src/webapp/public/scripts/init.js') {
        fs.readFile('./src/webapp/public/scripts/init.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }
    else if (path === '/src/webapp/public/views/accidentView.js') {
        // console.log('05')
        fs.readFile('./src/webapp/public/views/accidentView.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/javascript'});
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

/**
 * Routes for API
 * */
function routing(path, res, req) {
    switch (path) {
        case '/api/getAll':
            return AccidentController.apiGetAllAccidents(res, req);
        case '/api/add': return AccidentController.apiCreateAccident(res,req);
        case '/api/update':return AccidentController.apiUpdateAccident(res,req);
        case '/api/delete' : return AccidentController.apiDeleteAccident(res,req);
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
        case  '/api/get':
            return AccidentController.apiGetAccidents(res,req);
        case  '/api/getWhereCount':
            return AccidentController.apiGetAccidentsWhereCount(res,req);
    }
    if (path.includes('/api/delete')) {
        return AccidentController.apiDeleteAccident(res, req);
    } else if (path.includes('/api/get/')) {

        return AccidentController.apiGetAccidentById(res, req);
    }
    return "Invalid route!";
}

/*
* Starting server
* */
server.listen(port, hostname, () => {
    console.log(`Server running on port ...${port}`);
})