let field = document.getElementById('field');
const fieldWidth = 13;
const fieldHeight = 13;
const cellSize = 20;
field.style = 'display: flex; flex-direction: column; width: ' + fieldWidth * cellSize +'px;'

function createField(fieldWidth, fieldHeight) {
    for(let i = 0; i < fieldHeight; i++) {
        let container = document.createElement('div');
        container.style = 'width: ' + fieldWidth * cellSize + 'px; display: flex; flex-direction: row;'
        field.insertAdjacentElement('beforeend', container);
        for(let j = 0; j < fieldWidth; j++) {
            let div = document.createElement('div');
            div.style = 'width: ' + cellSize + 'px;' + 'height: ' + cellSize + 'px; border: 1px solid grey';
            container.insertAdjacentElement("beforeend", div);
        }
    }
}




createField(fieldWidth, fieldHeight);

