let sliderItem = document.querySelectorAll('.slider__item');
let buttonUp = document.getElementById('button-up');
let buttonDown = document.getElementById('button-down');

let current = 0;

function slider(){
	for(let i=0; i < sliderItem.length; i++){
 		sliderItem[i].classList.add('opacity0');
	}
    sliderItem[current].classList.remove('opacity0');
}

slider();

buttonUp.onclick=function(){
	current===sliderItem.length-1 ? current=0 : current++
	slider();
}

buttonDown.onclick=function(){
	current--;
	if(current===-1){
		current=sliderItem.length-1;
	}
	
	slider();
}
