/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/****
 * 
 *   Events in JS
 */
//events notify the code that an action was taken on the webpage. (click, resize, key pressed, etc.)
//event listeners listen for events and handles them
//event can only be processed when the exec stack is empty (other than Global x stack)
//message queue: messages wait to be processed fifo.


var globalScoreArr, currentScore, currentPlayerID;

globalScoreArr = [0,0];
currentScore = 0;
currentPlayerID = 0;

document.querySelector('.dice').style.display = 'none';

/*
function rollDice(){

}
//handling roll dice button class = btn-roll
document.querySelector('.btn-roll').addEventListener('click', rollDice);

//this rollDice function is now called a callBack function, because it is not called by us, but by another function

*/

//anonymous function looks like this: we cannot use it later, it only exists in this line
document.querySelector('.btn-roll').addEventListener('click', function() {
    //1: we need a random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2: we need to display the result
    var diceDOM = document.querySelector('.dice');

    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    //3: we need to update the currentScore of the currentPlayer, only if the rolled number was not a one.
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


