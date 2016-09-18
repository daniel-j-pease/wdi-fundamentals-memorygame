
var cardOne = "Queen";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "King";

/*
if (cardOne === cardTwo){
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
} 
*/

var board = document.getElementById('game-board');
var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];

var createBoard = function(){
	for(var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		board.appendChild(cardElement);
	}
}

var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card')); 
	if (this.getAttribute('data-card') === 'King') {
		this.innerHTML = '<img src="https://pixabay.com/static/uploads/photo/2015/08/11/11/57/diamonds-884195__340.png" alt="King of Diamonds">';
	} else {
		this.innerHTML = '<img src="https://pixabay.com/static/uploads/photo/2015/08/11/11/57/clubs-884198__340.png" alt="Queen of Clubs">';
	}

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

var isMatch = function(cards){
	if (cards[0] === cards[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

createBoard();


