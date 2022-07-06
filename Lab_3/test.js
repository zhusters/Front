// получаем элемент с классом лист
let list = document.querySelector(".list");
// создаем событие клик и передаем обработчик событий
list.addEventListener("click", (event) => {
	console.log(event.target.className);

	// className.toggle("red")-переключаем класс 
	// event.target.classList.toggle("red");
	event.target.classList.toggle("red");

});


// получение значения введенного в input
let el = document.getElementById("el");
el.oninput = function(){
	console.log(this.value);
}
