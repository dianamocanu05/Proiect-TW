let user_input = {};
let states = ["CA", "LA"];
let filters = ["Weather_Condition", "Severity"];
let previous_div = "";
function getUserInput(div_name) {
    //from ana
    //states = []
    //filters = []
    //suggestVisualisations();
    //showResult();
}

function submitStates() {
    user_input.States = states;
}

function submitFilters() {
    user_input.Filters = filters;
}

function submitVisualisation() {
    user_input.Visualisation = "Map";
}

function visualisationAdapter() {
    let states = user_input.States;

    let response = ["Table"]; //works for any type of input

    if (states.length >= 2) {
        response.push("Piechart"); //for 2 (or more) states min
    }
    if (states.length === 1) {
        response.push("Donutchart");
        response.push("Barchart");
        response.push("Columnchart");
    }
    user_input.Visualisation = response;
}

async function showResult() {
    if(previous_div !== "") {
        const div = document.getElementById(previous_div);
        div.style.display = "none";
    }
    switch (user_input.Visualisation) {
        case "Table":
            await loadVisualisation("table-div","../../mvc/entities/table.js"); break;
        case "Barchart" :
            await loadVisualisation("barchart-div", "../../mvc/entities/barchart.js"); break;
        case "Columnchart" :
            await loadVisualisation("columnchart_values", "../../mvc/entities/columnchart.js"); break;
        case "Donutchart" :
            await loadVisualisation("donutchart", "../../mvc/entities/donutchart.js"); break;
        case "Map" :
            await loadVisualisation("regions_div", "../../mvc/entities/map.js"); break;
        case "Piechart" :
            await loadVisualisation("chart_div_l","../../mvc/entities/piechart.js"); break;
    }
}


async function loadVisualisation(div_name, script_src) {
    let div = document.getElementById(div_name);
    previous_div = div;
    const script = await import(script_src);
}