/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls two dice as many times as he whishes. Each result get added to his CURRENT score
- BUT, if the player rolls a 1, all his CURRENT score gets lost; OR, if the player rolls two sixes at once, all his GLOBAL score gets lost. After that, it's the next player's turn.
- The player can choose to 'Hold', which means that his CURRENT score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach the target point on GLOBAL score wins the game
- Then the players can initiate a new game.
*/
var globalScoreArr, currentScore, currentPlayerID, target, gameOn;

document.addEventListener('DOMContentLoaded', initialize, false); //initialize game when webpage loads

document.querySelector('.btn-new').addEventListener('click', initialize); //if new game is requested, initialize everything from scratch. (reset)

//increases the global score of current player by the currentScore of said player, 
//then zeroes currentPlayer's currentScore and changes players
document.querySelector('.btn-hold').addEventListener('click', function(){

    if(currentScore !== 0 && gameOn){

        globalScoreArr[currentPlayerID] += currentScore;
        document.querySelector('#score-' + currentPlayerID).textContent = globalScoreArr[currentPlayerID];

        if(globalScoreArr[currentPlayerID] >= target){
            changePlayer(1);
            document.querySelector('.player-' + currentPlayerID + '-panel').classList.add('winner');
            document.getElementById('name-' + currentPlayerID).textContent += ' wins!';
            gameOn = false;
        }else{
            changePlayer(0);
        }
    }
});

//clicking on the roll button increases the current players currentScore by the dice roll, 
//zeroes the current score if player rolls any one's or two sixes, then cnages player turn.
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gameOn){
        
        var dice0 = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice0dom = document.getElementById('dice-0');
        var dice1dom = document.getElementById('dice-1');

        dice0dom.style.display = 'block';
        dice1dom.style.display = 'block';

        dice0dom.src = 'dice-' + dice0 + '.png';
        dice1dom.src = 'dice-' + dice1 + '.png';

        if(!(dice0 === 1 || dice1 === 1) && !(dice0 === 6 && dice1 === 6)){
            currentScore += (dice0 + dice1);
            document.querySelector('#current-' + currentPlayerID).textContent = currentScore;
        } else {
            if(dice0 === 6 && dice1 === 6){
                globalScoreArr[currentPlayerID] = 0;
                document.querySelector('#score-' + currentPlayerID).textContent = globalScoreArr[currentPlayerID];
            }
            changePlayer(0);
        }
    }
});
//initializes the data and the html objects. prompt the user to enter a target point and the names of the two players.
function initialize(){

    globalScoreArr = [0,0];
    currentScore = 0;
    currentPlayerID = 0;
    gameOn = true;

    target = prompt('Enter Target Score');

    document.getElementById('dice-0').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';

    for(const s of ['score-0', 'score-1', 'current-0', 'current-1'])
        document.getElementById(s).textContent = 0;

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    document.getElementById('name-0').textContent = prompt('Enter First Player Name:');
    document.getElementById('name-1').textContent = prompt('Enter Second Player Name:');
}
//changes player, makes the other player active only if the status is 0, status 1 means target was reached.
function changePlayer(status){
    currentScore = 0;
    document.querySelector('#current-' + currentPlayerID).textContent = currentScore;
    document.querySelector('.player-' + currentPlayerID + '-panel').classList.remove('active');
    
    if(status === 0){
        currentPlayerID === 0 ? currentPlayerID = 1 : currentPlayerID = 0;
        document.querySelector('.player-' + currentPlayerID + '-panel').classList.add('active');
    }
}