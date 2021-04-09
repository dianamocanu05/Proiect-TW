let myCanvas = document.getElementById("canvas");
myCanvas.width = 300;
myCanvas.height = 300;

let context = myCanvas.getContext("2d");

function drawLine(context, startX, startY, endX, endY,color){
    context.save();
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(startX,startY);
    context.lineTo(endX,endY);
    context.stroke();
    context.restore();
}

function drawBar(context, upperLeftCornerX, upperLeftCornerY, width, height,color){
    context.save();
    context.fillStyle=color;
    context.fillRect(upperLeftCornerX,upperLeftCornerY,width,height);
    context.restore();
}

let myVinyls = {
    "Classical music": 10,
    "Alternative rock": 14,
    "Pop": 2,
    "Jazz": 12
};

let Barchart = function(options){
    this.options = options;
    this.canvas = options.canvas;
    this.context = this.canvas.getContext("2d");
    this.colors = options.colors;

    this.draw = function(){
        let maxValue = 0;
        for (let categ in this.options.data){
            maxValue = Math.max(maxValue,this.options.data[categ]);
        }
        let canvasActualHeight = this.canvas.height - this.options.padding * 2;
        let canvasActualWidth = this.canvas.width - this.options.padding * 2;

        //drawing the grid lines
        let gridValue = 0;
        while (gridValue <= maxValue){
            let gridY = canvasActualHeight * (1 - gridValue/maxValue) + this.options.padding;
            drawLine(
                this.context,
                0,
                gridY,
                this.canvas.width,
                gridY,
                this.options.gridColor
            );

            //writing grid markers
            this.context.save();
            this.context.fillStyle = this.options.gridColor;
            this.context.textBaseline="bottom";
            this.context.font = "bold 10px Arial";
            this.context.fillText(gridValue, 10,gridY - 2);
            this.context.restore();

            gridValue+=this.options.gridScale;
        }

        //drawing the bars
        let barIndex = 0;
        let numberOfBars = Object.keys(this.options.data).length;
        let barSize = (canvasActualWidth)/numberOfBars;

        for (categ in this.options.data){
            let val = this.options.data[categ];
            let barHeight = Math.round( canvasActualHeight * val/maxValue) ;
            drawBar(
                this.context,
                this.options.padding + barIndex * barSize,
                this.canvas.height - barHeight - this.options.padding,
                barSize,
                barHeight,
                this.colors[barIndex%this.colors.length]
            );

            barIndex++;
        }

        //drawing series name
        this.context.save();
        this.context.textBaseline="bottom";
        this.context.textAlign="center";
        this.context.fillStyle = "#000000";
        this.context.font = "bold 14px Arial";
        this.context.fillText(this.options.seriesName, this.canvas.width/2,this.canvas.height);
        this.context.restore();

        //draw legend
        barIndex = 0;
        let legend = document.querySelector("legend[for='myCanvas']");
        let ul = document.createElement("ul");
        legend.append(ul);
        for (categ in this.options.data){
            let li = document.createElement("li");
            li.style.listStyle = "none";
            li.style.borderLeft = "20px solid "+this.colors[barIndex%this.colors.length];
            li.style.padding = "5px";
            li.textContent = categ;
            ul.append(li);
            barIndex++;
        }
    }
}


let myBarchart = new Barchart(
    {
        canvas:myCanvas,
        seriesName:"Vinyl records",
        padding:20,
        gridScale:5,
        gridColor:"#eeeeee",
        data:myVinyls,
        colors:["#a55ca5","#67b6c7", "#bccd7a","#eb9743"]
    }
);

myBarchart.draw();