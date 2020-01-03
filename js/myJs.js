let dropdownButton = document.querySelectorAll('.dropdown__title_button');
let dropdownBlock = document.querySelectorAll('.dropdown__item_content');
let modalForm = document.getElementById('modal');
let modalButton = document.getElementById('modal__button');
let exitButton = document.getElementById('exit');
let blockButton=document.getElementById('header__button');
let login=document.getElementById('login');
let name=document.getElementById('name');


for (let i = 0; i < dropdownButton.length; i++) {

    dropdownButton[i].addEventListener('click', function () {
        if (dropdownButton[i].dataset.number === dropdownBlock[i].dataset.number) {
            dropdownBlock[i].classList.toggle('is_open');
            dropdownButton[i].classList.toggle('transform_button');
        }
    });
};
modalButton.onclick=function(){
    modalForm.style.display='flex';
}
exitButton.onclick=function(){
    modalForm.style.display='none';
}
window.onclick=function(e) {
	if(e.target==modalForm){
		modalForm.style.display='none';
	}
}
login.onclick=function(){
	blockButton.innerHTML='Hello,'+name.value;
}

