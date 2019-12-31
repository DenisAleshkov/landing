let dropdownButton = document.querySelectorAll('.dropdown__title_button');
let dropdownBlock = document.querySelectorAll('.dropdown__item_content');


for (let i = 0; i < dropdownButton.length; i++) {
    
    dropdownButton[i].addEventListener('click',function(){
        if (dropdownButton[i].dataset.number === dropdownBlock[i].dataset.number) {
            dropdownBlock[i].classList.toggle('is_open');
            dropdownButton[i].classList.toggle('transform_button');
        }
    });
}
