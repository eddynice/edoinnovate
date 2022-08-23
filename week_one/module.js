export const intro = () => {
        console.log("my name")
    }
    //name export
export const checkNum = (num) => {
        return num >= 100
    }
    //you can only have one default export in a file.
    //default export
const helloworld = () => {
    console.log("hellowold")
}
export default helloworld;

let x = 7;
if (x > 5 && x < 10) {
    console.log(true)
} else {
    console.log(false)
}