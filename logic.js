const container = document.querySelector('.container');
let containerWidth = container.offsetWidth,
    containerHeight = container.offsetHeight;

function formatContainer(){
        container.style.cssText = `grid-template-columns:repeat(4, 1fr)`;
    }
   

function createDivs(){

    gridDiv = document.createElement('div');
    gridDiv.classList.add('grid');
    container.appendChild(gridDiv);
    gridDiv.style.width = 1/4 * containerWidth - 2 + 'px' ;
    gridDiv.style.height = 1/4 * containerHeight -2 + 'px';

}



function production(){
    for (i = 1; i <= 16; i++){
        createDivs();
    }
}

formatContainer();
production();


function divDraw(e){
  
        e.target.style.backgroundColor = 'black';
}

const gridDivAll = document.querySelectorAll('.grid');

gridDivAll.forEach(gridDiv => gridDiv.addEventListener(
    'mouseover',divDraw))


