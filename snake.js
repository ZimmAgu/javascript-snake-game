export let snake_Moves_Per_Second = 2;
export let snake_Speed = 1 / snake_Moves_Per_Second; // If the snake moves 2 times per second, 1/2 means there is 0.5 seconds between each move

let snake_Body = [{x:11, y:11}]

export function update_Snake () {
    console.log('update');
}


export function draw_Snake (board) {
    // Executes the draw_Snake function for once for every element in the snake_Body array
    snake_Body.forEach(segment => {
        let snake_Element = document.createElement("div"); // Creates a new div for the snake every time this function is called

        snake_Element.style.gridRowStart = segment.x;
        snake_Element.style.gridColumnStart = segment.y;

        // Adds a new class to the document
        // The new class is named "snake" because CSS was implemented to make any element in the class "snake" blue
        snake_Element.classList.add("snake"); 

        board.appendChild(snake_Element); // Adds the snake body to the board
    })
}