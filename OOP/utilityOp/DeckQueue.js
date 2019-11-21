var utility = require('../../utility/QueueUsingLinkedList');
var util = new utility.QueueUsingLinkedList();
var utl = require('./DeckOfCards');
var ul= new utl.shuffle();
class DeckQueue
{
    cardsQueue(noOfPlayers)
    {
        try
        {
            if(noOfPlayers==undefined||noOfPlayers==null)   throw 'Cannot be undefined or null'
            if(noOfPlayers==" ")    throw 'Cannot be empty'
            if(isNaN(noOfPlayers))     throw  'Should be a number'
            var deckOfCards=ul.cards();
            //loop to read elements of deckofcards array
            for(let i=0;i<deckOfCards.length;i++)
            {
                //to push or to enqueue elements to queue
                util.enqueueData(deckOfCards[i]);
            }
            
            //loop to distribute cards to number of players
            for(let i=1;i<=noOfPlayers;i++)
            {
                var k=0;
                console.log(`Player ${i} have:[`);
                for(let j=0;j<Math.floor(deckOfCards.length/noOfPlayers);j++)
                {
                    //to distribute cards to number of players
                    console.log(util.dequeueData());
                    k++;
                }
                console.log(']');
            }
        }
        catch(e)
        {
            return e
        }
    } 
    
}


module.exports={
    DeckQueue
}
