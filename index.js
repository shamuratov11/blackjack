let firstCard = 6
let secondCard = 9
let hasBlackJack = false
let  isAlive = true
let message = ""
let sum = firstCard+ secondCard
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
console.log(cardsEl)
sumEl.textContent = "Sum: " + 0

function startGame(){
    renderame()
}
function renderame(){
    sumEl.textContent = "Sum: " +sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    if(sum <= 20){
        message = "Do you want to draw a new card?"
        
    }
    else if(sum===21){
        message = "You're Blackjack!"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message  
    console.log(message)
    
}
function newCard(){
let newCard = 8
sum+=newCard
startGame()
cardsEl.innerHTML+= " "+ newCard


}

