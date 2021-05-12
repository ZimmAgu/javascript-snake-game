
let food_Location = {x:0, y:0} // The food coordinates aren't an array because food will always take up just one div

export function update_Food () {

}

export function draw_Food (board) {
    let food_Element = document.createElement("div"); // Creates a new div for the food

    // Sets the x and y coordinates of the food element
    food_Element.style.gridRowStart = food_Location.y;
    food_Element.style.gridColumnStart = food_Location.x;

    /*  
            Adds a new class to the document
            The new class is named "food" because CSS was implemented to specifically for a div named "food" 
        */
    food_Element.classList.add("food"); 

    board.appendChild(food_Element); // Adds the snake body to the board
}