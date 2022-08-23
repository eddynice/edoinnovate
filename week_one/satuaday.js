class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }
    push(element) {
        this.items[this.count] = element
        console.log(` ${element} added to ${this.count}`)
        this.count += 1;

        return this.count - 1

    }
    pop() {
        if (this.count == 0) return undefined;
        let deleted = this.items[this.count - 1]
        this.count -= 1
        console.log(` ${deleted} item deleted`)
        return deleted
    }
}
const stack = new Stack()
stack.push(100)
stack.push(200)
stack.push(300)
stack.push(400)

stack.pop()

class List {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = []; // initializes an empty array to store list elements

    }
    append(element) {
        this.dataStore[this.listSize++] = element;
        // console.log(this.dataStore[0])
    }
}
const stacked = new List()
stacked.append(100);

var grades = [
    [89, 77],
    [76, 82, 81],
    [91, 94, 89, 99]
];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
    for (var col = 0; col < grades[row].length; ++col) {
        total += grades[row][col];
        console.log(total)
    }
    average = total / grades[row].length;
    // console.log("Student " + parseInt(row + 1) + " average: " +
    //average.toFixed(2));
    total = 0;
    average = 0.0;
}
class Stock {
    constructor() {
        this.items = [];
        this.count = 0;
        this.dataStore = 100;
    }
    find(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                console.log(i)
                return i;
            }
        }
        return -1;
    }
}
const stac = new Stock()
stac.find(100);
i++;
//is the equivalent of

i = i + 1;
i--;
//is the equivalent of

i = i - 1;