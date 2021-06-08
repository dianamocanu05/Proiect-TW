/**
 * Script retrieves user input (states, criteria and visualisation mode) and
 * deploys desired action
 * */

const tagContainer = document.querySelector('.tag-container');
const input = document.querySelector('.tag-container input');
const tagContainer1 = document.querySelector('.tagC-containerC');
const input1 = document.querySelector('.tagC-containerC input');
let conditions = ["ID", "Severity", "Start_Time", "End_Time", "Start_Lat", "Start_Lng", "End_Lat", "End_Lng",
    "Distance", "Description", "Number", "Street", "Side", "City", "County", "State", "Zipcode", "Country",
    "Timezone", "Airport_Code", "Weather_Timestamp", "Temperature", "Wind_Chill", "Humidity", "Pressure",
    "Visibility", "Wind_Direction", "Wind_Speed", "Precipitation", "Weather_Condition", "Amenity", "Bump", "Crossing", "Give_Way",
    "Junction", "No_Exit", "Railway", "Roundabout", "Station", "Stop", "Traffic_Calming", "Traffic_Signal", "Turning_Loop", "Sunrise_Sunset", "Civil_Twilight", "Nautical_Twilight", "Astronomical_Twilight"];

let visualisation;
let previous_div = "";
let possible_visualisations = [];

/**
 * Method centralizes data and deploys chart rendering
 * @returns {Promise<void>}
 */
async function run(){
    states = tags;
    filters = tags1;
    visualisationAdapter();
    visualisation = possible_visualisations[0];
    await showResult();
}

/**
 * Method creates text field for states
 * @param label
 * @returns {HTMLDivElement}
 */
function createTag(label) {
    const div = document.createElement('div');
    div.setAttribute('class', 'tag');
    const span = document.createElement('span');
    span.innerHTML = label;
    const closeIcon = document.createElement('i');
    closeIcon.innerHTML = 'x';
    closeIcon.setAttribute('class', 'material-icons');
    closeIcon.setAttribute('data-item', label);
    div.appendChild(span);
    div.appendChild(closeIcon);
    return div;
}

/**
 * Method deletes tag from user input on demand (onclick x)
 */
function clearTags() {
    document.querySelectorAll('.tag').forEach(tag => {
        tag.parentElement.removeChild(tag);
    });
}

/**
 * Method adds tag
 */
function addTags() {
    clearTags();
    tags.slice().reverse().forEach(tag => {
        tagContainer.prepend(createTag(tag));
        //localStorage.setItem('h', JSON.stringify(tag));
    });
}
input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        e.target.value.split(',').forEach(tag => {
            //
            const exists1 = objects.includes(tag);
            const exists2 = tags.includes(tag);
            if (exists1 === true && exists2 === false){
                tags.push(tag);
            }
        });

        addTags();
        input.value = '';
    }
});

console.log(tags);
input.focus();

/**
 * Method creates text field for criteria
 * @param label
 * @returns {HTMLElement}
 */
function createTag1(label) {
    const div1 = document.createElement('div1');
    div1.setAttribute('class', 'tagC');
    const span2 = document.createElement('span2');
    span2.innerHTML = label;
    const closeIcon1 = document.createElement('i');
    closeIcon1.innerHTML = 'x';
    closeIcon1.setAttribute('class', 'material-icons2');
    closeIcon1.setAttribute('data-item2', label);
    div1.appendChild(span2);
    div1.appendChild(closeIcon1);
    return div1;
}

/**
 * Method deletes tag
 */
function clearTags1() {
    document.querySelectorAll('.tagC').forEach(tagC => {
        tagC.parentElement.removeChild(tagC);
    });
}

/**
 * Method adds tag
 */
function addTags1() {
    clearTags1();
    tags1.slice().reverse().forEach(tagC => {
        tagContainer1.prepend(createTag1(tagC));
    });
}
input1.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        e.target.value.split(',').forEach(tagC => {
            //
            const exists1 = conditions.includes(tagC);
            const exists2 = tags1.includes(tagC);
            if (exists1 === true && exists2 === false){
                tags1.push(tagC);
            }
        });

        addTags1();
        input1.value = '';
    }
});

console.log(tags1);
input1.focus();


/**
 * Method decides what charts are available based on user input
 */
function visualisationAdapter() {
    console.log(states);
    console.log(filters);
    possible_visualisations = ["Table"]; //works for any type of input

    if (states.length >= 2) {
        possible_visualisations.push("Piechart"); //for 2 (or more) states min
    }
    if (states.length === 1) {
        possible_visualisations.push("Donutchart");
        possible_visualisations.push("Barchart");
        possible_visualisations.push("Columnchart");
    }
    console.log(possible_visualisations);
}

/**
 * Method deploys corresponding action
 * @returns {Promise<void>}
 */
async function showResult() {
    // if(previous_div !== "") {
    //     // document.getElementById(previous_div).style.display = "none";
    // }
    switch (visualisation) {
        case "Table":
            await loadVisualisation("table-div","../../app-logic/entities/table.js"); break;
        case "Barchart" :
            await loadVisualisation("barchart-div", "../../app-logic/entities/barchart.js"); break;
        case "Columnchart" :
            await loadVisualisation("columnchart_values", "../../app-logic/entities/columnchart.js"); break;
        case "Donutchart" :
            await loadVisualisation("donutchart", "../../app-logic/entities/donutchart.js"); break;
        case "Map" :
            await loadVisualisation("regions_div", "../../app-logic/entities/map.js"); break;
        case "Piechart" :
            await loadVisualisation("chart_div_l","../../app-logic/entities/piechart.js"); break;
    }
}

/**
 * Method loads chart-creating script for specific chart type
 * @param div_name
 * @param script_src
 * @returns {Promise<void>}
 */
async function loadVisualisation(div_name, script_src) {
    let div = document.getElementById(div_name);
    // div.style.display = "block";
    previous_div = div;
    const script = await import(script_src);
}