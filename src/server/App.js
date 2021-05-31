const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../../data/us-accidents.db', sqlite3.OPEN_READWRITE, (err) => {
    if(err){
        console.error(err.message);
    }
    console.log('[BE] Connected to the database!')
})

// db.serialize(() => {
//     db.each(`SELECT severity FROM accidents where id='A-1'`, (err, row) => {
//         if (err) {
//             console.error(err.message);
//         }
//         console.log(row.Severity);
//     });
// });
//
// db.close((err) => {
//     if (err) {
//         console.error(err.message);
//     }
//     console.log('Close the database connection.');
// });