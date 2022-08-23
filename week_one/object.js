//object oriented programming
//object literal
const table = {
    legNum: 3,
    color: "brown",
    shape: "triangle"
}

//constructor
function Person(name, age, hobby, height, weight, skinColor) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.height = height;
    this.weight = weight;
    this.skinColor = skinColor;


}



const person1 = new Person("David", 30, "table Tennis", `6.4`, 95, "brown");
console.log(person1)


const anotherseatingArrangement = [];
let tracker = 0
for (let i = 0; i < 4; i++) {
    //populating the array with seat numbers
    const row = [];
    for (let j = 0; j < 4; j++) {
        tracker = tracker + 1
        const seat = [tracker]
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
            str = str + seat + "\t\t"
        })
        console.log(str)

    });
}
const checkFull = (seat) => {
        return seat[1]
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
        //anotherseatingArrangement[row][col][1] = true;
        showSeatingArrangement()

    }



}
showSeatingArrangement()
seatPerson()