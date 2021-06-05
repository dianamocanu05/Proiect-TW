let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function prettyFormat(json){ //json parse
    let states = [];
    json = JSON.parse(json);
    json.forEach(function (obj){states.push(obj.state)});
    return states;
}
function getData(callback) { //request
    let request = new XMLHttpRequest();
    let url = "http://127.0.0.1:3000/api/states";
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            let response = request.responseText;
            callback(response);

        }
    };
    request.open("GET",url,false);
    request.send(null);
}


let states = []; //aici sunt statele
getData(function (result){
    states = prettyFormat(result);
});
states.forEach(function (state){console.log(state)}); //afisare
