function osas(person1) {
    console.log(person1)
        //return person1
}


class Overcome {
    constructor(name, age, Careers) {
            this.name = name;
            this.age = age;
            this.Careers = Careers;
        }
        //osas()
    display() {
        return (`${this.name}`)
    }

}

const person1 = new Overcome("David", 78, "table_tennis");
const show = person1.display()
console.log(show);

class myVar {
    constructor(name, num) {
        this.names = name
            // this.num = num
            //console.log(this.arr)
    }

    non() {

        // return (this.names + this.num)
        let sum = 0;
        for (let i = 0; i < this.names.length; i++) {
            sum = sum + this.names[i]


        }
        console.log(sum)

    }
}
const name1 = new myVar([2, 8, 78]);
//const name2 = name1.non();
//console.log(name2)
name1.non();


class temp {
    constructor(num) {
        this.temp = num

    }

    fer() {
        return (this.temp * 1.8) + 32
    }
}
const cen = new temp(70);
const name = cen.fer();
console.log(name)