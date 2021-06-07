
function onCountyChange(){

    const value = document.getElementById("county-dropdown").value
    console.log(value)
    fetch_and_draw_barchart(value)
    // fetch_and_draw_donut(value)
}
function initCountyDropdown() {
    console.log('fethcing county name list')
    const _url = 'http://127.0.0.1:3000/api/states'
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            let response = request.responseText;
            console.log(JSON.parse(response));
            var select = document.getElementById("county-dropdown");
            for (let county of JSON.parse(response)) {
                // console.log(county.state)
                var option = document.createElement("option");
                option.text = county.state;
                option.value = county.state;
                if (county.state === 'CA') {
                    option.selected = true
                }
                select.appendChild(option);
            }
        }
    };
    request.open("GET", _url, false);
    request.send(null);
}