var utility = require('./utilityOp/DeckQueue');
var utilty= require('../utility/utility');
var util = new utility.DeckQueue();
class DeckCardQueue
{
    deckCardQueue()
    {
        console.log("Enter number of Players=");
        var noOfPlayers=utilty.inputIntegerRead();
        util.cardsQueue(noOfPlayers);
    }
}

var deck = new DeckCardQueue();
deck.deckCardQueue();