const dice = document.querySelector('.dice');
// let number = Math.trunc(Math.random() * 6) + 1;
const reset = document.querySelector('.reset');
const turnEl = document.querySelector('.turn');
const messageEl = document.querySelector('.message')
const sumOfScore = document.querySelector('.sum');
const btnOk = document.getElementById('ok');
const winnerEl = document.querySelector('.winner-message');



let sum = 0;
let turn = 0;
let highScore = 0;
const generatedNumber = document.querySelector('.generated-number');
const highScoreEl = document.querySelector('.highscore');

dice.addEventListener('click', function(){
  let number = Number(Math.trunc(Math.random() * 6) + 1);
  // let highScore = 0;
  console.log(number)
  generatedNumber.textContent = number;
  sum = sum + number;
  sumOfScore.textContent = sum;
  turn++;
  turnEl.textContent = turn;
  if(number > highScore){
  highScore = number;
  highScoreEl.textContent = number;
  }
  if(sum >= 50){
    messageEl.classList.remove('hidden');
    winnerEl.textContent = `${turn}`
    // resetGame();
  }
})



console.log(messageEl)



const resetGame = function(){
  generatedNumber.textContent = " ";
  highScore = 0;
  highScoreEl.textContent = " ";
  sum = 0;
  sumOfScore.textContent = " ";
  turn = 0;
  turnEl.textContent = " ";
  messageEl.classList.add('hidden');
}

reset.addEventListener('click', resetGame);
btnOk.addEventListener('click', resetGame);
