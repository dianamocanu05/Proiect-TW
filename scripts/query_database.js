const sqlite3 = require("sqlite3");
resolve = require('path').resolve


function query(){
    let db_path = resolve("data\\mock\\mock-db.sqlite3");
    let list = [];
    let count = 0;
    let db = new sqlite3.Database(db_path);
    db.all("SELECT * FROM accidents", function (err,rows){
        if(err) return err;
        rows.forEach(function (row){
            console.log(row);
            list[count] = row;
            count++
        });
        db.close();
        return list;
    });
}

window.data = query();
