// получаем кнопку
let acc = document.getElementsByClassName("accordion");
// получаем текст
let pan = document.getElementsByClassName("panel");
console.log(pan);

for(let i = 0; i < acc.length; i++){
	// при клике выполняем
	acc[i].onclick = function(){
		// меняем класс кнопки
		this.classList.toggle("active");
		// меняем класс текста 
		this.nextElementSibling.classList.toggle("show");
	}
}