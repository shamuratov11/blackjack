// 2. Use getRandomCard() to set the values of firstCard and secondCard

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard,secondCard]
let hasBlackJack = false
let  isAlive = true
let message = ""
let sum = firstCard+ secondCard
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
sumEl.textContent = "Sum: " + 0

function getRandomCard(){
    let randomNumber = Math.floor(Math.random)+1

        if(randomNumber>9){
            return 10
        }
        else if(randomNumber===1){
        return 11
        }
        else {
        return randomNumber
        }
   
}   

function startGame(){
    renderGame()
}
function renderGame(){
    sumEl.textContent = "Sum: " +sum
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i]+" "
    }
  
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
 
}
function newCard(){
let newCard = getRandomCard()
 // 3. Use the getRandomCard() to set the value of card
cards.push(newCard)
sum+=newCard
renderGame()

}

