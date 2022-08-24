document.getElementById("p").innerHTML = "hello world";
var container = document.getElementsByClassName("element")
container[0].innerHTML = "come";
//
var uls = getElementsByTagName("li")
document.getElementById('demo').innerHTML = uls[1].innerHTML;
document.querySelector("p").style.backgroundColor = " red";
//var myList = document.querySelectorAll("p")
const nodeList = document.querySelectorAll(".example");
for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.backgroundColor = "red";
}

function innerTextfn() {
    var x = document.getElementById("test");
    alert(x.innerText)
}

function innerHTMLfn() {
    var x = document.getElementById("test");
    alert(x.innerHTML)
};

function myFunction() {
    document.querySelector("p").setAttribute("id", "para")
    document.querySelector("p").setAttribute("class", "title")

}

function myFun() {
    // u create a variable
    const pTag = document.createElement("h1")
        //u use the textContent to get in some text
    pTag.textContent = "some Text"
    pTag.setAttribute("id", "paras")
    document.body.appendChild(pTag)
}

function myFuns() {
    const container = document.createElement("div")
    const pTag = document.createElement("h1")
    pTag.textContent = "some Text"
    pTag.setAttribute("id", "paras")
    document.body.appendChild(container);
    container.appendChild(pTag)


}
//removing para
function myFunls() {
    const paragrap = document.createElement("h1")
    document.body.removeChild(paragrap)
        // const pTag = document.createElement("h1")
        //pTag.textContent = "some Text"
        // pTag.setAttribute("id", "paras")
        // document.body.appendChild(container);
        // container.appendChild(pTag)


}

function one() {
    const div = document.createElement("div")
    const header = document.createElement("h1");
    const p = document.createElement("p")
    p.textContent = "tuesday";
    header.textContent = "header";
    //pTag.setAttribute("id", "paras")
    document.body.appendChild(div);
    div.appendChild(header)
    div.appendChild(p)


}