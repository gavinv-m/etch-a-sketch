const gridSize = document.getElementById('grid-size');
gridSize.addEventListener('input', createRows);

function createRows() {

    let numberOfRows = Number(gridSize.value);

    const sketchPad = document.getElementById('sketch-pad');

    // Clear previous content
    sketchPad.innerHTML = '';

    for (let i = 0; i < numberOfRows; i++) {

        const rowContainer = document.createElement('div');
        rowContainer.style.cssText = 'border-bottom: 1px solid black';    
        rowContainer.classList.add('rows');
        sketchPad.appendChild(rowContainer);
    }
    
}