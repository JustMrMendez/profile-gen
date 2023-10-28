let bindElement = (inputTag, property, textE, containerId) => {
    let inputs = document.querySelectorAll(inputTag)
    console.log(inputs)
    // loop through the elements
    inputs.forEach((input) => {
        let createdElement = document.createElement(textE)
        input.addEventListener("input", ()=>{
            createdElement[property] = input.value 
        })
        document.getElementById(containerId).appendChild(createdElement)
    })
}
bindElement("input", "innerText","p", "profileElements")
bindElement("select", "href","a", "smIcons")

changeCover.addEventListener("change") {
    if(changeCover.value === "no" ) {
        color.style.display = "none"
    } {
        color.style.display = "block"
    }
}
