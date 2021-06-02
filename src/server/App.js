const sqlite3 = require('sqlite3').verbose();
const http = require('http');
const url = require('url');
const AccidentController = require("./controllers/accidentController");
const hostname = '127.0.0.1';
const port = 3000;

//
// let db = new sqlite3.Database('D:\\UNI\\SEM_2\\Proiect-TW\\data\\database.db', sqlite3.OPEN_READWRITE, (err) => {
//     if(err){
//         console.error(err.message);
//     }
//     console.log('[BE] Connected to the database!')
// })

const server = http.createServer(async(req, res) => {
    const reqUrl = url.parse(req.url);
    const path = reqUrl.pathname;
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    await routing(path,res,req);

    res.end();

})

server.listen(port, hostname, () => {
    console.log('Server running on port 5000...');
})

function routing (path,res,req){
    switch (path){
        case '/': return 'home';
        case '/api/getAll': return AccidentController.apiGetAllAccidents();
        case '/api/add': return 'add';
        case '/api/update': return 'update';
    }
    if(path.includes('/api/delete')){
        return "delete";
    }else if(path.includes('/api/get/')){
        return AccidentController.apiGetAccidentById(res,req);
    }
    return "Invalid route!";
}



