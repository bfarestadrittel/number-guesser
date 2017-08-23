var randomNum = Math.floor(Math.random() * 100 + 1);
var enterGuess = document.getElementById('enter-guess');
var guessButton = document.getElementById('guess-button');
var result = document.getElementById('result');
var lowHigh = document.querySelector('#guess-high');
var clearGuess = document.getElementById('clear-guess');
var resetGame = document.getElementById('reset-game');


enterGuess.addEventListener('keyup', disableGuessButton);
//enterGuess.addEventListener('keyup', disableClearButton);


//see what the solution is in the console
//console.log(randomNum)

guessButton.addEventListener('click', function(){
	var guessSubmit = parseInt(enterGuess.value)
	//console.log(guessSubmit)
	result.innerText = guessSubmit
	if (guessSubmit === randomNum){
		lowHigh.innerText = 'BOOM!';	
	}
	else if (guessSubmit > 100){
		lowHigh.innerText = 'Guess Must Be Under 100';
	}
	else if (guessSubmit < 1){
		lowHigh.innerText = 'Guess Must Be Over 0'
	}
	else if (guessSubmit > randomNum){
		lowHigh.innerText = 'Too High!';
	}
	else {
		lowHigh.innerText = 'Too Low!';
	}
});

//clear text field
clearGuess.addEventListener('click', function(event) {
	event.preventDefault();
	enterGuess.value = "";
});
//reset game
resetGame.addEventListener('click', function(){
	window.location.reload(true);

});

function disableGuessButton(){
	if (enterGuess.value === ""){
		guessButton.disabled = true;
		clearGuess.disabled = true;
	}
	else {
		guessButton.disabled = false;
		clearGuess.disabled = false;
	}
}

//function disableClearButton(){
// 	if (enterGuess.value === ""){
// 		clearGuess.disabled = true;
// 	}
// 	else {
// 		guessButton.disabled = false;
// 	}
// }

//if (!userInput.value)
//button.disabled = true;






// function guessEntry() {
// 	var playerGuess = Number(guessInput.value); 
// 	if (parseInt(playerGuess === randomNum) {
// 		lastGuess.textContent = 'BOOM!';
// 		lowHigh.textContent = '';
// 	}	
// 	else if (playerGuess > randomNum) {
// 		lowHigh.textContent = 'Too High!';
// 	}	
// 	else (playerGuess < randomNum) {
// 		lowHigh.textContent = 'Too Low!'; 
// 	}
// 	submitGuess.addEventListener('click', guessEntry());
// }
