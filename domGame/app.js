/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var globalScoreArr, currentScore, currentPlayerID;

globalScoreArr = [0,0];
currentScore = 0;
currentPlayerID = 0;

document.querySelector('.dice').style.display = 'none';


document.querySelector('.btn-new').addEventListener('click', function(){

    globalScoreArr = [0,0];
    currentScore = 0;
    currentPlayerID = 0;

    document.querySelector('.dice').style.display = 'none';

    document.querySelector('#current-0').textContent = currentScore;
    document.querySelector('#current-1').textContent = currentScore;

    document.querySelector('#score-0').textContent = currentScore;
    document.querySelector('#score-1').textContent = currentScore;
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){

    var prevScore = 0;
    document.querySelector('#current-' + currentPlayerID).textContent = 0;
    prevScore = parseInt(document.querySelector('#score-' + currentPlayerID).textContent, 10);
    currentScore += prevScore;
    document.querySelector('#score-' + currentPlayerID).textContent = currentScore;
    currentScore = 0;

    if(currentPlayerID === 0){
        //document.querySelector('.player-0-panel active').className = 'player-0-panel';
        //document.querySelector('.player-1-panel').className = 'player-1-panel active';
        currentPlayerID = 1;
    } else {
        //document.querySelector('.player-1-panel active').setClassName = 'player-1-panel';
        //document.querySelector('.player-0-panel').className = 'player-0-panel active';
        currentPlayerID = 0;
    }

});

document.querySelector('.btn-roll').addEventListener('click', function() {

    var dice = Math.floor(Math.random() * 6) + 1;

    var diceDOM = document.querySelector('.dice');

    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    if(dice != 1){

        currentScore += dice;
        document.querySelector('#current-' + currentPlayerID).textContent = currentScore;

    } else { 

        currentScore = 0;
        document.querySelector('#current-' + currentPlayerID).textContent = currentScore;

        if(currentPlayerID === 0){
            //document.querySelector('.player-0-panel active').className = 'player-0-panel';
            //document.querySelector('.player-1-panel').className = 'player-1-panel active';
            currentPlayerID = 1;
        } else {
            //document.querySelector('.player-1-panel active').setClassName = 'player-1-panel';
            //document.querySelector('.player-0-panel').className = 'player-0-panel active';
            currentPlayerID = 0;
        }
    }
});


