/**
 * Script retrieves user input (states, criteria and visualisation mode) and
 * deploys desired action
 * */

const tagContainer = document.querySelector('.tag-container');
const input = document.querySelector('.tag-container input');
const select = document.getElementById("selectVisualisation");

let visualisation;
let previous_div = "";
let possible_visualisations = [];
let selectedVisualisation;

objects.push("ALL");

select.addEventListener("mouseover", function () {
    select.options.length = 1;
    states = tags;
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


let checkbox_filters = ['Sunrise_Sunset', 'Civil_Twilight',
    'Nautical_Twilight', 'Astronomical_Twilight',
    'Side', 'Bump', 'Crossing', 'Give_Way', 'Junction',
    'No_Exit', 'Railway', 'Roundabout', 'Station', 'Stop',
    'Traffic_Calming', 'Traffic_Signal', 'Amenity', 'Turning_Loop'
];
let boolean_filters = ['Sunrise_Sunset', 'Civil_Twilight',
    'Nautical_Twilight', 'Astronomical_Twilight'];

let count = 0;
let input_fields = [];
let selected_fields = [];
for (let fi of input_fields) {
    selected_fields.push(fi.slice(0, -1));
}

function addFilter(filter) {
    if (!selected_fields.includes(filter)) {
        let form = document.getElementById("adv-filters");
        form.style.cssText = 'font-size: 20px;';
        let input, check1, check2, label1, label2;

        if (checkbox_filters.includes(filter)) {
            if (boolean_filters.includes(filter)) { //Day/Night

                label1 = document.createElement("label");
                label1.style.cssText = 'padding: 5px ;border: 0;outline: none;color: white;width: 20%;margin: 30px auto;flex: 1;display: flex;align-items: center;';
                check1 = document.createElement("input");
                check1.style.cssText = 'padding: 5px ;border: 0;outline: none;color: white;width: 20%;margin: 30px auto;flex: 1;display: flex;align-items: center';
                check1.type = "checkbox";
                check1.name = filter + count;
                check1.value = "Day";
                label1.innerText = filter + "  Day : ";
                //form.style.cssText = 'padding: 5px  ;border: 0;outline: none;color: white;width: 20%;margin: 30px auto;flex: 1;display: flex;align-items: center;';
                form.appendChild(label1);
                form.appendChild(check1);

                label2 = document.createElement("label");
                label2.style.cssText = 'padding: 5px  ;border: 0;outline: none;color: white;width: 20%;margin: 30px auto;flex: 1;display: flex;align-items: center;';
                check2 = document.createElement("input");
                check2.style.cssText = 'padding: 5px  ;border: 0;outline: none;color: white;width: 20%;margin: 30px auto;flex: 1;display: flex;align-items: center';
                check2.type = "checkbox";
                check2.name = filter + count;
                check2.value = "Night";
                label2.innerText = "Night : ";
                //form.style.cssText = 'padding: 5px  ;border: 0;outline: none;color: white;width: 20%;margin: 30px auto;flex: 1;display: flex;align-items: center;';

                form.appendChild(label2);
                form.appendChild(check2);

            } else {
                if (filter === 'Side') { //L/R
                    label1 = document.createElement("label");
                    label1.style.cssText = 'padding: 5px  ;border: 0;outline: none;color: white;width: 20%;margin: 30px auto;flex: 1;display: flex;align-items: center;';
                    check1 = document.createElement("input");
                    check1.style.cssText = 'padding: 5px  ;border: 0;outline: none;color: white;width: 20%;margin: 30px auto;flex: 1;display: flex;align-items: center';
                    check1.type = "checkbox";
                    check1.value = "L";
                    check1.name = filter + count;
                    label1.innerText = filter + " Left : ";
                    form.append(label1);
                    form.appendChild(check1);

                    label2 = document.createElement("label");
                    label2.style.cssText = 'padding: 5px  ;border: 0;outline: none;color: white;width: 20%;margin: 30px auto;flex: 1;display: flex;align-items: center;';
                    check2 = document.createElement("input");
                    check2.style.cssText = 'padding: 5px  ;border: 0;outline: none;color: white;width: 20%;margin: 30px auto;flex: 1;display: flex;align-items: center';

                    check2.type = "checkbox";
                    check2.value = "R";
                    check2.name = filter + count;
                    label2.innerText = "Right : ";
                    form.append(label2);
                    form.appendChild(check2);

                } else { //T/F
                    label1 = document.createElement("label");
                    label1.style.cssText = 'padding: 5px  ;border: 0;outline: none;color: white;width: 20%;margin: 30px auto;flex: 1;display: flex;align-items: center;';
                    check1 = document.createElement("input");
                    check1.style.cssText = 'padding: 5px  ;border: 0;outline: none;color: white;width: 20%;margin: 30px auto;flex: 1;display: flex;align-items: center';
                    check1.name = filter + count;
                    check1.value = "True";
                    check1.type = "checkbox";
                    label1.innerText = filter + " True : ";
                    form.appendChild(label1);
                    form.appendChild(check1);

                    label2 = document.createElement("label");
                    label2.style.cssText = 'padding: 5px  ;border: 0;outline: none;color: white;width: 20%;margin: 30px auto;flex: 1;display: flex;align-items: center;';
                    check2 = document.createElement("input");
                    check2.style.cssText = 'padding: 5px  ;border: 0;outline: none;color: white;width: 20%;margin: 30px auto;flex: 1;display: flex;align-items: center';
                    check2.type = "checkbox";
                    check2.value = "False";
                    check2.name = filter + count;
                    label2.innerText = "False : ";
                    form.append(label2);
                    form.appendChild(check2);

                }
            }
            input_fields.push(check1.name);
            input_fields.push(check2.name);
        } else {
            label1 = document.createElement("label");
            label1.style.cssText = 'padding: 5px ;border: 0;outline: none;color: white;width: 20%;margin: 30px auto;flex: 1;display: flex;align-items: center;';
            input = document.createElement("input");
            input.style.cssText = ' padding: 5px; border: 0; outline: none; color: #333;flex: 1; width: 20%;margin: 30px auto; text-align:center; display: flex;align-items: center;';
        // input.className = "input";
        input.type = "text";
        input.name = filter + count;
        label1.innerText = filter + " : ";
        form.append(label1);
        form.appendChild(input);
        input_fields.push(input.name);
    }


    form.appendChild(document.createElement("br"));
}
}


function generateStatistics() {
    for (let input of input_fields) {
        let criteria = input.slice(0, -1);
        let value = document.getElementsByName(input)[0].value;
        filters[criteria] = value;
    }
}

/**
 * Method decides what charts are available based on user input
 */
function visualisationAdapter() {
    possible_visualisations = ["Table"]; //works for any type of input

    if (states.length >= 2) {
        possible_visualisations.push("Piechart"); //for 2 (or more) states min
    }
    if (states.length === 1) {
        possible_visualisations.push("Donutchart");
        possible_visualisations.push("Barchart");
        possible_visualisations.push("Columnchart");
    }
    if (states.includes("ALL")) {
        possible_visualisations = ["Map"];
    }
    console.log(possible_visualisations);
}

/**
 * Method deploys corresponding action
 * @returns {Promise<void>}
 */
async function showResult() {
    let divs = ["table-div", "barchart-div", "columnchart_values", "donutchart", "regions_div", "chart_div_l"];
    for (let div of divs) {
        document.getElementById(div).style.display = "none";
        displayHideButtons(div,"hide");
    }
    switch (visualisation) {
        case "Table":
            await loadVisualisation("table-div", "../../app-logic/entities/table.js", runTable);
            break;
        case "Barchart" :
            await loadVisualisation("barchart-div", "../../app-logic/entities/barchart.js", fetch_and_draw_barchart);
            break;
        case "Columnchart" :
            await loadVisualisation("columnchart_values", "../../app-logic/entities/columnchart.js", runColumnchart);
            break;
        case "Donutchart" :
            await loadVisualisation("donutchart", "../../app-logic/entities/donutchart.js", fetch_and_draw_donut);
            break;
        case "Map" :
            await loadVisualisation("regions_div", "../../app-logic/entities/map.js", runMap);
            break;
        case "Piechart" :
            await loadVisualisation("chart_div_l", "../../app-logic/entities/piechart.js", runPiechart);
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
async function loadVisualisation(div_name, script_src, fct) {

    let div = document.getElementById(div_name);
    div.style.display = "block";
    displayHideButtons(div_name,"display");
    previous_div = div;
    await fct();
    //const script = await import(script_src);
    //console.log(script);
}

function displayHideButtons(div_name, action) {
    let style;
    if (action === "hide") style = "none";
    if (action === "display") style = "block";
    /* make appear/hide export buttons*/
    if (div_name === "table-div") {
        document.getElementById("csv-table-button").style.display = style;
    } else {
        let export_types = ["webp", "png", "svg"];
        for (let x of export_types) {
            let button_name = x + "-" + getDivName(div_name) + "-button";
            console.log(button_name);
            document.getElementById(button_name).style.display = style;
        }
    }
}

function getDivName(div_name) {
    console.log(div_name);
    switch (div_name) {
        case "regions_div" :
            return "map";
        case "chart_div_l" :
            return "pie";
        case "donutchart" :
            return "donut";
        case "columnchart_values" :
            return "column";
        case "barchart-div" :
            return "barchart";
        case  "table-div":
            return "table";
    }
}


function onClick(){

}




