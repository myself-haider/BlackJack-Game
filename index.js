let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message = "";
let a = document.getElementById("sum");
let b = document.getElementById("ques");
let c = document.getElementById("card");

function randomNumber(){
    let rNumber = (Math.floor(Math.random() * 13) + 1);
    if(rNumber>10){
        return 10;
    }
    else if(rNumber === 1){
        return 11;
    }
    else{
        return rNumber;
    }
}

function startGame(){
    isAlive = true;
    let firstCard = randomNumber();
    let secondCard = randomNumber();
    cards = [firstCard,secondCard]; 
    sum = firstCard + secondCard; 
    renderGame();
}

// let variable2 = document.getElementById("startGame");
// variable2.addEventListener("click",fucntion(){
//     isAlive = true
//     let firstCard = randomNumber()
//     let secondCard = randomNumber()
//     cards = [firstCard,secondCard] 
//     sum = firstCard + secondCard
//     renderGame()
// } )

function renderGame(){ 
    c.innerText = "Cards:";
    for(let i=0;i<cards.length;i++){
        c.innerText +=" "+ cards[i] + " " ;
    } 
    a.innerText = "Sum: "  + sum; 

    if(sum <= 20){
        message = "Do you want to play again?"; 
    }
    else if(sum === 21){
        message = "You've got a BlackJack ";
        hasBlackJack = true;
    }
    else{
        message = "You're out of the game ";
        isAlive = false;
    }
    b.innerText = message;
}

// function newCard(){
//     if(isAlive === true && hasBlackJack === false){
//         let newCard = randomNumber()
//         sum += newCard;
//         cards.push(newCard);
//         renderGame();
//     }
// }

let variable = document.getElementById("newCard");

variable.addEventListener("click",function(){
    if(isAlive === true && hasBlackJack === false){
                let newCard = randomNumber()
                sum += newCard;
                cards.push(newCard);
                renderGame();
            }
})

