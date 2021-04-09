function create_table() {

    let table = document.getElementById("table");
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let header = ['ID', 'Severity', 'Start_Time', 'Street', 'Side', 'City', 'County', 'State', 'Temperature', 'Visibility', 'Weather_condition'];

    let theadTr = document.createElement('tr');
    for (let i = 0; i < header.length; i++) {
        let theadTh = document.createElement('th');
        theadTh.innerHTML = header[i];
        theadTr.appendChild(theadTh);
    }
    thead.appendChild(theadTr);
    table.appendChild(thead);

    for (let j = 0; j < data.length; j++) {
        let tbodyTr = document.createElement('tr');
        for (let k = 0; k < header.length; k++) {
            let tbodyTd = document.createElement('td');
            tbodyTd.innerHTML = data[j][header[k].toLowerCase()];
            tbodyTr.appendChild(tbodyTd);
        }
        tbody.appendChild(tbodyTr);
    }
    table.appendChild(tbody);
}

create_table();
