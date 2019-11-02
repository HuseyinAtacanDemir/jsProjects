/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var globalScoreArr, currentScore, currentPlayerID, lastDice, target;

document.addEventListener('DOMContentLoaded', initialize, false);

document.querySelector('.btn-new').addEventListener('click', initialize);

document.querySelector('.btn-hold').addEventListener('click', function(){

    if(currentScore !== 0 && globalScoreArr[0] < target && globalScoreArr[1] < target){

        globalScoreArr[currentPlayerID] += currentScore;
        document.querySelector('#score-' + currentPlayerID).textContent = globalScoreArr[currentPlayerID];

        currentScore = 0;
        document.querySelector('#current-' + currentPlayerID).textContent = currentScore;
        

        if(globalScoreArr[currentPlayerID] >= target){

            document.querySelector('.player-' + currentPlayerID + '-panel').classList.remove('active');
            document.getElementById('name-' + currentPlayerID).classList.add('winner');
            document.getElementById('name-' + currentPlayerID).textContent += ' wins!';

        } else {

            document.querySelector('.player-' + currentPlayerID + '-panel').classList.remove('active');

            currentPlayerID === 0 ? currentPlayerID = 1 : currentPlayerID = 0;

            document.querySelector('.player-' + currentPlayerID + '-panel').classList.add('active');

        }
    }

});

document.querySelector('.btn-roll').addEventListener('click', function() {

    if(globalScoreArr[1] < target && globalScoreArr[0] < target){
        
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice');

        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        if(dice !== 1 && !(lastDice === 6 && lastDice === dice)){

            currentScore += dice;
            document.querySelector('#current-' + currentPlayerID).textContent = currentScore;
            lastDice = dice;

        } else { 

            currentScore = 0;
            lastDice = 0;

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
    lastDice = 0;
    target = prompt('Enter Target Score');

    document.querySelector('.dice').style.display = 'none';

    for(const s of ['score-0', 'score-1', 'current-0', 'current-1'])
        document.getElementById(s).textContent = 0;

    document.getElementById('name-0').classList.remove('winner');
    document.getElementById('name-1').classList.remove('winner');

    document.getElementById('name-0').textContent = prompt('Enter First Player Name:');
    document.getElementById('name-1').textContent = prompt('Enter Second Player Name:');

    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    

}