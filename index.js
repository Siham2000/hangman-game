const letters = "abcdefghijklmnopqrstuvwxyz"
let arrayLetters = Array.from(letters)
let lettersContainer= document.querySelector(".letters")



arrayLetters.forEach(letter =>{
    let span =document.createElement("span")
    let textSpan = document.createTextNode(letter)
    span.append(textSpan)
  span.className = "letter-box"
  lettersContainer.append(span)

})


// Object Of Words + Categories
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Jordan", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}


// get random category
let allKeys = Object.keys(words)

let randomPropNumber = Math.floor(Math.random()*allKeys.length)
let randomPropNmae = allKeys[randomPropNumber]
let randomPropValue = words[randomPropNmae]
let randomValueNumber  = Math.floor(Math.random()*randomPropValue.length)
let randomValue = randomPropValue[randomValueNumber]

///set category-info 
document.querySelector(".category span").innerHTML = randomPropNmae ;

const lettersGuess = document.querySelector(".letters-guess")
let  lettersAnsSpace= Array.from(randomValue)

lettersAnsSpace.forEach(letter =>{

    let spanSlot = document.createElement("span")
    if(letter === " "){
       spanSlot.className = "has-space"
       }
 
       lettersGuess.append(spanSlot)

});

let letterGuessArray = Array.from(document.querySelectorAll(".letters-guess span"))



//wrongAtempts

let theDraw = document.querySelector(".hangman-draw")
let wrongAtempts =0







//hande click on letters
document.addEventListener("click" , (e)=>{
    let TheStatus = false;

if(e.target.className === "letter-box"){
    e.target.classList.add("clicked")

let currentLetter = e.target.innerHTML.toLowerCase()
let choesenWord = Array.from(randomValue.toLowerCase())

//check  letter 

choesenWord.forEach((wordLetter , wordIndex) =>{
if(currentLetter === wordLetter){
    TheStatus = true;

    letterGuessArray.forEach((span , spanIndex)=>{

        if(wordIndex === spanIndex){
            span.innerHTML = currentLetter

        }
    })

}

})
 //outSide loop 


 //if letter is wrong

 if(TheStatus !== true){
     wrongAtempts++
     theDraw.classList.add(`wrong-${wrongAtempts}`)

     if(wrongAtempts ===8){
         lettersContainer.classList.add("finished")
         endGame()

     } 


 
 }

}

})

function endGame(){
    let div = document.createElement("div")
    div.innerText = `Game Over , the word is ${randomValue}`

    div.className = "popup"
    document.body.append(div)


}


function endGameWin(){
    let div = document.createElement("div")
    div.innerText = `Weel done , your atempts ${wrongAtempts}`
    div.className = "popup"
    document.body.append(div)


}

