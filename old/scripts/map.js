google.charts.load('current', {
    'packages':['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);
function drawRegionsMap() {

    let ff = [
        ['State', 'Accidents'],
        ['ALABAMA', 100],
        ['ALASKA', 2000],
        ['ARIZONA', 340],
        ['ARKANSAS', 234],
        ['CALIFORNIA', 1934],
        ['COLORADO',2578 ],
        ['CONNECTICUT',3067 ],
        ['DELAWARE', 356],
        ['FLORIDA',835 ],
        ['GEORGIA', 2006],
        ['HAWAII', 1456],
        ['IDAHO',224 ],
        ['ILLINOIS',677 ],
        ['INDIANA', 255],
        ['IOWA', 900],
        ['KANSAS', 355],
        ['KENTUCKY', 600],
        ['LOUISIANA', 2567],
        ['MAINE', 1455],
        ['MONTANA', 283],
        ['NEBRASKA', 396],
        ['NEVADA', 184],
        ['NEW HAMPSHIRE', 903],
        ['NEW JERSEY', 1005],
        ['NEW MEXICO', 1890],
        ['NEW YORK', 245],
        ['NORTH CAROLINA', 677],
        ['NORTH DAKOTA', 899],
        ['OHIO', 455],
        ['OKLAHOMA', 677],
        ['OREGON', 566],
        ['MARYLAND', 788],
        ['MASSACHUSETTS', 988],
        ['MICHIGAN', 122],
        ['MINNESOTA', 233],
        ['MISSISSIPPI', 344],
        ['MISSOURI', 455],
        ['PENNSYLVANIA', 900],
        ['RHODE ISLAND', 899],
        ['SOUTH CAROLINA', 788],
        ['SOUTH DAKOTA', 1222],
        ['TENNESSEE', 133],
        ['TEXAS', 1576],
        ['UTAH', 1870],
        ['VERMONT', 689],
        ['VIRGINIA', 367],
        ['WASHINGTON', 1367],
        ['WEST VIRGINIA', 655],
        ['WISCONSIN', 367],
        ['WYOMING', 488]
    ]
    var data = google.visualization.arrayToDataTable(ff);

    var options = { colorAxis: {colors: ['#B5DE7D', '#FFA500', '#FF7A00']},
    width: 1000, height: 500, region: "US",backgroundColor: 'transparent', resolution: "provinces"};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
   // chart.draw(data, {width: 900, height: 500, region: "US", resolution: "provinces"}, options);
    chart.draw(data, options);
}