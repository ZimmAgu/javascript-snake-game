// Written by: Zim Agu

import {expand_Snake, food_Touching_Snake} from "./snake.js";
import {random_Grid_Position} from "./grid_Math.js"

let food_Location = {x:3, y:5}; // The food coordinates aren't an array because food will always take up just one div
const SNAKE_GROWTH_RATE = 1;

// If the food is touching any part of the snake, the food location changes and the snake expands
export function update_Food () {
    if ( food_Touching_Snake(food_Location) ) {
        expand_Snake(SNAKE_GROWTH_RATE);
        food_Location = random_Grid_Position();
    }
}

export function draw_Food (board) {
    let food_Element = document.createElement("div"); // Creates a new div for the food

    // Sets the x and y coordinates of the food element
    food_Element.style.gridRowStart = food_Location.y;
    food_Element.style.gridColumnStart = food_Location.x;

    /*  
            Adds a new class to the document
            The new class is named "food" because CSS was implemented to specifically for a div named "food" 
    */
    food_Element.classList.add("food"); 

    board.appendChild(food_Element); // Adds the snake body to the board
}



