import { update as updateSnake, draw as 
    drawSnake, SNAKE_SPEED} from "./snake.js";
import { update as updateFood, draw as 
        drawFood} from "./food.js";
let lastRenderTime = 0;
const SNAKE_SPEED = 2
const gameBoard = document.getElementById
('game-board');
 function main( currentTime) {
    
   
    console.log(currentTime)
    const secondsSinceLastSRender = 
    (currentTime- lastRenderTime) / 1000;

    if(secondsSinceLastSRender < 1 /
        SNAKE_SPEED) return;
    console.log('Render');
    lastRenderTime = currentTime;

    update();
    draw()

 }
 window.requestAnimationFrame(main)
 function update () {
updateSnake()
updateFood()
 }
 function draw() {
drawSnake(gameBoard)
drawFood(gameBoard)
 }