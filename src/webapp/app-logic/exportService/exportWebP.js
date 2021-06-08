// canvas.toBlob(callback, mimeType, qualityArgument);
//callback : returns Blob
//mimeType : "image/webp"
//qualityArgument : a number between 0 and 1 indicating image quality
import OS from 'os';

function exportWebP(){
    console.log("HELLO");
    let canvas = document.getElementById('canvas');

    canvas.toBlob(function (blob){
        // let img = document.createElement('img'),
        //     url = new URL.createObjectURL(blob);
        // img.onload = function (){
        //     URL.revokeObjectURL(url);
        // };
        // img.src = url;
        // document.body.appendChild(img);
        let r = new FileReader();
        r.onloadend = function () {
            // r.result contains the ArrayBuffer.
            Cu.import('resource://gre/modules/osfile.jsm');
            let writePath = OS.Path.join(OS.Constants.Path.desktopDir,
                iconName + '.webp');
            let promise = OS.File.writeAtomic(writePath, new Uint8Array(r.result),
                {tmpPath:writePath + '.tmp'});
            promise.then(
                function() {
                    alert('successfully wrote file');
                },
                function() {
                    alert('failure writing file')
                }
            );
        };
        r.readAsArrayBuffer(b);
    },"image/webp", 0.95);
}

exportWebP();