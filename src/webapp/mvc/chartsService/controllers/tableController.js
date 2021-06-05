let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports =class TableController{

    getData(state, filters) {
        let data = {
            "State": state
        };
        let result = Object.assign(data, filters);
        let request = new XMLHttpRequest();
        let url = "http://127.0.0.1:3000/api/getWhere";
        request.open("GET", url, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                console.log(request.response);
            }
        };
        request.send(JSON.stringify(data));
    };

    test() {
        let object = {
            "Severity": "2",
            "Side": "R"
        };
        this.getData("CA", object);
    };

}