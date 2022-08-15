let pencil = document.getElementById("pencil").value;
let square = document.getElementById("square").value;
let circle = document.getElementById("circle").value;
let color = document.getElementById("color");
let size = document.getElementById("size");
let canva = document.getElementById("myCanvas");
let ctx = canva.getContext("2d");
var strDataURI = canva.toDataURL();

let isMouseDown = false;
let startx, starty, endx, endy;
let pencilMouseDown=(event) => {
    isMouseDown = true;
}
let pencilMouseUp = (event) => {
    ctx.beginPath();
    isMouseDown = false;
}
let pencilMouseMove = (event) => {
    if (isMouseDown) {
        ctx.lineCap = "round";
        ctx.lineWidth = size.value;
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        // ctx.beginPath();
        ctx.moveTo(event.offsetX, event.offsetY)
        ctx.strokeStyle = color.value;
    }
}
let circleMouseDown = (event) => {
    startx = event.offsetX;
    starty = event.offsetY;
    isMouseDown = true;
}
let circleMouseUp= (event) => {
    endx = event.offsetX;
    endy = event.offsetY;
    isMouseDown = false;
    let radius = event.offsetY - starty;
    console.log(radius);
    if (radius < 0) {
        radius = starty - event.offsetY;
        ctx.beginPath();
        ctx.strokeStyle = color.value;
        ctx.lineWidth = size.value;
        ctx.arc(startx, starty, radius, 0, 2 * Math.PI);
        ctx.stroke();
    } else {
        ctx.beginPath();
        ctx.strokeStyle = color.value;
        ctx.lineWidth = size.value;
        ctx.arc(startx, starty, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
let squareMouseDown = (event) => {
     startx = event.offsetX;
    starty = event.offsetY;
     isMouseDown = true;
     console.log(event);
 }
    
    
    let squareMouseUp =  (event) => {
    endx = event.offsetX;
    endy = event.offsetY;
    isMouseDown = false;
    let  xaxis = endx - startx;
    let  yaxis = endy - starty;
        if (endx === startx && endy === starty) {
        ctx.strokeStyle = color.value;
        ctx.lineWidth = size.value;
        ctx.strokeRect(0, 0, 0, 0);
        ctx.stroke();
    } else {
        ctx.strokeStyle = color.value;
        ctx.lineWidth = size.value;
        ctx.strokeRect(startx, starty, xaxis, yaxis);
        ctx.stroke();
        // ctx.save();
    }
     console.log("startx ",startx);
    startx = "";
     starty = "";
     endx = "";
     endy = "";
}


function act(toolName) {
    canva.removeEventListener("mousedown",  pencilMouseDown);
    canva.removeEventListener("mousedown",  circleMouseDown);
    canva.removeEventListener("mouseup", pencilMouseUp);
    canva.removeEventListener("mouseup", circleMouseUp);
    canva.removeEventListener("mousemove", pencilMouseMove);

    switch (toolName) {
        case "pencil":
            /// for line

            canva.addEventListener("mousedown",pencilMouseDown );
            canva.addEventListener("mouseup",pencilMouseUp );
            canva.addEventListener("mousemove", pencilMouseMove);
            break;

        case "circle":
            // for circle

            canva.addEventListener("mousedown",circleMouseDown);
            canva.addEventListener("mouseup",circleMouseUp );

            break;
        case "square":
            // for square
            
            canva.addEventListener("mousedown",squareMouseDown);
            canva.addEventListener("mouseup",squareMouseUp );

        default:
            break;
    }
}


function forReset() {
    ctx.clearRect(0, 0, canva.width, canva.height);
    var w = canva.width;
    canva.width = 0;
    canva.width = w;
}
function forSave() {
    let canvas = document.querySelector("#myCanvas");
    let anchor = document.createElement("a");
    anchor.href = canvas.toDataURL("image/jpg");
    anchor.download = "paint.jpg";
    anchor.click();
}
