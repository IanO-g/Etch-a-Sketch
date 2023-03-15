const container = document.querySelector('.container');
let containerWidth = container.offsetWidth,
    containerHeight = container.offsetHeight,
    userBtn = document.querySelector('#canvasBtn');

    function validInput(){
        let canvasNumber = (window.prompt('Choose the size of your canvas',''));
    if (isNaN(canvasNumber)){
        alert('please enter a number')
        validInput()
    } else if (canvasNumber < 0 || canvasNumber>100){
        alert('please choose a number between 1 and 100')
        validInput()
    } else {
        console.log(canvasNumber);
        return Number(canvasNumber);
    }
    }
    const userInput = validInput();

function formatContainer(){

        container.style.cssText = `grid-template-columns:repeat(${userInput}, 1fr)`;

    }

function createDivs(){

    gridDiv = document.createElement('div');
    gridDiv.classList.add('grid');
    container.appendChild(gridDiv);
    gridDiv.style.width = 1/userInput * containerWidth - 2 + 'px';
    gridDiv.style.height = 1/userInput * containerHeight -2 + 'px';
}

function production(){
    for (i = 1; i <= userInput * userInput; i++){
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


