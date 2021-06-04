function getData(state, filters){
    //filters being a map: FilterName : FilterValue
    let data = {
        "State" : state
    };

    let result = JSON.stringify(Array.from(filters.entries()));

    console.log(JSON.stringify(data));
    // let request = new XMLHttpRequest();
    // let url = "http://127.0.0.1:3000/api/getWhere";
    // request.open("GET",url,true);
    // request.setRequestHeader("Content-Type","application/json");
    // request.onreadystatechange = function(){
    //     if(request.readyState === 4 && request.status ===200){
    //         alert(request.response);
    //     }
    // };
    // request.send(JSON.stringify(data));
}

let map = new Map([
    ["Severity","2"],
    ["Side","R"]
]);
getData("CA", map);

