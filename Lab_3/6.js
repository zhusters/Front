let el=document.getElementById("bel");
let elone=document.getElementById("listone");
el.onclick=function(){
	elone.hidden=false;

}

el.ondblclick=function(){
	elone.hidden=true;
}



let el2=document.getElementById("rus");
let eltwo=document.getElementById("listtwo");
el2.onclick=function(){
	eltwo.hidden=false;

}

el2.ondblclick=function(){
	eltwo.hidden=true;
}


let el3=document.getElementById("chi");
let elthree=document.getElementById("listthree");
el3.onclick=function(){
	elthree.hidden=false;

}

el3.ondblclick=function(){
	elthree.hidden=true;
}


//РАБ ВАРИАНТ,1

// let numberlist=document.querySelectorAll("hide");
// let el=document.getElementById("listone");
// el.onmouseenter=function (){
// 	//this.hidden=false;
// 	this.hidden=true;
// }

// el.onmouseleave=function(){
// 	this.hidden=false;
// }





// let bel=document.getElementById("BY");
// let list=document.getElementsByClassName("box");
// onclick=function func(box){
// 	display=document.getElementById("box");
// 	if(display=="hiden");
// 		document.getElementById("box")=style.display="block";

// }

// let el = document.getElementByClassName("BY");
// let i=0;
// 	for(i<el.length, i++){
// 		el[i].addEventListener("mouseenter", show(),false);
// 		el[i].addEventListener("mouseleave", hide(),false);

// 		function show(){
// 			if(this.children.length>1){
// 				this.children[1].style.overflow="visible";

// 			}
// 			else {
// 				return false;
// 			}
// 		}

// 	}