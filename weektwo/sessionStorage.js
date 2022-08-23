//sessionStorage.setItem("name", "salihu")
//key value pair
//key = name
//sessionStorage.setItem("today", "tuesday")
//var osa = sessionStorage.getItem("name")
//console.log(osa)

const arr = [1, 2, 3];
const strArr = JSON.stringify(arr);
sessionStorage.setItem("t", strArr);
//sessionStorage.clear();
//////////////////////////////
//sessionStorage.setItem("today", "tuesday");
//sessionStorage.setItem("today", "tuesday")
//const day = sessionStorage.key(1)
//console.log(day)


const arrs = localStorage.getItem("t")
const newArr = JSON.parse(arrs);
console.log(arr, typeof arr);
console.log(newArr, typeof newArr)