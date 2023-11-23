createRows(16);

const gridSize = document.getElementById('grid-size');
gridSize.addEventListener('input', function() {
    
    let numberOfRows = Number(gridSize.value);
    createRows(numberOfRows);

    if (gridSize.value.length == 0) {
        createRows(16);
    }
}); 

function createRows(number) {

    const sketchPad = document.getElementById('sketch-pad');

    // Clear previous content
    sketchPad.innerHTML = '';

    for (let i = 0; i < number; i++) {

        const rowContainer = document.createElement('div');
        rowContainer.style.cssText = 'border-bottom: 1px solid black';    
        rowContainer.classList.add('rows');
        sketchPad.appendChild(rowContainer);

        for (let j = 0; j < number; j++) {

            const block = document.createElement('div');
            block.style.cssText = 'border-right: 1px solid black';
            block.classList.add('block');
            rowContainer.appendChild(block);
        }
    }

    const blocks = document.querySelectorAll('.block');
    blocks.forEach(function(block) {

        block.addEventListener('mouseover', function() {

            block.style.backgroundColor = !rainbowOn ? color :
            randomRgbColor();
        });
    }); 
}

let color = 'black';
let rainbowOn = false;

function randomRgbColor() {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };


const defaultColor = document.getElementById('default');
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');

defaultColor.addEventListener('click', function() {

    rainbowOn = false; 
    color = 'black';
});

rainbow.addEventListener('click', function() {

    rainbowOn = true;
});

eraser.addEventListener('click', function() {

    rainbowOn = false;
    color = 'white';
});