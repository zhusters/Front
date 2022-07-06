let canvas = document.getElementById("c1");
let ctx = canvas.getContext("2d");
ctx.fillStyle= "#F57CEE";
ctx.fillRect(70, 50, 150 ,110);
ctx.fillStyle= "#7F1289";
ctx.fillRect(80, 100, 40 ,70);
ctx.fillStyle= "#5EE4B6";
ctx.fillRect(150, 80, 40 ,40);
ctx.beginPath();
ctx.moveTo(150, 15);
ctx.lineTo(70,50);
ctx.lineTo(220, 50);
ctx.lineTo(150, 15);
ctx.lineWidth = "5"
ctx.lineCap = "round";
ctx.fillStyle = "black";
ctx.stroke();
ctx.fill();





canvas = addEventListener("click", func);
function func(event){
	console.log(event);
}



// canvas.onclick = function(event){
// ctx.beginPath();
// ctx.moveTo(150, 15);
// ctx.lineTo(70,50);
// ctx.lineTo(220, 50);
// ctx.lineTo(150, 15);
// ctx.lineWidth = "5"
// ctx.lineCap = "round";
// ctx.fillStyle = "black";
// ctx.stroke();
// ctx.fill();

// };
// ctx.fillRect(Ox, Oy, width, height)
