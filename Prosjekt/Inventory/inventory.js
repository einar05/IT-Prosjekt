//Henter inn HTML-elementene ved hjelp av DOM eller "Document Object Model"
let addToDoBtn = document.querySelector("#addToDo")
let toDoContainerEl = document.querySelector("#toDoContainer")
let inputFieldEl = document.querySelector("#inputField")


//Legger til en lytter som lytter etter når brukeren trykker på knappen, og kjører tilhørende funksjon
addToDoBtn.addEventListener("click", addParagraph)

//Legger til en lytter som lytter etter når brukeren trykker på en tast, og kjører tilhørende funksjon
inputFieldEl.addEventListener("keypress", clickEnter)

//Lagrer p-elementene som lages i addParagpraph funksjonen i et array
let paragraphs = []


//Funksjon som lager et avsnitt når brukeren trykker på knappen
function addParagraph(){
    let paragraph = document.createElement("p")
    paragraph.classList.add("paragraph-styling")
    paragraph.innerText = inputFieldEl.value
    toDoContainer.appendChild(paragraph)
    inputFieldEl.value = ""

    paragraphs.push(paragraph)

    paragraph.addEventListener("click", crossOut)
    paragraph.addEventListener("dblclick", removeItem)

    function crossOut(){
        paragraph.style.textDecoration = "line-through"
    }

    function removeItem(){
        toDoContainerEl.removeChild(paragraph)
    }
}

//Funksjon som skal kjøre funksjonen addParagraph når brukeren trykker på Enter-tasten
function clickEnter(event){
    if (event.key ==="Enter"){
        event.preventDefault()
        addToDoBtn.click()
    }
}