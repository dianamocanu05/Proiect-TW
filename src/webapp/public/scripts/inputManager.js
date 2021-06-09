/**
 * Script retrieves user input (states, criteria and visualisation mode) and
 * deploys desired action
 * */

const tagContainer = document.querySelector('.tag-container');
const input = document.querySelector('.tag-container input');
const tagContainer1 = document.querySelector('.tagC-containerC');
const input1 = document.querySelector('.tagC-containerC input');
const select = document.getElementById("selectVisualisation");
let conditions = ["ID", "Severity", "Start_Time", "End_Time", "Start_Lat", "Start_Lng", "End_Lat", "End_Lng",
    "Distance", "Description", "Number", "Street", "Side", "City", "County", "State", "Zipcode", "Country",
    "Timezone", "Airport_Code", "Weather_Timestamp", "Temperature", "Wind_Chill", "Humidity", "Pressure",
    "Visibility", "Wind_Direction", "Wind_Speed", "Precipitation", "Weather_Condition", "Amenity", "Bump", "Crossing", "Give_Way",
    "Junction", "No_Exit", "Railway", "Roundabout", "Station", "Stop", "Traffic_Calming", "Traffic_Signal", "Turning_Loop", "Sunrise_Sunset", "Civil_Twilight", "Nautical_Twilight", "Astronomical_Twilight"];

let visualisation;
let previous_div = "";
let possible_visualisations = [];
let selectedVisualisation;


select.addEventListener("mouseover", function () {
    select.options.length = 1;
    //states = tags;
    filters = tags1;
    // run();
    visualisationAdapter();
    for (var i = 0; i < possible_visualisations.length; i++) {
        var opt = possible_visualisations[i];
        var el = document.createElement("option");
        el.textContent = opt;
        //el.value = opt;
        select.appendChild(el);
    }
})

select.addEventListener("change", function () {
    alert(select.value);
    selectedVisualisation = select.value;
})


/**
 * Method centralizes data and deploys chart rendering
 * @returns {Promise<void>}
 */
async function run() {
    visualisation = selectedVisualisation;
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
    });
}

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        e.target.value.split(',').forEach(tag => {
            //
            const exists1 = objects.includes(tag);
            const exists2 = tags.includes(tag);

            if (exists1 === true && exists2 === false) {
                tags.push(tag);
            }
        });

        addTags();
        input.value = '';
    }
});
tagContainer.addEventListener('click', (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName === 'I') {
        const tagLabel = e.target.getAttribute('data-item');
        const index = tags.indexOf(tagLabel);
        tags.splice(index, 1);
        addTags();
    }
})


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
            if (exists1 === true && exists2 === false) {
                tags1.push(tagC);
            }
        });

        addTags1();
        input1.value = '';
    }
});
tagContainer1.addEventListener('click', (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName === 'I') {
        const tagLabel = e.target.getAttribute('data-item2');
        const index = tags1.indexOf(tagLabel);
        tags1.splice(index, 1);
        addTags1();
    }
})

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
    let divs = ["table-div","barchart-div","columnchart_values","donutchart","regions_div","chart_div_l"];
    for(let div of divs){
        document.getElementById(div).style.display = "none";
    }
    switch (visualisation) {
        case "Table":
            await loadVisualisation("table-div", "../../app-logic/entities/table.js",runTable);
            break;
        case "Barchart" :
            await loadVisualisation("barchart-div", "../../app-logic/entities/barchart.js",fetch_and_draw_barchart);
            break;
        case "Columnchart" :
            await loadVisualisation("columnchart_values", "../../app-logic/entities/columnchart.js",runColumnchart);
            break;
        case "Donutchart" :
            await loadVisualisation("donutchart", "../../app-logic/entities/donutchart.js",fetch_and_draw_donut);
            break;
        case "Map" :
            await loadVisualisation("regions_div", "../../app-logic/entities/map.js",runMap);
            break;
        case "Piechart" :
            await loadVisualisation("chart_div_l", "../../app-logic/entities/piechart.js",runPiechart);
            break;
    }
}

/**
 * Method loads chart-creating script for specific chart type
 * @param div_name
 * @param script_src
 * @param fct
 * @returns {Promise<void>}
 */
async function loadVisualisation(div_name, script_src,fct) {
    let div = document.getElementById(div_name);
    div.style.display = "block";
    previous_div = div;
    await fct();
    //const script = await import(script_src);
    //console.log(script);
}



let checkbox_filters = ['Sunrise_Sunset','Civil_Twilight',
                        'Nautical_Twilight','Astronomical_Twilight',
                        'Side','Bump','Crossing','Give_Way','Junction',
                        'No_Exit','Railway','Roundabout','Station','Stop',
                        'Traffic_Calming','Traffic_Signal','Amenity','Turning_Loop'
                        ];
let boolean_filters = ['Sunrise_Sunset','Civil_Twilight',
                        'Nautical_Twilight','Astronomical_Twilight'];

let count = 0;
let input_fields = [];
function addFilter(filter){
    let form = document.getElementById("adv-filters");
    let input, check1, check2, label1, label2;

    if(checkbox_filters.includes(filter)) {
        if(boolean_filters.includes(filter)) { //True/False
            label1 = document.createElement("label");
            check1 = document.createElement("input");
            check1.name = filter + count;
            check1.type = "checkbox";
            label1.innerText = filter + " True : ";
            form.appendChild(label1);
            form.appendChild(check1);

            label2 = document.createElement("label");
            check2 = document.createElement("input");
            check2.type = "checkbox";
            check2.name = filter + count;
            label2.innerText = "False : ";
            form.append(label2);
            form.appendChild(check2);

        }else{
            if(filter !== 'Side'){ //L/R
                label1 = document.createElement("label");
                check1 = document.createElement("input");
                check1.type = "checkbox";
                check1.name = filter + count;
                label1.innerText = filter + " Left : ";
                form.append(label1);
                form.appendChild(check1);

                label2 = document.createElement("label");
                check2 = document.createElement("input");
                check2.type = "checkbox";
                check2.name = filter + count;
                label2.innerText = "Right : ";
                form.append(label2);
                form.appendChild(check2);

            }else{ //Day/Night
                label1 = document.createElement("label");
                check1 = document.createElement("input");
                check1.type = "checkbox";
                check2.name = filter + count;
                label1.innerText = filter + "  Day : ";
                form.appendChild(label1);
                form.appendChild(check1);

                label2 = document.createElement("label");
                check2 = document.createElement("input");
                check2.type = "checkbox";
                check2.name = filter + count;
                label2.innerText = "Night : ";
                form.appendChild(label2);
                form.appendChild(check2);
            }
        }
        input_fields.push(check1.name);
        input_fields.push(check2.name);
    }else{
        label1 = document.createElement("label");
        input = document.createElement("input");
        input.type = "text";
        input.name = filter + count;
        label1.innerText = filter + " : ";
        form.append(label1);
        form.appendChild(input);
        input_fields.push(input.name);
    }


    form.appendChild(document.createElement("br"));
}

