let Btn=document.querySelector(".button");
Btn.addEventListener("click",hideform);

function hideform(){
	let text=document.querySelector(".forms");
	text.hidden=true;



	let Btn=document.querySelector(".button");
	Btn.removeEventListener("click",hideform);
	Btn.addEventListener("click",showform);
}


function showform(){
	let text=document.querySelector(".forms");
	text.hidden=false;


	Btn.removeEventListener("click",showform);
	Btn.addEventListener("click",hideform);


}

