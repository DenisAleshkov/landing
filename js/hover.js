let hoverItem=document.querySelectorAll('.item');
let showedBlock=document.querySelectorAll('.animate__block');


for(let i=0; i<hoverItem.length;i++){

    hoverItem[i].onmouseover= function(event){
        showedBlock[i].style.display='block';
    }
    hoverItem[i].onmouseout= function(event){
        showedBlock[i].style.display='none';
    }

}
