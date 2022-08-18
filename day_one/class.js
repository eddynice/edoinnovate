const seatingArrangement = [];
const NUM_OF_ROWS = 4;
const NUM_OF_COLUMNS = 4;
let seatingPosition = 0;

for (let i = 0; i < NUM_OF_ROWS; i++) {
    // populating the array with seat numbers

    // create a row
    const row = [];
    for (let j = 0; j < NUM_OF_COLUMNS; j++) {
        // increment the seating position, so the next seat can be one higher than the prevous one
        seatingPosition = seatingPosition + 1;

        // create a seat
        const seat = [seatingPosition, false];

        // add the seat to the row
        row.push(seat);
    }

    // add the row to the seating arrangement
    seatingArrangement.push(row);
}

const showSeatingArrangement = () => {
    // go through the array and log the seating arrangement to the console
    console.log("\nThis is the current seating arrangement");

    // Loop through the seating arrangement array to get each of the rows
    seatingArrangement.forEach((row) => {
        let rowStr = "";
        row.forEach((seat) => {
            // Loop through each row to get the seats
            str = str + seat[0] + "\t\t";
        });
        // log each row
        console.log(rowStr);
    });
};

const getInput = () => {
    // Check if the Seating arrangement is full before getting any input
    while (!classIsFull()) {
        // Get the initial user input
        const userInput = prompt("Enter a name or number");

        // If there is no user input quit the code
        if (!userInput) return;

        // Check if the user input is a number or not
        if (isNaN(userInput)) {
            // If the user input is not a number then it must be a name and we want to seat the person
            seatPerson(userInput);
        } else {
            // If the user input is a number then we want to check who is sat at that seat

            // To check who is there we need to first get the row and the column
            // The following formulae help us discern the rows and column given a seat number

            // To get the rows we use Math.ceil which rounds up values
            const row = Math.ceil(userInput / NUM_OF_ROWS) - 1;
            const col = userInput - 4 * NUM_OF_COLUMNS - 1;

            // check if the chosen seat is full
            if (isFull(seatingArrangement[row][col])) {
                // If the seat is full say the name of the person sat there
                // seatingArrangement[row][col][0] represents the user in the seat
                const person = seatingArrangement[row][col][0];
                alert(`This seat is taken by ${person}`);
            } else {
                // If the seat is empty then say the seat is empty
                alert("This seat is empty");
            }
        }
    }
};

const seatPerson = (userInput) => {
    // prompt the user to enter a seat number
    const seatNumber = prompt("Please enter your seat number");

    // if the user doesn't enter a seat number quit the function
    if (!seatNumber) return;

    // if the seat number is greater than 16, less than 1 or not a number then report the error and quit the function
    if (seatNumber > 16 || seatNumber < 1 || !isNaN(seatNumber)) {
        alert("invalid seat number");
        return;
    }

    // To check who is there we need to first get the row and the column
    // The following formulae help us discern the rows and column given a seat number

    // To get the rows we use Math.ceil which rounds up values
    const row = Math.ceil(userInput / NUM_OF_ROWS) - 1;
    const col = userInput - 4 * NUM_OF_COLUMNS - 1;

    // If the seat is full say the name of the person sat there
    if (isFull(seatingArrangement[row][col])) {
        alert("This seat is taken");
        return;
    }

    // seatingArrangement[row][col][0] represents the user in the seat
    seatingArrangement[row][col][0] = userInput;

    // seatingArrangement[row][col][1] represents the boolean value that tells us if that particular seat is full
    // We make it true now because the eat is full
    seatingArrangement[row][col][1] = true;

    // log the seating arrangement
    showSeatingArrangement();
};

const isFull = (seat) => {
    // simply check if a seat is full by returning the second value in the array which is a boolean value that tells us if an array is full or not
    return seat[1];
};

const classIsFull = () => {
    // Loop through the seating arrangement array to see if there is any empty seat
    for (let i = 0; i < seatingArrangement.length; i++) {
        // seatingArrangement[i] represents the arrays in the seatingArrangement array which are the rows
        const row = seatingArrangement[i];
        for (let j = 0; j < row.length; j++) {
            // row[i] represents the arrays in the row, each of which represents a single seat
            const seat = row[j];

            // check if each seat is full
            // if any seat is not full, quit the function and return false, meaning the class is not full
            if (!isFull(seat)) return false;
        }
    }
    // if after looping through the entire array, no empty seat is found, this means the seating arrangement is full, so return true
    return true;
};

// log the seating arrangement
showSeatingArrangement();

// to start the program get the input
getInput();