function sendCredentials(form){
        let username = form.userid.value;
        let password = form.pswrd.value;
        console.log(username, password);
        let object = {
            "username" : username,
            "password" : password
        };
    $.ajax({
        type: 'POST',
        url : "http://127.0.0.1:3000/api/login",
        contentType: "application/json",
        headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        data: JSON.stringify(object),
        success: function(data) { successCallback(data) },
        error: function(data) {failCallback(data) },
        dataType: 'json'
    })
}

function successCallback(responseObj){
    alert("Logged in successfully!");
}

function failCallback(responseObj){
    alert("Failed to login!");
}