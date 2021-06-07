
function onCountyChange(){

    const value = document.getElementById("county-dropdown").value
    console.log(`State ${value} was selected from dropdown`)
    fetch_and_draw_barchart(value)
    fetch_and_draw_donut(value)
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

function get_export(format, width, heigth, filename) {
    console.log('webp export function was called')

    const svg = document.getElementsByTagName('svg')[1]; //TODO remove hardcoded [1] index
    const img = document.getElementById('plswork');
    const canvas = document.getElementById('plsworkcanvas');
    const xml = new XMLSerializer().serializeToString(svg);
    const svg64 = btoa(xml);
    const b64Start = 'data:image/svg+xml;base64,';
    img.src = b64Start + svg64;
    img.onload = e => {
        canvas.width = width
        canvas.height = heigth
        canvas.getContext('2d').fillRect(0, 0, width, heigth);
        canvas.getContext('2d').drawImage(img, 0, 0, width, heigth);
        const link = document.createElement('a');
        link.download = filename;
        link.href = canvas.toDataURL(format);
        link.click();
        link.delete;
    }
}