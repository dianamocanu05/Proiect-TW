function get_export(format, width, heigth,tag_1,tag_2, filename) {

    const svg = document.getElementsByTagName('svg')[1];
    const img = document.getElementById(tag_1);
    const canvas = document.getElementById(tag_2);
    const xml = new XMLSerializer().serializeToString(svg);
    const svg64 = btoa(xml);
    const b64Start = 'data:image/svg+xml;base64,';
    img.src = b64Start + svg64;
    img.onload = e => {
        canvas.width = width
        canvas.height = heigth
        canvas.getContext('2d').fillRect(0, 0, width, heigth);
        canvas.getContext('2d').drawImage(img, 0, 0, width, heigth);
        const link = document.createElement('a');
        link.download = filename;
        link.href = canvas.toDataURL(format);
        link.click();
        link.delete;
    }
}


