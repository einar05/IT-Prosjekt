let generateChallengeBtn = document.querySelector(".generateChallengeBtn")
let resultChallengeEl = document.querySelector(".resultChallengeEl")
let descriptionChallengeEl = document.querySelector(".descriptionChallengeEl")

generateChallengeBtn.addEventListener("click", generateChallenge)

challengeArr = [
    "Deaf Deaf Treble Clef",
    "One Hour Willpower",
    "One Room Boom",
    "No More 4/4",
]

function generateChallenge(){
    for (let i = 0; i < challengeArr.length; i ++){
        let randomIndex = Math.floor(Math.random() * challengeArr.length);
    
        let challenge = challengeArr[randomIndex]

        resultChallengeEl.innerHTML = `Challenge: ${challenge}`

        if (challenge == "Deaf Deaf Treble Clef"){
            descriptionChallengeEl.innerHTML = "Description: Make a song with the volume down, being practically deaf."
        }
        else if (challenge == "One Hour Willpower"){
            descriptionChallengeEl.innerHTML = "Description: Make a song within an hour of time."
        }
        else if (challenge == "One Room Boom"){
            descriptionChallengeEl.innerHTML = "Description: Make a song using only sounds in the room you are currently in."
        }
        else if (challenge == "No More 4/4"){
            descriptionChallengeEl.innerHTML = "Description: Make a song using any time signature but 4/4."
        }
    }
}