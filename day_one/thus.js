const settingArrangement = [
    [1],
    [2],
    [3],
    [4]
]

//console.log(settingArrangement);

const anotherseatingArrangement = [];
let tracker = 0
for (let i = 0; i < 4; i++) {
    //populating the array with seat numbers
    const row = [];
    for (let j = 0; j < 4; j++) {
        tracker = tracker + 1
        const seat = [tracker, false]
        row.push(seat)
    }
    anotherseatingArrangement.push(row)
}
//console.log(anotherseatingArrangement)

const showSeatingArrangement = () => {
    //go  through the array and log the seating arrangement to the console.log()
    console.log("\n this is the current seating arrangement");
    anotherseatingArrangement.forEach((row) => {
        let str = ""
        row.forEach((seat) => {
            //       console.log(seat[0])
            str = str + seat[0] + "\t\t"
        })
        console.log(str)

    });
}
const checkFull = (seat) => {
    return seat[1]
}
checkFull = () => {

}
const getInput = () => {

    }
    //showSeatingArrangement();
const seatPerson = () => {
    for (let i = 0; i < 16; i++) {

        const Username = prompt("Please Enter your name");
        if (!Username) {
            return
        }
        const seatNumber = prompt("please Enter Your Seat Numbe");
        if (!seatNumber) {
            return
        }
        const row = Math.ceil(seatNumber / 4) - 1;
        const col = (seatNumber - 4 * row) - 1;
        if (checkFull(anotherseatingArrangement[row][col][0])) {
            alert("this seat is taken");
            return;

        }
        anotherseatingArrangement[row][col][0] = Username;
        anotherseatingArrangement[row][col][1] = true;
        showSeatingArrangement()

    }



}
showSeatingArrangement()
seatPerson()