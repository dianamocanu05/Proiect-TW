function admin_add_accident(){
    let json = document.getElementsByName("add-accident")[0].value;
    let request = new XMLHttpRequest();
    let url = "http://127.0.0.1:3000/api/add";
    request.open("POST",url,true);
    request.setRequestHeader("Content-Type","application/json");
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status ===200){
            alert("Accident added successfully!");
        }
    };
    request.send(JSON.stringify(json));
}

function admin_delete_accident(){
    console.log(document.getElementsByName("delete-accident")[0].value);
}

function admin_update_accident(){
    console.log(document.getElementsByName("update-accident")[0].value);
}

function admin_import(){

}
