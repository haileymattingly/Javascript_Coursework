$(document).ready(function () {

	var deck = [
		new card('Ace', 'Hearts', 11, 142, "images/Hearts/Ace.jpg"),
		new card('Two', 'Hearts', 2, 22, "images/Hearts/Two.jpg"),
		new card('Three', 'Hearts', 3, 32, "images/Hearts/Three.jpg"),
		new card('Four', 'Hearts', 4, 42, "images/Hearts/Four.jpg"),
		new card('Five', 'Hearts', 5, 52, "images/Hearts/Five.jpg"),
		new card('Six', 'Hearts', 6, 62, "images/Hearts/Six.jpg"),
		new card('Seven', 'Hearts', 7, 72, "images/Hearts/Seven.jpg"),
		new card('Eight', 'Hearts', 8, 82, "images/Hearts/Eight.jpg"),
		new card('Nine', 'Hearts', 9, 92, "images/Hearts/Nine.jpg"),
		new card('Ten', 'Hearts', 10, 102, "images/Hearts/Ten.jpg"),
		new card('Jack', 'Hearts', 10, 112, "images/Hearts/Jack.jpg"),
		new card('Queen', 'Hearts', 10, 122, "images/Hearts/Queen.jpg"),
		new card('King', 'Hearts', 10, 132, "images/Hearts/King.jpg"),
		new card('Ace', 'Diamonds', 11, 141, "images/Diamonds/Ace.jpg"),
		new card('Two', 'Diamonds', 2, 21, "images/Diamonds/Two.jpg"),
		new card('Three', 'Diamonds', 3, 31, "images/Diamonds/Three.jpg"),
		new card('Four', 'Diamonds', 4, 41, "images/Diamonds/Four.jpg"),
		new card('Five', 'Diamonds', 5, 51, "images/Diamonds/Five.jpg"),
		new card('Six', 'Diamonds', 6, 61, "images/Diamonds/Six.jpg"),
		new card('Seven', 'Diamonds', 7, 71, "images/Diamonds/Seven.jpg"),
		new card('Eight', 'Diamonds', 8, 81, "images/Diamonds/Eight.jpg"),
		new card('Nine', 'Diamonds', 9, 91, "images/Diamonds/Nine.jpg"),
		new card('Ten', 'Diamonds', 10, 101, "images/Diamonds/Ten.jpg"),
		new card('Jack', 'Diamonds', 10, 111, "images/Diamonds/Jack.jpg"),
		new card('Queen', 'Diamonds', 10, 121, "images/Diamonds/Queen.jpg"),
		new card('King', 'Diamonds', 10, 131, "images/Diamonds/King.jpg"),
		new card('Ace', 'Clubs', 11, 143, "images/Clubs/Ace.jpg"),
		new card('Two', 'Clubs', 2, 23, "images/Clubs/Two.jpg"),
		new card('Three', 'Clubs', 3, 33, "images/Clubs/Three.jpg"),
		new card('Four', 'Clubs', 4, 43, "images/Clubs/Four.jpg"),
		new card('Five', 'Clubs', 5, 53, "images/Clubs/Five.jpg"),
		new card('Six', 'Clubs', 6, 63, "images/Clubs/Six.jpg"),
		new card('Seven', 'Clubs', 7, 73, "images/Clubs/Seven.jpg"),
		new card('Eight', 'Clubs', 8, 83, "images/Clubs/Eight.jpg"),
		new card('Nine', 'Clubs', 9, 93, "images/Clubs/Nine.jpg"),
		new card('Ten', 'Clubs', 10, 103, "images/Clubs/Ten.jpg"),
		new card('Jack', 'Clubs', 10, 113, "images/Clubs/Jack.jpg"),
		new card('Queen', 'Clubs', 10, 123, "images/Clubs/Queen.jpg"),
		new card('King', 'Clubs', 10, 133, "images/Clubs/King.jpg"),
		new card('Ace', 'Spades', 11, 144, "images/Spades/Ace.jpg"),
		new card('Two', 'Spades', 2, 24, "images/Spades/Two.jpg"),
		new card('Three', 'Spades', 3, 34, "images/Spades/Three.jpg"),
		new card('Four', 'Spades', 4, 44, "images/Spades/Four.jpg"),
		new card('Five', 'Spades', 5, 54, "images/Spades/Five.jpg"),
		new card('Six', 'Spades', 6, 64, "images/Spades/Six.jpg"),
		new card('Seven', 'Spades', 7, 74, "images/Spades/Seven.jpg"),
		new card('Eight', 'Spades', 8, 84, "images/Spades/Eight.jpg"),
		new card('Nine', 'Spades', 9, 94, "images/Spades/Nine.jpg"),
		new card('Ten', 'Spades', 10, 104, "images/Spades/Ten.jpg"),
		new card('Jack', 'Spades', 10, 114, "images/Spades/Jack.jpg"),
		new card('Queen', 'Spades', 10, 124, "images/Spades/Queen.jpg"),
		new card('King', 'Spades', 10, 134, "images/Spades/King.jpg")
	];

	function card(name, suit, value, trump, images) {
		this.name = name;
		this.suit = suit;
		this.value = value;
		this.trump = trump;
		this.images = images;
	}

	var player;

	$("#newPlayer").click(function () {

		player = prompt("Please enter your name:", "Player");
		$(".pName").text(player);

	});

	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	var pDeck = new Array();
	var cDeck = new Array();

	$("#deal").click(function () {

		deck = shuffle(deck);
		//console.log(deck);

		var half_length = Math.ceil(deck.length / 2);
		pDeck = deck.splice(0, half_length);
		//console.log(pDeck);
		cDeck = deck;
		//console.log(cDeck);

		$("#cardCount").text(pDeck.length);

	});

	var points = 0;
	var pScore = 0;
	var cScore = 0;

	$("#play").click(function () {

		if (pDeck.length != 0) {
			$("#cCard").empty();
			$("#pCard").empty();

			var pCard = pDeck[0];
			//console.log(pCard);
			var cCard = cDeck[0];
			//console.log(cCard);

			pDeck.shift();
			cDeck.shift();
			$("#cardCount").text(pDeck.length);

			$("<img>")
				.attr('src', pCard.images)
				.appendTo("#pCard");

			$("<img>")
				.attr('src', cCard.images)
				.appendTo("#cCard");


			if (pCard.trump > cCard.trump) {
				// if the player wins
				points = pCard.value + cCard.value;
				pScore += points;
				$("#pScore").text(pScore);
			}
			else {
				// if the computer wins
				points = cCard.value + pCard.value;
				cScore += points;
				$("#cScore").text(cScore);
			}
		}
		else if (pDeck.length == 0) {

			$("#cCard").empty();
			$("#pCard").empty();

			if (pScore > cScore) {
				// if player wins
				$("<img>")
					.attr('src', "images/other/check.png")
					.appendTo("#pCard");

				$("<img>")
					.attr('src', "images/other/x.png")
					.appendTo("#cCard");

				$("#win").html("<p>Congratulations you win!!</p>");
				//$("#win").html("<p>Congratulations " + player + " you win!!</p>");
			}
			else {
				//if computer wins
				$("<img>")
					.attr('src', "images/other/x.png")
					.appendTo("#pCard");

				$("<img>")
					.attr('src', "images/other/check.png")
					.appendTo("#cCard");

				$("#win").html("<p>Bummer, the computer won.</p>");
			}
		}
	});
});
