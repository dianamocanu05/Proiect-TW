const sqlite3 = require("sqlite3");
resolve = require('path').resolve


function query(cb){
    let db_path = resolve("data\\mock\\mock-db.sqlite3");
    let list = [];
    let db = new sqlite3.Database(db_path);
    console.log(db_path)
    console.log(resolve("."))
    db.all("SELECT * FROM accidents", function (err,rows){
        if(err) return cb(err);
        let count = 0;
        rows.forEach(function (row){
            console.log(row)
            list[count] = row;
            count++
        });
        db.close();
        return list
    });
}

module.exports  = {query}



