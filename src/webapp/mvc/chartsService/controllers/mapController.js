let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Map = require("./test");
function prettyFormat(json){ //json parse
    let objects = [];
    json = JSON.parse(json);

    json.forEach(function (obj){
        Object.keys(obj).forEach(function(key){
            objects.push(obj[key]);
        })

    });
    return objects;
}

class MapController {
    constructor(url_states, url_count) {
        this.url_states = url_states;
        this.url_count = url_count;
    }

    async init(){
        const data = await this.getData();
    }

    async getData() {
        let states = [];
        let counts = [];
        await this.getStates(function (list) {
            states = prettyFormat(list);
        });
        await states.forEach((state) => this.getAccidentCount(state, function (count) {
            //console.log(count);
            counts.push(count)
        }));

        let map = await this.createMap(states, counts);
        return map;
    }

    async createMap(states,counts){
        let map = {};
        states.forEach(function (k, i) {
            map[k] = counts[i];
        });
        console.log(map);
    }


    getStates(callback)
    {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                let response = request.responseText;
                callback(response);

            }
        };
        request.open("GET", this.url_states, false);
        request.send(null);
    }
    ;

    async getAccidentCount(state, callback)
    {
        let request = new XMLHttpRequest();
        request.open("POST", this.url_count, false);
        request.setRequestHeader('Content-type', 'application/json');
        request.onreadystatechange = await function () {
            if (request.readyState === 4 && request.status === 200) {
                let response = request.responseText;
                callback(response);
            }
        };
        let state_json = {"State": state};
        //console.log(JSON.stringify(state_json));
        request.send(JSON.stringify(state_json));
    }

}

// map = new MapController("http://127.0.0.1:3000/api/states","http://127.0.0.1:3000/api/getCount");
// map.init().then(r => console.log(r));

module.exports = MapController;