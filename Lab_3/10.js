let click = 0;
let canvas = document.getElementById("c1");
let ctx = canvas.getContext("2d");	
let pi = Math.PI;
// два разных способа одним способом не получается получить полную ширину экрана
canvas.width = document.body.clientWidth;
canvas.height = window.innerWidth;
// получаю clientX,Y (originalEvent)
$(document).ready(function(event){
	$("#c1").click(function(event){
		console.log(event.clientX, event.clientY);
		click++;
		console.log(event);
ctx.beginPath();
//тени
ctx.shadowColor = "#80BB00"
ctx.shadowOffsetX = 0 ;
ctx.shadowOffsetY = 0 ;
ctx.shadowBlur = 10 ;
// круг
ctx.arc(event.clientX, event.clientY, 30, 0, pi*2, false);
// цвет
ctx.fillStyle = "#036702";
ctx.fill();
// цвет номера клика
ctx.fillStyle = "black";
ctx.font = "italic 35px Arial";
// номер и координаты клика 
ctx.fillText(click , event.clientX, event.clientY);
});
});




// let a = document.onmousemove = function mouseMove(event){
// let Ox = event.offsetX; //document.getElementById('mouseX').value// = event.clientX;
// let Oy = event.offsetY; //document.getElementById('mouseY').value = event.offsetY;
// console.log(Ox);
// console.log(Oy);
// };
