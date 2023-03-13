const container = document.querySelector('.container');
let containerWidth = container.offsetWidth,
    containerHeight = container.offsetHeight;

function createDivs(){

    gridDiv = document.createElement('div');
    gridDiv.classList.add('grid');
    container.appendChild(gridDiv);
    gridDiv.style.width = 1/4 * containerWidth - 2 + 'px' ;
    gridDiv.style.height = 1/4 * containerHeight -2 + 'px';
    
}

function production(){
    for (i = 1; i <=16;i++){
        createDivs();
    }
}
production();