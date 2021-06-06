const Map = require("../../mvc/entities/map");
const MapController = require("../../mvc/chartsService/controllers/mapController");
module.exports = function renderMap() {
    console.log("HELLO");
    //let controller = new MapController("http://127.0.0.1:3000/api/states", "http://127.0.0.1:3000/api/getCount");
    //let data = controller.getData();
    let map = new Map("", "USA data", "map_div");
}

