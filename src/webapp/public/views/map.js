google.charts.load('current', {'packages': ['geochart']});
google.charts.setOnLoadCallback(run);
const states = [
    'AL',
    'AK',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY']

const _url = 'http://127.0.0.1:3000/api/getCount';
const statesCounts = [];

async function run() {
    await fetch_and_draw_map();
}

async function fetch_and_draw_map() {
    for (let state of states) {
        await getData(state);
    }
    draw_map(statesCounts);
}

function collectData(state, count) {
    console.log(state);
    let fullName = us_states_json[state];
    console.log(fullName,count);
    statesCounts.push([fullName, parseInt(count)]);
}

async function getData(state) {
    let data = {
        "State": state
    };
    console.log("fetching data...");
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            let count = request.responseText;
            collectData(state, count);
        }
    }
    request.open("POST", _url, false);
    request.send(JSON.stringify(data));
}


function draw_map(input) {
    let header = ['State','Accidents'];
    let data = [];
    data[0] = header;
    let count = 1;
    for(let i of input){
        data[count] = i;
        count++;
    }
    console.log(typeof data);


    let x = google.visualization.arrayToDataTable(data);
    console.log(x);
    var options = {
        colorAxis: {colors: ['#B5DE7D', '#FFA500', '#FF7A00']},
        width: 1000, height: 500,
        region: "US",
        backgroundColor: 'transparent',
        resolution: "provinces"
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(x, options);
}


const us_states_json = {
    "AL": "ALABAMA",
    "AK": "ALASKA",
    "AZ": "ARIZONA",
    "AR": "ARKANSAS",
    "CA": "CALIFORNIA",
    "CO": "COLORADO",
    "CT": "CONNECTICUT",
    "DE": "DELAWARE",
    "FL": "FLORIDA",
    "GA": "GEORGIA",
    "HI": "HAWAII",
    "ID": "IDAHO",
    "IL": "ILLINOIS",
    "IN": "INDIANA",
    "IA": "IOWA",
    "KS": "KANSAS",
    "KY": "KENTUCKY",
    "LA": "LOUISIANA",
    "ME": "MAINE",
    "MD": "MARYLAND",
    "MA": "MASSACHUSETTS",
    "MI": "MICHIGAN",
    "MN": "MINNESOTA",
    "MS": "MISSISSIPPI",
    "MO": "MISSOURI",
    "MT": "MONTANA",
    "NE": "NEBRASKA",
    "NV": "NEVADA",
    "NH": "NEW HAMPSHIRE",
    "NJ": "NEW JERSEY",
    "NM": "NEW MEXICO",
    "NY": "NEW YORK",
    "NC": "NORTH CAROLINA",
    "ND": "NORTH DAKOTA",
    "OH": "OHIO",
    "OK": "OKLAHOMA",
    "OR": "OREGON",
    "PA": "PENNSYLVANIA",
    "RI": "RHODE ISLAND",
    "SC": "SOUTH CAROLINA",
    "SD": "SOUTH DAKOTA",
    "TN": "TENNESSEE",
    "TX": "TEXAS",
    "UT": "UTAH",
    "VT": "VERMONT",
    "VA": "VIRGINIA",
    "WA": "WASHINGTON",
    "WV": "WEST VIRGINIA",
    "WI": "WISCONSIN",
    "WY": "WYOMING"
};