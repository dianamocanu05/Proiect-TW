import {sqlite3} from "../app";

let list = "aaza";
// exports.select = function (cb){
//     let db = sqlite3.Database("../data/mock/mock-db.sqlite3");
//     db.all("SELECT * FROM accidents", function (err,rows){
//         if(err) return cb(err);
//         let count = 0;
//         rows.forEach(function (row){
//             console.log(row)
//             list[count] = row;
//         });
//         db.close();
//         return cb(null,list);
//     });
// }

export {list}



