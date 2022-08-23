class User {
    constructor(name, age, hobbies) {
            this.name = name;
            this.age = age;
            this.hobbies = hobbies;
        }
        //method
    login_age() {
        return (`${this.name}  is  ${this.age}  years old `)
    }

}
const user1 = new User("daivis", 20, 'playing football');
//console.log(user1)
user1.class = "300l";
//console.log(user1)
//console.log(user1.login_age());
const use = user1.login_age()
console.log(use)



function name(params) {
    return
}