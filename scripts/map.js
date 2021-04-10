google.charts.load('current', {
    'packages':['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);
function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['State', 'Accidents'],
        ['US-AL', 100],
        ['US-AK', 2000],
        ['US-AZ', 340],
        ['US-AR', 234],
        ['US-CA', 1934],
        ['US-CO',2578 ],
        ['US-CT',3067 ],
        ['US-DE', 356],
        // ['US-DC',789 ],
        ['US-FL',835 ],
        ['US-GA', 2006],
        ['US-HI', 1456],
        ['US-ID',224 ],
        ['US-IL',677 ],
        ['US-IN', 255],
        ['US-IA', 900],
        ['US-KS', 355],
        ['US-KY', 600],
        ['US-LA', 2567],
        ['US-ME', 1455],
        ['US-MT', 283],
        ['US-NE', 396],
        ['US-NV', 184],
        ['US-NH', 903],
        ['US-NJ', 1005],
        ['US-NM', 1890],
        ['US-NY', 245],
        ['US-NC', 677],
        ['US-ND', 899],
        ['US-OH', 455],
        ['US-OK', 677],
        ['US-OR', 566],
        ['US-MD', 788],
        ['US-MA', 988],
        ['US-MI', 122],
        ['US-MN', 233],
        ['US-MS', 344],
        ['US-MO', 455],
        ['US-PA', 900],
        ['US-RI', 899],
        ['US-SC', 788],
        ['US-SD', 1222],
        ['US-TN', 133],
        ['US-TX', 1576],
        ['US-UT', 1870],
        ['US-VT', 689],
        ['US-VA', 367],
        ['US-WA', 1367],
        ['US-WV', 655],
        ['US-WI', 367],
        ['US-WY', 488]
    ]);

    var options = { colorAxis: {colors: ['#FFF59E', '#00853f', '#e31b23']},
    width: 900, height: 500, region: "US", resolution: "provinces"};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
   // chart.draw(data, {width: 900, height: 500, region: "US", resolution: "provinces"}, options);
    chart.draw(data, options);
}