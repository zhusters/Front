window.onload = function(){
	// получение номера вкладки (data-tab)
	document.querySelector(".tableheader").addEventListener("click", fTabs);
	function fTabs(event){
		console.log(event);
		//номер вкладки на которую кликаем
		let dataTab = (event.target.getAttribute("data-tab"));
		console.log(dataTab);	
		//текст который нужно показать
		let tabBody = document.getElementsByClassName("tab-b");

			for(let i = 0; i < tabBody.length; i++){
				if(dataTab == i){
					tabBody[i].style.display="block";
				}
				else{
					tabBody[i].style.display="none";
				}

		}
		
	}

}