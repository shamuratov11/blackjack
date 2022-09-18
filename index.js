// 2. Create the player object. Give it two keys, name and chips, and set their values
let player = {
    name: "Abdulla",
    chips:5000
}
let cards = []
let hasBlackJack = false
let  isAlive = false
let message = ""
let sum = 0
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
sumEl.textContent = "Sum: " + 0
// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.querySelector("#player-el")

// 4. Render the player's name and chips in playerEl
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1

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
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    isAlive = true
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
        // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if(isAlive&&!hasBlackJack){
        let newCard = getRandomCard()
    cards.push(newCard)
    sum+=newCard
    renderGame()
    }

}

