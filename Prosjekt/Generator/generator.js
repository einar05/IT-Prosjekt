let generateGenreBtn = document.querySelector(".generateGenreBtn")
let resultGenreEl = document.querySelector(".resultGenreEl")
let generateBpmBtn = document.querySelector(".generateBpmBtn")
let resultBpmEl = document.querySelector(".resultBpmEl")
let generateKeyBtn = document.querySelector(".generateKeyBtn")
let resultKeyEl = document.querySelector(".resultKeyEl")
let generateModeBtn = document.querySelector(".generateModeBtn")
let resultModeEl = document.querySelector(".resultModeEl")

generateGenreBtn.addEventListener("click", generateGenre)
generateBpmBtn.addEventListener("click", generateBpm)
generateKeyBtn.addEventListener("click", generateKey)
generateModeBtn.addEventListener("click", generateMode)


let genreArr = [
    "Melodic House",
    "Progressive House",
    "Deep House",
    "Afro House",
    "Ambient",
    "Garage",
    "Liquid Drum & Bass",
    "Chillout",
]

function generateGenre(){
    for (let i = 0; i < genreArr.length; i ++){
        let randomIndex = Math.floor(Math.random() * genreArr.length);
    
        let genre = genreArr[randomIndex]

        resultGenreEl.innerHTML = `Genre: ${genre}`
    }
}

function generateBpm(){
    let BPM = Math.floor(Math.random()*120)+70
    resultBpmEl.innerHTML = `BPM: ${BPM}`
}

let keyArr = [
    "C Major",
    "C Minor",
    "C# Major",
    "C# Minor",
    "D Major",
    "D Minor",
    "D# Major",
    "D# Minor",
    "E Major",
    "E Minor",
    "F Major",
    "F Minor",
    "F# Major",
    "F# Minor",
    "G Major",
    "G Minor",
    "G# Major",
    "G# Minor",
    "A Major",
    "A Minor",
    "A# Major",
    "A# Minor",
    "B Major",
    "B Minor",
]

function generateKey(){
    for (let i = 0; i < keyArr.length; i ++){
        let randomIndex = Math.floor(Math.random() * keyArr.length);
    
        let key = keyArr[randomIndex]

        resultKeyEl.innerHTML = `Key: ${key}`
    }
}

let modeArr = [
    "Ionian",
    "Dorian",
    "Phrygian",
    "Lydian",
    "Mixolydian",
    "Aeolian",
    "Locrian",
]

function generateMode(){
    for (let i = 0; i < modeArr.length; i ++){
        let randomIndex = Math.floor(Math.random() * modeArr.length);
    
        let mode = modeArr[randomIndex]

        resultModeEl.innerHTML = `Mode: ${mode}`
    }
}