const sqlite3 = require('sqlite3').verbose();
const http = require('http');
const url = require('url');
const AccidentController = require("./controllers/accidentController");
const hostname = '127.0.0.1';
const port = 3000;

console.log(AccidentController.apiGetAllAccidents());
// let db = new sqlite3.Database('../../data/us-accidents.db', sqlite3.OPEN_READWRITE, (err) => {
//     if(err){
//         console.error(err.message);
//     }
//     console.log('[BE] Connected to the database!')
// })
//
// const server = http.createServer((req, res) => {
//     const reqUrl = url.parse(req.url);
//     const path = reqUrl.pathname;
//     const result = routing(path,res,req);
//
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/plain');
// })
//
// server.listen(port, hostname, () => {
//     console.log('Server running...');
// })
//
// function routing (path,res,req){
//     switch (path){
//         case '/': return 'home';
//         case '/api/getAll': AccidentController.apiGetAllAccidents(req, res).then(r => console.log(r)); break;
//         case '/api/add': return 'add';
//         case '/api/update': return 'update';
//     }
//     if(path.includes('/api/delete')){
//         return "delete";
//     }else if(path.includes('/api/get/')){
//         return "get by id";
//     }
//     return "Invalid route!";
// }
//
//
//
