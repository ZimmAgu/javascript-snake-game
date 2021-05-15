// Written by: Zim Agu

import {expand_Snake, food_Touching_Snake, speed_Snake_Up} from "./snake.js";
import {random_Grid_Position} from "./grid_Math.js"

let food_Location = generate_Food (); // The food coordinates aren't an array because food will always take up just one div
const SNAKE_GROWTH_RATE = 1;
const SNAKE_SPEEDUP_RATE = 0.5;

// If the food is touching any part of the snake, the food location changes and the snake expands
export function update_Food () {
    if (food_Touching_Snake(food_Location)) {
        expand_Snake(SNAKE_GROWTH_RATE);
        speed_Snake_Up(SNAKE_SPEEDUP_RATE);
        food_Location = generate_Food ();
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



function generate_Food () {
    let generated_Food_Location;

    while (generated_Food_Location == null || food_Touching_Snake(generated_Food_Location)) {  // When there is no food on the board or the snake is touching the food, the food is generated at a new location
        generated_Food_Location = random_Grid_Position();
    }

    return generated_Food_Location;
}


