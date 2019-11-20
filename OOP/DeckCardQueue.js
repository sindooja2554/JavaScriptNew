/*/*****************************************Deck_Of_Cards_Using_Queue***************************************
@Description-To initialize deck of cards having suit ("Clubs", "Diamonds", "Hearts", "Spades") 
    & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace").
@I/P- Number of cards to be distributed and to Number Of Players
@Logic-Shuffle the cards using Random method and then distribute 9 Cards to 4 Players 
    and then insert into queue.
@Output-Print the Cards the received by the 4 Players by dequeue function of queue
@Aurhor-Sindooja Gajam
@Date-19/11/19
/*************************************************************************************************/

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