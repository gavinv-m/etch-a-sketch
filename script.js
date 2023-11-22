createRows();

function createRows() {

    let numberOfRows = document.getElementById('grid-size').value;
    numberOfRows = Number(numberOfRows);

    const sketchPad = document.getElementById('sketch-pad');

    for (let i = 0; i < numberOfRows; i++) {

        const rowContainer = document.createElement('div');
        rowContainer.style.cssText = 'border-bottom: 1px solid black';    
        rowContainer.classList.add('rows');
        sketchPad.appendChild(rowContainer);
    }
    
}