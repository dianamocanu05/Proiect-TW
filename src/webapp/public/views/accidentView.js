//pentru lista de state si de tipuri de temperatura
//let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function prettyFormat(json){ //json parse
    //let objects = [];
    json = JSON.parse(json);

    json.forEach(function (obj){
        Object.keys(obj).forEach(function(key){
            objects.push(obj[key]);
        })

    });
    return objects;
}
function getData(callback,url) { //request
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            let response = request.responseText;
            callback(response);

        }
    };
    request.open("GET",url,false);
    request.send(null);
}


let url = "http://127.0.0.1:3000/api/states";
//let objects = []; //aici sunt obiectele
getData(function (result){
    objects = prettyFormat(result);
},url);
//objects.forEach(function (object){console.log(object)}); //afisare

//exports.array = objects;



