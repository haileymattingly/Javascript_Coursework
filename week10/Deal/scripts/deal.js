//$(document).ready(function(){

function card(name,suit,value,image) {
    this.name = name;
    this.suit = suit;
    this.value = value;
    this.image = image;
} 

var cardDeck = [
    new card('Ace', 'Hearts', 11, "images/cards/Hearts/Ace.jpg"),
    new card('Two', 'Hearts', 2, "images/cards/Hearts/Two.jpg"),
    new card('Three', 'Hearts', 3, "images/cards/Hearts/Three.jpg"),
    new card('Four', 'Hearts', 4, "images/cards/Hearts/Four.jpg"),
    new card('Five', 'Hearts', 5, "images/cards/Hearts/Five.jpg"),
    new card('Six', 'Hearts', 6, "images/cards/Hearts/Six.jpg"),
    new card('Seven', 'Hearts', 7, "images/cards/Hearts/Seven.jpg"),
    new card('Eight', 'Hearts', 8, "images/cards/Hearts/Eight.jpg"),
    new card('Nine', 'Hearts', 9, "images/cards/Hearts/Nine.jpg"),
    new card('Ten', 'Hearts', 10, "images/cards/Hearts/Ten.jpg"),
    new card('Jack', 'Hearts', 10, "images/cards/Hearts/Jack.jpg"),
    new card('Queen', 'Hearts', 10, "images/cards/Hearts/Queen.jpg"),
    new card('King', 'Hearts', 10, "images/cards/Hearts/King.jpg"),
    new card('Ace', 'Diamonds', 11, "images/cards/Diamonds/Ace.jpg"),
    new card('Two', 'Diamonds', 2, "images/cards/Diamonds/Two.jpg"),
    new card('Three', 'Diamonds', 3, "images/cards/Diamonds/Three.jpg"),
    new card('Four', 'Diamonds', 4, "images/cards/Diamonds/Four.jpg"),
    new card('Five', 'Diamonds', 5, "images/cards/Diamonds/Five.jpg"),
    new card('Six', 'Diamonds', 6, "images/cards/Diamonds/Six.jpg"),
    new card('Seven', 'Diamonds', 7, "images/cards/Diamonds/Seven.jpg"),
    new card('Eight', 'Diamonds', 8, "images/cards/Diamonds/Eight.jpg"),
    new card('Nine', 'Diamonds', 9, "images/cards/Diamonds/Nine.jpg"),
    new card('Ten', 'Diamonds', 10, "images/cards/Diamonds/Ten.jpg"),
    new card('Jack', 'Diamonds', 10, "images/cards/Diamonds/Jack.jpg"),
    new card('Queen', 'Diamonds', 10, "images/cards/Diamonds/Queen.jpg"),
    new card('King', 'Diamonds', 10, "images/cards/Diamonds/King.jpg"),
    new card('Ace', 'Clubs', 11, "images/cards/Clubs/Ace.jpg"),
    new card('Two', 'Clubs', 2, "images/cards/Clubs/Two.jpg"),
    new card('Three', 'Clubs', 3, "images/cards/Clubs/Three.jpg"),
    new card('Four', 'Clubs', 4, "images/cards/Clubs/Four.jpg"),
    new card('Five', 'Clubs', 5, "images/cards/Clubs/Five.jpg"),
    new card('Six', 'Clubs', 6, "images/cards/Clubs/Six.jpg"),
    new card('Seven', 'Clubs', 7, "images/cards/Clubs/Seven.jpg"),
    new card('Eight', 'Clubs', 8, "images/cards/Clubs/Eight.jpg"),
    new card('Nine', 'Clubs', 9, "images/cards/Clubs/Nine.jpg"),
    new card('Ten', 'Clubs', 10, "images/cards/Clubs/Ten.jpg"),
    new card('Jack', 'Clubs', 10, "images/cards/Clubs/Jack.jpg"),
    new card('Queen', 'Clubs', 10, "images/cards/Clubs/Queen.jpg"),
    new card('King', 'Clubs', 10, "images/cards/Clubs/King.jpg"),
    new card('Ace', 'Spades', 11, "images/cards/Spades/Ace.jpg"),
    new card('Two', 'Spades', 2, "images/cards/Spades/Two.jpg"),
    new card('Three', 'Spades', 3, "images/cards/Spades/Three.jpg"),
    new card('Four', 'Spades', 4, "images/cards/Spades/Four.jpg"),
    new card('Five', 'Spades', 5, "images/cards/Spades/Five.jpg"),
    new card('Six', 'Spades', 6, "images/cards/Spades/Six.jpg"),
    new card('Seven', 'Spades', 7, "images/cards/Spades/Seven.jpg"),
    new card('Eight', 'Spades', 8, "images/cards/Spades/Eight.jpg"),
    new card('Nine', 'Spades', 9, "images/cards/Spades/Nine.jpg"),
    new card('Ten', 'Spades', 10, "images/cards/Spades/Ten.jpg"),
    new card('Jack', 'Spades', 10, "images/cards/Spades/Jack.jpg"),
    new card('Queen', 'Spades', 10, "images/cards/Spades/Queen.jpg"),
    new card('King', 'Spades', 10, "images/cards/Spades/King.jpg")
]; 


function showCards(start = 0, suit = null){
    
    if(start<cardDeck.length){
        if(suit == null || suit == cardDeck[start].suit){
            $("<img>")
            .attr('src', cardDeck[start].image)
            .appendTo("#" + suit)
            .hide()
            .fadeIn("slow")
            .delay("1000")
            .fadeOut("slow", function(){
                $("#" + suit).empty();
                start ++;
                showCards(start, suit);
            });
        }
        else
        {
            start ++;
            showCards(start, suit);
        }
    }
    else
    {
        $("<img>")
        .attr('src', "images/check_sm.png")
        .appendTo("#" + suit)
        .hide()
        .fadeIn("slow")
        .delay("1000")
        .fadeOut("slow", function(){
            $("#" + suit).empty();
        });
    }
    
}



$(function(){
    $("#btnHeart").click(function(){
        //alert("hearts button clicked");
        showCards(0, "Hearts");
    });

    $("#btnDiamond").click(function(){
        //alert("diamond button clicked");
        showCards(0, "Diamonds");
    });

    $("#btnClub").click(function(){
        //alert("club button clicked");
        showCards(0, "Clubs");
    });

    $("#btnSpade").click(function(){
        //alert("spade button clicked");
        showCards(0, "Spades");
    });
});
    
    
//});  // end of ready    
