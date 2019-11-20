/*/*********************************************Deck_Of_Cards*************************************
@Description-To initialize deck of cards having suit ("Clubs", "Diamonds", "Hearts", "Spades") 
    & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace").
@I/P- Number of cards to be distributed and to Number Of Players
@Logic-Shuffle the cards using Random method and then distribute 9 Cards to 4 Players 
@Output-Print the Cards the received by the 4 Players using 2D Array
@Aurhor-Sindooja Gajam
@Date-19/11/19
/*************************************************************************************************/
var utility=require('./utilityOp/DeckOfCards');
var u = require('../utility/utility');
var deck= new utility.shuffle();

class DeckCard
{
    deckCards()
    {
        var cards=deck.cards();
        //deck.shuffleCards(cards);
        console.log("Enter number of Players=");
        var noOfPlayers=u.inputIntegerRead();
        console.log("Enter number of cards to be distrubed=");
        var noOfCards=u.inputIntegerRead();
        deck.distributingCards(cards,noOfPlayers,noOfCards);
    }
}

var deckCard = new DeckCard();
deckCard.deckCards();

module.exports={
    DeckCard
}
