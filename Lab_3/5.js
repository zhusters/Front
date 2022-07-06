let redcolor=document.getElementById("get");
redcolor.onmousemove=function(){
	if(redcolor.value>3){
		alert("Вы ввели неверное число");
	}
}

// onmouseover=function paint(){
 	//let redcolor=document.getElementById("get");
 	//redcolor.onmouseover=function() {
 	//	this.style.color='red';
 	//redcolor.onmouseleave=function(){
	//	this.style.color="black"
	//}
 	//}
 //}

let  html=document.getElementById("html");
let  css=document.getElementById("css");
let  js=document.getElementById("js");
onmouseover=function painttext(){

	if(redcolor.value==1){
		html.style.color="red";
	

	}
	if(redcolor.value==2){
		css.style.color="red";

		
	}
	if(redcolor.value==3){
		js.style.color="red";
		
	}

	
}
onmouseout=function paint(){

	if(redcolor.value==1){
		html.style.color="black";
	
	}
	if(redcolor.value==2){
		css.style.color="black";

		
	}
	if(redcolor.value==3){
		js.style.color="black";
		
	}

	
}




