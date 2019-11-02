/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
// dom manipulations using querySelector:
var globalScoreArr, currentScore, currentPlayerID, dice;

globalScoreArr = [0,0];
currentScore = 0;
currentPlayerID = 0;

dice = Math.floor(Math.random() * 6) + 1;

//textContent can only change the text within an html tag. 
document.querySelector('#current-' + currentPlayerID).textContent = dice;
//innerhtml changes the html
//document.querySelector('#current-' + currentPlayerID).innerHTML = '<em>' + dice + '</em>';

//.textContent works both as a setter and a getter
var x = document.querySelector('#score-0').textContent;
console.log(x);

//we can make the die invisible like this:
//document.querySelector('.dice').style.display = 'none';
*/