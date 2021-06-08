
function generateCSVTable(table) {
    let csvTable = ""
    const tableString = table.innerText
    const tableString_array = tableString.split("\n")
    for (let i = 0;i<tableString_array.length;i++)
    {
        const row_split = tableString_array[i].split("\t")
            for(let index_element = 0; index_element<row_split.length;index_element++)
            {
                csvTable += `${row_split[index_element]},`
            }
            csvTable = csvTable.slice(0,-1)

        csvTable += '\n'
    }
    return csvTable;

}

function downloadCSV(filename, csvStringContent) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvStringContent));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}


function exportTableCSV() {
    let table = document.getElementById('table-div')
    downloadCSV("export_csv.csv",generateCSVTable(table))
}
