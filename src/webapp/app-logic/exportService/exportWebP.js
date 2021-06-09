function get_export_webp(format,tag1,tag2,index,filename) {
    console.log('webp export function was called')
    let width = 700
    let height = 500
    const svg = document.getElementsByTagName('svg')[index]; index
    const img = document.getElementById(tag1);
    const canvas = document.getElementById(tag2);
    const xml = new XMLSerializer().serializeToString(svg);
    const svg64 = btoa(xml);
    const b64Start = 'data:image/svg+xml;base64,';
    img.src = b64Start + svg64;
    img.onload = e => {
        canvas.width = width
        canvas.height = height
        canvas.getContext('2d').fillRect(0, 0, width, height);
        canvas.getContext('2d').drawImage(img, 0, 0, width, height);
        const link = document.createElement('a');
        link.download = filename;
        link.href = canvas.toDataURL(format);
        link.click();
        link.delete;
    }
}