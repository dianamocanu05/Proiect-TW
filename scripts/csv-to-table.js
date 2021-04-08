function getCSV(path) {
    (document).ready(function (){})
    {
        $.ajax({
            type: "GET",
            url: path,
            dataType: "text",
            success: function (data) {
                buildTable(data)
            }
        });
    }
}

function isNotEmpty(row) {
    return row !== "";
}


function buildTable() {
    getCSV.call(this).then(function (response) {
        let allRows = response.split(/\r?\n|\r/).filter(isNotEmpty);
        let table = '<table>';
        for (let singleRow = 0; singleRow < allRows.length; singleRow++) {
            if (singleRow === 0) {
                table += '<thead>';
                table += '<tr>';
            } else {
                table += '<tr>';
            }
            let rowCells = allRows[singleRow].split(',');
            for (let rowCell = 0; rowCell < rowCells.length; rowCell++) {
                if (singleRow === 0) {
                    table += '<th>';
                    table += rowCells[rowCell];
                    table += '</th>';
                } else {
                    table += '<td>';
                    table += rowCells[rowCell];
                    table += '</td>';
                }
            }
            if (singleRow === 0) {
                table += '</tr>';
                table += '</thead>';
                table += '<tbody>';
            } else {
                table += '</tr>';
            }
        }
        table += '</tbody>';
        table += '</table>';

        return table;
    })
}
