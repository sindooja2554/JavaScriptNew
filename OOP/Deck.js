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
