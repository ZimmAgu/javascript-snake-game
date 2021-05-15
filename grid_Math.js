// Written by: Zim Agu

const SIZE_OF_BOARD = 21;

// Returns a random coordinate on our grid
export function random_Grid_Position () {
    return { 
        x: Math.floor(Math.random() * SIZE_OF_BOARD) + 1, // Returns a random x coordinate between 1 and 21
        y: Math.floor(Math.random() * SIZE_OF_BOARD) + 1 // Returns a random y coordinate between 1 and 21
    }
}


export function snake_Is_Off_Board (location) {
    return ( // IF the location parameter is off the board, the function returns one of these four options
        location.x < 1 || location.x > SIZE_OF_BOARD ||
        location.y < 1 || location.y > SIZE_OF_BOARD
    )  
}
