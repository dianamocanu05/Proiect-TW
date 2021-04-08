let sqlite3 = require('sqlite3').verbose();
let db = sqlite3.Database('../data/mock/mock_data.csv');
let sql = 'SELECT * FROM accidents';
db.all(sql, [], (err,rows) => {
    if(err){
        throw err;
    }
    rows.forEach((row) => {
        console.log(row.name)
    });
});
db.close();