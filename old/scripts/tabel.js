google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);

function drawTable() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'ID');
    data.addColumn('number', 'Severity');
    data.addColumn('string', 'Start Time');
    data.addColumn('string', 'Street');
    data.addColumn('string', 'Side');
    data.addColumn('string', 'City');
    data.addColumn('string', 'County');
    data.addColumn('string', 'State');
    data.addColumn('number', 'Temperature');
    data.addColumn('number', 'Visibility(mi)');
    data.addColumn('string', 'Weather Condition');

    data.addRows([
        ['A-1',	3,	'08-02-16 5:46',	'I-70 E',	'R','Dayton',	'Montgomery', 'OH',	36.9,	10,	'Light Rain'],
        ['A-2',	2,	'08-02-16 6:07',	'Brice Rd',	'L', 'Reynoldsburg','Franklin',	'OH', 37.9 ,10,	'Light Rain'],
        ['A-3',	2,	'08-02-16 6:49',	'State Route 32',	'R',	'Williamsburg',	'Clermont',	'OH',	36,	10,	'Overcast'],
        ['A-4',	3,	'08-02-16 7:23',	'I-75 S',	'R',	'Dayton',	'Montgomery',	'OH',35.1,	9,	'Mostly Cloudy'],
        ['A-5',	2,	'08-02-16 7:39',	'Miamisburg Centerville Rd',	'R', 'Dayton',	'Montgomery',	'OH',	36,	6,	'Mostly Cloudy'],
        ['A-6',	3,	'08-02-16 7:44',	'Westerville Rd',	'R',	'Westerville',	'Franklin',	'OH',	37.9,	7,	'Light Rain'],
        ['A-7',	2,	'08-02-16 7:59',	'N Woodward Ave',	'R',	'Dayton',	'Montgomery',	'OH',	34,	7,	'Overcast'],
        ['A-8',	3,	'08-02-16 7:59',	'N Main St',	'R',	'Dayton',	'Montgomery',	'OH',	34,	7,	'Overcast'],
        ['A-9',	2,	'08-02-16 8:00',	'Notre Dame Ave',	'L',	'Dayton',	'Montgomery',	'OH',	33.3,	5,	'Mostly Cloudy'],
        ['A-10',	3,	'08-02-16 8:10',	'Westerville Rd',	'R',	'Westerville',	'Franklin',	'OH',	37.4,	3,	'Light Rain']
    ]);
    var cssClassNames = {
        'headerRow': 'cssHeaderRow',
        'tableRow': 'cssTableRow',
        'oddTableRow': 'cssOddTableRow',
        'selectedTableRow': 'cssSelectedTableRow',
        'hoverTableRow': 'cssHoverTableRow',
        'headerCell': 'cssHeaderCell',
        'tableCell': 'cssTableCell',
    };

    var options = {
        showRowNumber: false,
        cssClassNames: cssClassNames
    };
    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, options);
}