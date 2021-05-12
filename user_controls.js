// Written By: Zim Agu

let input_Direction = {x: 0, y: 0};
let previous_Input_Direction = {x: 0, y: 0};


window.addEventListener('keydown', event => { // These are the user controls
    switch (event.key) {
        // If the user presses the up arrow or w, the snake will move up
        case 'ArrowUp':
            if (input_Direction.y != 0) // If the snake is moving up or down, then the up control will not work
                break;
            input_Direction = {x: 0, y: -1};
            break;
        case 'w':
            if (input_Direction.y != 0)
                break;
            input_Direction = {x: 0, y: -1};
            break;

        // If the user presses the left arrow or a, the snake will move left
        case 'ArrowLeft':
            if (input_Direction.x != 0)  // If the snake is moving left or right, then left control will not work
                break;
            input_Direction = {x: -1, y: 0};
            break;
        case 'a':
            if (input_Direction.x != 0)
                break;
            input_Direction = {x: -1, y: 0};
            break;

        // If the user presses the down arrow or s, the snake will move down
        case 'ArrowDown':
            if (input_Direction.y != 0)  // If the snake is moving up or down, then the down control will not work
                break;
            input_Direction = {x: 0, y: 1};
            break;
        case 's':
            if (input_Direction.y != 0)
                break;
            input_Direction = {x: 0, y: 1};
            break;

        // If the user presses the right arrow or d, the snake will move right
        case 'ArrowRight':
            if (input_Direction.x != 0) // If the snake is moving left or right, then the right control will not work
                break;
            input_Direction = {x: 1, y: 0};
            break;
        case 'd':
            if (input_Direction.x != 0)
                break;
            input_Direction = {x: 1, y: 0};
            break;
    }
})


export function user_Moves_The_Snake () {
    return input_Direction;
}