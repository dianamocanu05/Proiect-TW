/**
 * Method parses json and formats data
 * @param json
 * @returns {[]}
 */
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

/**
 * Method makes a request for the api
 * @param callback
 * @param url
 */
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

getData(function (result){
    objects = prettyFormat(result);
},url);




