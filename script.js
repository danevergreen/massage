const headerList = document.querySelector(".nav-list");
const headerBurger = document.querySelector(".header-burger");
const body = document.querySelector("body");

headerBurger.onclick = function(){
 	headerList.classList.toggle("active");
  	headerBurger.classList.toggle("active");
 	 body.classList.toggle("lock");
}


/* jQuery slider */
$(document).ready(function(){
	$('.slider').slick({
		slidesToShow:3,
		centerMode:true,
		variableWidth:true,
	});
});
