import { onSnake,expandSnake } from "./snake";
let food = getRandomFoodPosition()
const EXPANSION_RATE = 5;

export function update (){
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
    }
}
export function draw (gameBoard) {
    const foodElement = document.createElement('div');
    snakeElement.style.gridRowStart = food. y;
    snakeElement.style.gridColumnStart = food. x;
    snakeElement.classList.add('food');
    gameBoard.appendChild(foodElement);

}
function getRandomFoodPosition () {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridposition ()
}
return newFoodPosition

}
export  function expandSnake (amount) {
    newSegments += amoun
}