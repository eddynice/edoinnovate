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