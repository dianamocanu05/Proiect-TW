
function sendCredentials(form){
        let username = form.userid.value;
        let password = form.pswrd.value;
        console.log(username, password);
        let object = {
            "username" : username,
            "password" : password
        };

        let request = new XMLHttpRequest();
        let url = "http://127.0.0.1:3000/api/login";
        request.open("POST",url,true);
        request.setRequestHeader("Content-Type","application/json");
        request.onreadystatechange = function(){
            if(request.readyState === 4 && request.status ===200){
                alert(request.response);
                if(request.response === "Logged in successfully!") {
                    //redirect
                    window.location.replace("http://127.0.0.1:3000/api/adminPanel");
                }else{
                }
            }
        };
        request.send(JSON.stringify(object));
}

