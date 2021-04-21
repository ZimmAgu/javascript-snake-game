// Written by: Zimm Agu

import {snake_Speed} from "./snake.js"

let previous_Render_Time = 0; 

function snake_Game_Loop (current_Render_Time) {

    window.requestAnimationFrame(snake_Game_Loop); // Recursively calls the itself so the Animation frame can constantly be updated

    let elapsed_Render_Time_In_Seconds = (current_Render_Time - previous_Render_Time) / 1000;

    /*
        if the elsapsed time is less than 0.5 seconds, then the snake doesn't need to move, 
        so it ends the current iteration of the function
    */   
    if (elapsed_Render_Time_In_Seconds < snake_Speed)
        return


    previous_Render_Time = current_Render_Time; // every time the loop ends, the current time becomes the previous time

    console.log(elapsed_Render_Time_In_Seconds);
}

window.requestAnimationFrame(snake_Game_Loop);  // Starts the game loop initially