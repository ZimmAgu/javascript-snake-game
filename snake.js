// Written by: Zimm Agu


let previous_Render_Time = 0; 
let snake_Speed = 2; 



function snake_Game_Loop (current_Render_Time) {

    window.requestAnimationFrame(snake_Game_Loop) // Recursively calls the itself so the Animation frame can constantly be updated

    let elapsed_Render_Time_In_Seconds = (current_Render_Time - previous_Render_Time) / 1000;




    previous_Render_Time = current_Render_Time; // every time the loop ends, the current time becomes the previous time

    console.log(elapsed_Render_Time_In_Seconds);
}

window.requestAnimationFrame(snake_Game_Loop);  // Starts the game loop initially