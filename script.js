'use strict';
/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent= '🕺 Correct Number!';
document.querySelector('.number').textContent=2;
document.querySelector('.score').textContent=12;
document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value); */

let secretNumber =Math.trunc(Math.random() * 20) + 1;

let score=20;

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);
    if(!guess){
        document.querySelector('.message').textContent= '⛔ No Number!'; 
    } else if(guess === secretNumber){
        document.querySelector('.message').textContent='🎉 Correct Number!';
        document.querySelector('.number').textContent =secretNumber;

        document.querySelector('body').style.backgroundColor='skyblue';
        document.querySelector('.number').style.width='30rem';
    } else if(guess > secretNumber){
        if(score>1){
            document.querySelector('.message').textContent= '📈 Too High!';
        score--;
        document.querySelector('.score').textContent=score;
        } else{
            document.querySelector('.message').textContent='💥 You lost the game!';
            document.querySelector('.score').textContent=0;
        }
    } else if(guess < secretNumber){
        if(score>1){
            document.querySelector('.message').textContent= '📉 Too Low!';
        score--;
        document.querySelector('.score').textContent=score;
        } else{
            document.querySelector('.message').textContent='💥 You lost the game!';
            document.querySelector('.score').textContent=0;
        }
    }
});


document.querySelector('.again').addEventListener('click',function () {
    score =20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('.number').style.width='15rem';
});