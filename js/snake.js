import { expandSnake } from "./food.js";
import { getInputDirection} from "./input.js";

export const SNAKE_SPEED = 2;
const snakeBody = [
    { x: 10, y: 11},
    { x: 11, y: 11},
    { x: 12, y: 11},
    { x: 13, y: 11},
    { x: 14, y: 11},
    { x: 15, y: 11}
]
export function update () {
    const inputDirection = getInputDirection();
    for(let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i +1] = { ...snakeBody[i]} ;
    
    }
//    snakeBody[0].x += 1;
//    snakeBody[0].y += 0;

}
export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}
export function expandSnake(amount) {
newSegments +=amount
}
export function onSnake(position) {
    return snakeBody.some(segment => {
      return equalPositions (segment, position)  
    })
}
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y 
}
function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody(snakeBody.length)
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }

newSegments = 0 
}