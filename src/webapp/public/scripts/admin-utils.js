/*
* Functions that manage admin panel
* */


/**
 * Method retrieves admin input (json) and adds the corresponding accident in database
 */
function admin_add_accident() {
    let json = document.getElementsByName("add-accident")[0].value;
    let request = new XMLHttpRequest();
    let url = "http://127.0.0.1:3000/api/add";
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            alert("Accident added successfully!");
        }
    };
    request.send(JSON.stringify(json));
}

/**
 * Method retrieves admin input (json) and deletes the corresponding accident from database
 */
function admin_delete_accident() {
    let json = document.getElementsByName("delete-accident")[0].value;
    //console.log(json);
    let request = new XMLHttpRequest();
    let url = "http://127.0.0.1:3000/api/delete";
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            alert("Accident deleted successfully!");
        }
    };
    console.log(typeof json);
    request.send(JSON.stringify(json));
}

/**
 * Method retrieves admin input (json) and updates the corresponding accident in database
 */
function admin_update_accident() {
    let json = document.getElementsByName("update-accident")[0].value;
    let request = new XMLHttpRequest();
    let url = "http://127.0.0.1:3000/api/update";
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            alert("Accident updated successfully!");
        }
    };
    request.send(JSON.stringify(json));
}

/**
 * Method retrieves admin input (file) and imports database
 */
function admin_import() {
    let fileUpload = document.getElementById("fileupload");
    fileUpload.onchange = function (event) {


        let
            db = fileUpload.files[0],
            fileName = db.name,
            fileSize = db.size;

        let reader = new FileReader(),
            binary, base64;
        reader.addEventListener('loadend', function () {
            binary = reader.result; // binary data (stored as string), unsafe for most actions
            base64 = btoa(binary); // base64 data, safer but takes up more memory
        }, false);
        reader.readAsBinaryString(db);
    }
}


