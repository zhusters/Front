let el = document.getElementById("el");
el.oninput = function(){
	console.log(el.value);
	window.funcId = window.setInterval(go, 500);

}

function go(){
	if(parseInt(el.value)>0){
		el.value = parseInt(el.value) -1;
	}
}

