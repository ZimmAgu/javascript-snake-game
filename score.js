
let snakeScore = 0

export function showScoreBoard (board) {
    const canvas = document.createElement("canvas") 
    canvas.id = 'scoreboard'

    // canvas.style.border = "thick solid #0000FF";
    canvas.style.marginLeft = 'auto'



    canvas.style.gridColumnStart = 1
    canvas.style.gridColumnEnd = 15
    canvas.style.gridRowStart = 1
    canvas.style.gridRowEnd = 15

    const context = canvas.getContext("2d");
    context.font = "30px Arial";
    context.fillText("SCORE: " + snakeScore, 100, 50);

    
    board.appendChild(canvas); // Adds new canvas to the snake game board
}


export function getScore (score) {
    

    if (score) {
        snakeScore = score;  
        return score;
    }
}



