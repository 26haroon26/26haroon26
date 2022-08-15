let pencil = document.getElementById("pencil").value;
let square = document.getElementById("square").value;
let circle = document.getElementById("circle").value;
let color = document.getElementById("color");
let size = document.getElementById("size");
let canva = document.getElementById("myCanvas");
let ctx = canva.getContext("2d");
var strDataURI = canva.toDataURL();

let isMouseDown = false;
let pencilStartx, pencilStarty, pencilEndx, pencilEndy, 
    circleStartx, circleStarty, circleEndx, circleEndy,
    squarelStartx, squarelStarty, squareEndx, squareEndy;

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
    circleStartx = event.offsetX;
    circleStarty = event.offsetY;
    isMouseDown = true;
}
let circleMouseUp= (event) => {
     circleEndx = event.offsetX;
     circleEndy = event.offsetY;
    isMouseDown = false;
    let radius = event.offsetY - circleStarty;
    console.log(radius);
    if (radius < 0) {
        radius = circleStarty - event.offsetY;
        ctx.beginPath();
        ctx.strokeStyle = color.value;
        ctx.lineWidth = size.value;
        ctx.arc(circleStartx, circleStarty, radius, 0, 2 * Math.PI);
        ctx.stroke();
    } else {
        ctx.beginPath();
        ctx.strokeStyle = color.value;
        ctx.lineWidth = size.value;
        ctx.arc(circleStartx, circleStarty, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
let squareMouseDown = (event) => {
    squarelStartx = event.offsetX;
    squarelStarty = event.offsetY;
     isMouseDown = true;
     console.log(event);
 }
    
    
    let squareMouseUp =  (event) => {
   squareEndx = event.offsetX;
   squareEndy = event.offsetY;
    isMouseDown = false;
    let  xaxis = squareEndx - startx;
    let  yaxis = squareEndx - starty;
        if (squareEndx === squarelStartx && squareEndy === squarelStarty) {
        ctx.strokeStyle = color.value;
        ctx.lineWidth = size.value;
        ctx.strokeRect(0, 0, 0, 0);
        ctx.stroke();
    } else {
        ctx.strokeStyle = color.value;
        ctx.lineWidth = size.value;
        ctx.strokeRect(squareEndx, squareEndy, xaxis, yaxis);
        ctx.stroke();
        // ctx.save();
    }
     console.log("startx ",startx);
    squarelStartx = "";
     squarelStarty = "";
     squarelStartx = "";
     squarelStarty = "";
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
