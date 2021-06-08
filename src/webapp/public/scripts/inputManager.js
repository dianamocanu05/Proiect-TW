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
let states = [];
let filters = [];
let visualisation;
let previous_div = "";
let possible_visualisations = [];

function run() {
    states = tags;
    filters = tags1;
    visualisationAdapter();
}

select.addEventListener("click", function () {
    select.options.length = 0;
    run();
    for (var i = 0; i < possible_visualisations.length; i++) {
        var opt = possible_visualisations[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
})

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

function clearTags() {
    document.querySelectorAll('.tag').forEach(tag => {
        tag.parentElement.removeChild(tag);
    });
}

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
            if (exists1 == true && exists2 == false) {
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

function clearTags1() {
    document.querySelectorAll('.tagC').forEach(tagC => {
        tagC.parentElement.removeChild(tagC);
    });
}

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

async function showResult() {
    if (previous_div !== "") {
        const div = document.getElementById(previous_div);
        div.style.display = "none";
    }
    switch (visualisation) {
        case "Table":
            await loadVisualisation("table-div", "../../mvc/entities/table.js");
            break;
        case "Barchart" :
            await loadVisualisation("barchart-div", "../../mvc/entities/barchart.js");
            break;
        case "Columnchart" :
            await loadVisualisation("columnchart_values", "../../mvc/entities/columnchart.js");
            break;
        case "Donutchart" :
            await loadVisualisation("donutchart", "../../mvc/entities/donutchart.js");
            break;
        case "Map" :
            await loadVisualisation("regions_div", "../../mvc/entities/map.js");
            break;
        case "Piechart" :
            await loadVisualisation("chart_div_l", "../../mvc/entities/piechart.js");
            break;
    }
}


async function loadVisualisation(div_name, script_src) {
    let div = document.getElementById(div_name);
    previous_div = div;
    const script = await import(script_src);
}

