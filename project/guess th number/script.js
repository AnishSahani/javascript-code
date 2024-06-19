let randomNumber=parseInt(Math.random()*100+1)

const submit=document.querySelector('#submit')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guessess')
const remaining=document.querySelector('.lastResult')
const lowOrHigh=document.querySelector('.loworhigh')
const startOver=document.querySelector('.result')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value)

        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a valid Number')
    }else if(guess<1){
        alert('please enter number greater than 0')
    }else if(guess>100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push()
        if(numguess===11){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number is ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guessed it Right`)
    }
    else if(guess < randomNumber){
        displayMessage( `Number is Too low`)
    }
    else{
        displayMessage(`Number is Too High`)
    }
}

function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML +=`${guess}  `
    numguess++
    remaining.innerHTML=`${11-numguess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML=`<h3>${message}</h3>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
  }
  
  function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    })
}
