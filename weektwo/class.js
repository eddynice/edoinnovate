//function myFuns() {


const submitButton = document.querySelector("#new-task-submit")
submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("buttton")
    createTask()

})
const createTask = () => {
    const inputBar = document.querySelector("#new-task-input")
    const div = document.querySelector("#tasks")
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    const input = document.createElement("input")
    const button = document.createElement("button")
    const button2 = document.createElement("button")


    // div.setAttribute("id", "tasks")
    div1.setAttribute("class", "task")
    div2.setAttribute("class", "content")
    div3.setAttribute("class", "actions")
    input.setAttribute("type", "text");
    input.setAttribute("class", "text");
    input.setAttribute("value", inputBar.value);
    input.setAttribute("readonly", "readonly");
    button.setAttribute("class", "edit");
    button.setAttribute("type", "button");
    button2.setAttribute("class", "delete");
    button2.setAttribute("type", "button");
    button2.addEventListener("click", () => {
        div.removeChild(div1)
    })
    button.addEventListener("click", () => {
        if (button.textContent === "edit") {
            button.textContent = "save"
            input.removeAttribute("readonly")

        } else {
            button.textContent = "edit";
            input.setAttribute("readonly", "readonly")
        }

    })

    button.textContent = "Edit"
    button2.textContent = "Delete"

    div1.appendChild(div2)
    div1.appendChild(div3)
    div2.appendChild(input)
    div3.appendChild(button)
    div3.appendChild(button2)
        //document.body.appendChild(div);
    div.appendChild(div1);
    inputBar.value = ""

}