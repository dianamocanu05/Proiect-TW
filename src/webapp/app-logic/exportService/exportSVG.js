function svgDataURL(svg) {
    let svgAsXML = (new XMLSerializer).serializeToString(svg);
    return "data:image/svg+xml," + encodeURIComponent(svgAsXML);
}

function download(svg) {
    var dl = document.createElement("a");
    document.body.appendChild(dl);
    dl.setAttribute("href", svgDataURL(svg));
    dl.setAttribute("download", "chart.svg");
    dl.click();
}


function get_export_svg(classId) {

    const svg = document.getElementById(classId);
    download(svg);
}