// Written by: Zim Agu

export let snake_Moves_Per_Second = 2;
export let snake_Speed = 1 / snake_Moves_Per_Second; // If the snake moves 2 times per second, 1/2 means there is 0.5 seconds between each move

let snake_Body = [
    {x:11, y:11},
    {x:12, y:11},
    {x:13, y:11}
] // Each element of this array is a segment of the snake containing it's own x and y values on the grid



// Updates the position of the snake
export function update_Snake () {
    
    // This for loop Starts at the second to last segment of the snake and iterates down until it gets to the first segment of the snake
    for(let snake_Length = snake_Body.length - 2; snake_Length >= 0; snake_Length--) {
        snake_Body[snake_Length + 1] = {...snake_Body[snake_Length]}; // When the snake moves, the value of the current x and y coordinates of the current segment object are moved into the next segment
    }

    // To move the snake forward, a value of 1 must be added to either the x or y coordinate of the first element
    snake_Body[0].x += 1; // -1 makes the snake move left, +1 makes the snake move right
    snake_Body[0].y += 0; // -1 makes the snake move up, +1 makes the snake move down
    
}


// Draws the snake to the board
export function draw_Snake (board) {
    // Executes the draw_Snake function for once for every element in the snake_Body array
    snake_Body.forEach(snake_Segment => {
        let snake_Element = document.createElement("div"); // Creates a new div for the snake every time this function is called

        // Sets the x and y coordinates of the current segment of the snake
        snake_Element.style.gridRowStart = snake_Segment.y;
        snake_Element.style.gridColumnStart = snake_Segment.x;

        // Adds a new class to the document
        // The new class is named "snake" because CSS was implemented to make any element in the class "snake" blue
        snake_Element.classList.add("snake"); 

        board.appendChild(snake_Element); // Adds the snake body to the board
    })
}