// document.addEventListener("click", (event) => {
//     console.log("click: ", event);
// });
let pencil = document.getElementById("pencil");
let paintbrush = document.getElementById("paintbrush");
let color = document.getElementById("color");
let size = document.getElementById("size");
let canva = document.getElementById("myCanvas")
let ctx = canva.getContext("2d");
var strDataURI = canva.toDataURL();
// ctx.fillRect(0, 0, 100, 100);

let isMouseDown = false;
// let startx = "",
//   starty = "",
//   endx = "",
//   endy = "";

document.querySelector("#myCanvas").addEventListener("mousedown", (event) => {
    isMouseDown = true;
    //   startx = event.offsetX;
    //   starty = event.offsetY;
});
document.querySelector("#myCanvas").addEventListener("mouseup", (event) => {
    isMouseDown = false;
    //   endx = event.offsetX;
    //   endy = event.offsetY;
});
document.querySelector("#myCanvas").addEventListener("mousemove", (event) => {
    if (isMouseDown) {
        // console.log(startx, starty, endx, endy);
        // console.log("move: ", event);
        // console.log("h: ", event.offsetX);
        // console.log("w: ", event.offsetY);
        // ctx.moveTo(startx, starty);
        // ctx.lineTo(endx, endy);
        // ctx.stroke();
        
        ctx.fillStyle = color.value;
        ctx.fillRect(
            event.offsetX,
            event.offsetY,
            size.value, size.value
            );
        }
    });

function forReset() {
    // ctx.clearRect(0, 0, ctx.width, ctx.height);
    ctx.clearRect(0, 0, canva.width, canva.height);
    var w = canva.width;
    canva.width = 0;
    canva.width = w;
    
}
function forSave() {
    console.log(canva.toDataURL());
    document.getElementById('savedImage').href =`${canva.toDataURL()}`;
}
// // var canvas = document.getElementById("myCanvas");
// // var ctx = canvas.getContext("2d");
// // ctx.moveTo(0, 0);
// // ctx.lineTo(200, 100);
// // ctx.stroke();

// // var canvas = document.getElementById("myCanvas");
// // var ctx = canvas.getContext("2d");
// // ctx.beginPath();
// // ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// // ctx.stroke();
