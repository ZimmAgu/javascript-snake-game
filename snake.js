// Written by: Zim Agu

export let snake_Moves_Per_Second = 5;
export let snake_Speed = 1 / snake_Moves_Per_Second; // If the snake moves 2 times per second, 1/2 means there is 0.5 seconds between each move
import {user_Moves_The_Snake} from "./user_controls.js";

let snake_Body = [ {x:11, y:11} ]; // Each element of this array is a segment of the snake containing it's own x and y values on the grid
let new_Snake_Segments = 0; 



// Updates the position of the snake
export function update_Snake () {
    add_New_Snake_Segment ();

    let snake_Direction = user_Moves_The_Snake(); // The user_Moves_The_Snake function will return either -1 or +1 in the x or y direction based on which keyboard key the user presses

    // This for loop Starts at the second to last segment of the snake and iterates down until it gets to the first segment of the snake
    for (let snake_Length = snake_Body.length - 2; snake_Length >= 0; snake_Length--) {
        snake_Body[snake_Length + 1] = {...snake_Body[snake_Length]}; // When the snake moves, the value of the current x and y coordinates of the current segment object are moved into the next segment
    }

    // To move the snake forward, a value of 1 must be added to either the x or y coordinate of the first element
    snake_Body[0].x += snake_Direction.x; // -1 makes the snake move left, +1 makes the snake move right
    snake_Body[0].y += snake_Direction.y; // -1 makes the snake move up, +1 makes the snake move down
    
}





// Draws the snake to the board
export function draw_Snake (board) {
    // Executes the draw_Snake function for once for every element in the snake_Body array
    snake_Body.forEach(snake_Segment => {
        let snake_Element = document.createElement("div"); // Creates a new div for the snake every time this function is called

        // Sets the x and y coordinates of the current segment of the snake
        snake_Element.style.gridRowStart = snake_Segment.y;
        snake_Element.style.gridColumnStart = snake_Segment.x;

        /*  
            Adds a new class to the document
            The new class is named "snake" because CSS was implemented to specifically for a div named "snake" 
        */
        snake_Element.classList.add("snake"); 

        board.appendChild(snake_Element); // Adds the snake body to the board
    })
}




export function expand_Snake (growth_Amount) {
    new_Snake_Segments += growth_Amount; // The snake grows by the amount passed to the parameter every time this function is called
}


export function food_Touching_Snake(board_Location) {
    // If any segment of the snake is at the same position of the location parameter, the entire food_Touching_Snake function returns true
    return snake_Body.some(snake_Segment => {
        return (snake_Segment.x == board_Location.x) && (snake_Segment.y == board_Location.y); // When the a segment of the snake is touching the location given on the board location parameter, this return statement returns true, otherwise it returns false
    })
}



 function add_New_Snake_Segment () {
    // Looping up to the new_Snake_Segments variable lets the snake know how many segments to grow by
    for (let x = 0; x < new_Snake_Segments; x++) { 
        snake_Body.push({...snake_Body[snake_Body.length - 1]}); // This takes the very last element of the snake and duplicates it to the end of the current snake length, increasing its length by 1  
    }

    new_Snake_Segments = 0; // Set back to 0 so the snakes stops growing after the loop is iterated through
}





export function get_Snake_Head() {
    return snake_Body[0];
}