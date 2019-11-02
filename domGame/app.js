/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var globalScoreArr, currentScore, currentPlayerID;

document.addEventListener('DOMContentLoaded', initialize, false);

document.querySelector('.btn-new').addEventListener('click', initialize);

document.querySelector('.btn-hold').addEventListener('click', function(){

    if(currentScore !== 0 && globalScoreArr[0] < 100 && globalScoreArr[1] < 100){

        globalScoreArr[currentPlayerID] += currentScore;
        document.querySelector('#score-' + currentPlayerID).textContent = globalScoreArr[currentPlayerID];

        currentScore = 0;
        document.querySelector('#current-' + currentPlayerID).textContent = currentScore;
        

        if(globalScoreArr[currentPlayerID] >= 100){

            document.querySelector('.player-' + currentPlayerID + '-panel').classList.remove('active');
            document.querySelector('.player-' + currentPlayerID + '-panel').classList.add('winner');

        } else {

            document.querySelector('.player-' + currentPlayerID + '-panel').classList.remove('active');

            currentPlayerID === 0 ? currentPlayerID = 1 : currentPlayerID = 0;

            document.querySelector('.player-' + currentPlayerID + '-panel').classList.add('active');

        }
    }

});

document.querySelector('.btn-roll').addEventListener('click', function() {

    if(globalScoreArr[1] < 100 && globalScoreArr[0] < 100){
        
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice');

        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        if(dice !== 1){

            currentScore += dice;
            document.querySelector('#current-' + currentPlayerID).textContent = currentScore;

        } else { 

            currentScore = 0;
            document.querySelector('#current-' + currentPlayerID).textContent = currentScore;

            document.querySelector('.player-' + currentPlayerID + '-panel').classList.remove('active');
            
            currentPlayerID === 0 ? currentPlayerID = 1 : currentPlayerID = 0;

            document.querySelector('.player-' + currentPlayerID + '-panel').classList.add('active');
        }
    }
});

function initialize(){

    globalScoreArr = [0,0];
    currentScore = 0;
    currentPlayerID = 0;
    document.querySelector('.dice').style.display = 'none';

    for(const s of ['score-0', 'score-1', 'current-0', 'current-1'])
        document.getElementById(s).textContent = 0;

}