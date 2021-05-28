// Written by: Zimm Agu

import {snake_Speed, update_Snake, draw_Snake, get_Snake_Head, snake_Touches_Itself} from "./snake.js";
import {update_Food, draw_Food} from "./food.js";
import {snake_Is_Off_Board} from "./grid_Math.js";

let game_Board = document.getElementById("snake_game_board");
let previous_Render_Time = 0; 
let snake_Is_Dead = false;


alert('Use the arrow keys or WASD to move the snake\nPress ok to start the game')



function snake_Game_Loop (current_Render_Time) {


    if (game_Over()) {
        if (confirm('You Lost. Press OK to Restart')) {
            window.location.reload();
        }
        return;
    }

    window.requestAnimationFrame(snake_Game_Loop); // Recursively calls the itself so the Animation frame can constantly be updated

    let elapsed_Render_Time_In_Seconds = (current_Render_Time - previous_Render_Time) / 1000;

    /*
        if the elsapsed time is less than 0.5 seconds, then the snake doesn't need to move, 
        so it ends the current iteration of the function
    */   
    if (elapsed_Render_Time_In_Seconds < snake_Speed)
        return;


    previous_Render_Time = current_Render_Time; // every time the loop ends, the current time becomes the previous time

    update_Snake(); // Updates the snake position after every loop
    update_Food(); // Updates the snake food position after every loop
    game_Board.innerHTML = ''; // Clears HTML tags after the snake is updated to avoid every square that the snake has been from appearing on the screen
    draw_Snake(game_Board); // Draws the snake character onto the screen
    draw_Food(game_Board); // Draws the snake food on to the screen
    game_Over();
}

window.requestAnimationFrame(snake_Game_Loop);  // Starts the game loop initially




function game_Over () {
    return snake_Is_Dead = snake_Is_Off_Board(get_Snake_Head()) || snake_Touches_Itself();
}