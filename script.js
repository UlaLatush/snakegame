let field = document.getElementById('field');
const fieldWidth = 13;
let fieldData = []; // числовое отображение игрового поля: 1 - пусто 2 - яблоко 3 змея 4 голова змеи
let divs = [];
const EMPTY_CELL = '1';
const APPLE_CELL = '2';
const SNAKE_CELL = '3';
const SNAKE_HEAD_CELL = '4';
const fieldHeight = 13;
const cellSize = 20;
let direction = 'left';
let score = 0;
let fieldScore = document.getElementById('scoreField');
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
            fieldData.push(EMPTY_CELL);
            divs.push(div);

        }
    }
}

createField(fieldWidth, fieldHeight);



function createSnake() {
    let middle = Math.floor(fieldData.length / 2);
    fieldData[middle] = SNAKE_HEAD_CELL;
    fieldData[middle + 1] = SNAKE_CELL;

}

function createApple() {
    let created = false;
    while(!created) {
        let index = Math.floor(Math.random() * fieldData.length);
        if(fieldData[index] !== SNAKE_CELL && fieldData[index] !== SNAKE_HEAD_CELL) {
            fieldData[index] = APPLE_CELL;
            created = true;
        } else {
            console.log("Trying to create apple on snake");
        }
    }
}

function drawDiv(i) {
    divs[i].style = 'width: ' + cellSize + 'px;' + 'height: ' + cellSize + 'px; border: 1px solid grey';
}

function drawApple(i) {
    divs[i].style = 'width: ' + cellSize + 'px;' + 'height: ' + cellSize + 'px; border: 1px solid grey; background-color: red';
}

function drawSnake(i) {
    divs[i].style = 'width: ' + cellSize + 'px;' + 'height: ' + cellSize + 'px; border: 1px solid grey; background-color: green';
}

function drawSnakeHead(i) {
    divs[i].style = 'width: ' + cellSize + 'px;' + 'height: ' + cellSize + 'px; border: 1px solid grey; background-color: black';
}

function moveSnake(direction) {
    if (direction === 'left') {
        for (let i = 0; i < fieldData.length; i++) {
            if (fieldData[i] === SNAKE_HEAD_CELL) {
                if (fieldData[i - 1] === APPLE_CELL) {
                    eatApple();
                }
                fieldData[i - 1] = SNAKE_HEAD_CELL;
                fieldData[i] = EMPTY_CELL;
            } else if (fieldData[i] === SNAKE_CELL) {
                fieldData[i - 1] = SNAKE_CELL;
                fieldData[i] = EMPTY_CELL;
            }

        }

    }
    drawField(fieldData);
}

function eatApple() {
    score += 1;
    fieldScore.innerText = score.toString();
}

function drawField(array) {
    for(let i = 0; i < array.length; i++) {
        if( array [i] === EMPTY_CELL) {
            drawDiv(i);
        } else if( array[i] === APPLE_CELL) {
            drawApple(i);
        } else if ( array[i] === SNAKE_CELL) {
            drawSnake(i);
        } else if ( array[i] === SNAKE_HEAD_CELL) {
            drawSnakeHead(i);
        }
    }
}

createSnake();
setInterval(function(){moveSnake(direction)}, 100);

createApple();
drawField(fieldData);




// function clearDiv(i) {
//     div.style = 'width: ' + cellSize + 'px;' + 'height: ' + cellSize + 'px; border: 1px solid grey, background-color: none';
// }

