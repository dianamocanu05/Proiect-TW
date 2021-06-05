const Map = require("../../entities/map");

module.exports = class MapController extends Controller {
    constructor(url) {
        super(url);
    }

   getData(callback){
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                let response = request.responseText;
                callback(response);

            }
        };
        request.open("GET",this.url,false);
        request.send(null);
    };

}

map = new MapController("http://127.0.0.1:3000/api/states");
map.getData(function (obj) {console.log(obj)});