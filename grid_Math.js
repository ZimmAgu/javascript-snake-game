const SIZE_OF_GRID = 21;

// Returns a random coordinate on our grid
export function random_Grid_Position () {
    return {
        x = Math.floor(Math.random() * SIZE_OF_GRID)
    }
}