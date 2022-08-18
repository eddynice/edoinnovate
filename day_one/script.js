console.log("welcome to javascript class")

let age;
age = 5;
console.log(age);
age = 6;
console.log(age)
const arr = ["Davis", null]
console.log(arr[1]);

const obj = {
    name: "osaze-omo",
    age: 45,
    children: ['Love'],
    childData: {
        name: "love",
        age: 12
    }
}
arr[2] = 5;
arr[1] = "age"
obj.age = 16;
console.log(obj)
console.log(arr)
console.log(obj.childData.name)

const osas = () => {

}

const person = {
    name: osas,
    address: 'm.m.way',

    age: null,
    gender: "male",
    date: 08152022,
    contact: {
        num: "090",
        insta: "@ooooo"
    }
}
console.log(person)

const text1 = "love";
const text2 = "Sal";
console.log(text1.concat(text2));
console.log(text1 + text2)
    //substr()
console.log(text1.substr(0, 2))
    //subdtring()
console.log(text1.substring(0, 2))
console.log(text2.toLowerCase());
console.log(text2.toUpperCase())

//Array Method
//push
const arr1 = ["Mango", "Egg", "Lima"];
const pushed = arr1.push("colo");
console.log(arr1)

//const newArray = ["nmae", "age", "ididieii"];
//const popped = newArray.pop();
//console.log(newArray);


//shirt
const array1 = [1, 2, 3];
console.log(array1.shift());
console.log(array1)
const array2 = [1, 2, 3];
console.log(array2.unshift(4));
console.log(array2)

//conditional statement
if (2 > 3) {
    console.log(true)
} else if (2 == 3) {
    console.log(true)
} else {
    console.log("he no join")
}

//switch
const expre = "papayass"
switch (expre) {
    case "oranges":
        console.log("oranges are sweet");
        break;
    case 'mongoes':
    case 'papayas':
        console.log("mangos and papayas are $2.444");
        break;
    default:
        console.log(`one two three ${expre}`)
}

//for loop
//const ar = ["my name", "my Age"];
//for (i = 0; i < ar.length; i++) {
//  console.log(ar[i] + "value")
//}
//const arro = ["jsjsj", "jshshwh"]
//for (k = 0; k < arro.length; k++) {
//    console.log(arro[k] + 'value')
//}
//
//let n = 0;
//while (n < 3) {
//  n++
//}
//console.log(n)
//

let resuit = 1;
let i = 0;

do {
    i = i + 1;
    console.log(i)
    resuit = resuit + i;

} while (i < 5);
console.log(resuit)
console.log(i)

function fun(num1, num2) {
    const sum = num1 + num2
    console.log(sum)
}
fun(2, 4)

function hell(name) {
    console.log("helo" + name)
}
hell()
hell("osas")

//function add1(num1, num2) {
//    const sum = num1 + num2;
//   return sum
//   console.log(sum)
//}
//add1(2, 45);
//const summ = add1(8, 3)
//console.log(summ)

export const func = (nun) => {
    return nun > 100 ? true : false
}
console.log(func(20))