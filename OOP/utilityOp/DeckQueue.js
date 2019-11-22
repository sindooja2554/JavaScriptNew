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

            //creating 2-D array
            var player=new Array();            
            //loop to distribute cards to number of players
            for(let i=0;i<noOfPlayers;i++)
            {
                var k=0;
                player[i]=new Array();
                //console.log(`Player ${i} have:[`);
                for(let j=0;j<Math.floor(deckOfCards.length/noOfPlayers);j++)
                {

                    //to distribute cards to number of players
                    player[i][j]=util.dequeueData();
                    k++;
                }
                //console.log(']');
            }
            console.log(player);
            //var array=this.split(player);
            //console.log(array);
            this.sortCardOfPlayers(player);
        }
        catch(e)
        {
            return e
        }
    }

    //split
   /* split(player)
    {
        var array= new Array();
        for(var i=0;i<player.length;i++)
        {
            for(var j=0;j<player[i].length;j++)
            {
                array[j]=player[i][j].charAt(2);
            }
            return array
        }

   
    }*/
    
    sortCardOfPlayers(player)
    {
       // console.log("this fun="+array);
        console.log(player.length);
        var temp;
        var Jack = 11;
        var Queen = 12;
        var King = 13;
        var Ace = 14;
        for(var i=0;i<player.length;i++)
        {
            for(var j=0;j<player[i].length-1;j++)
            {
                console.log('i='+player[i][j]);
                console.log('j='+player[i][j+1]);
                //console.log('j+1='+(j+1))
                if(player[i][j].charAt(2)<player[i][j+1].charAt(2))
                {
                    temp = player[i][j];
                    //console.log('temp'+temp)
                    player[i][j] = player[i][j+1];
                    player[i][j+1] = temp;                    
                }
            }
        }
        console.log(player);
        /*for(i=0;i<array.length;i++)
        {
            console.log(i);
            for(j=1;j<array.length;j++)
            {
                console.log(array[i]);
                console.log(array[j]);
                if(array[i]>array[j])
                {
                    temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }*/
        console.log("players="+array);
    }

}


module.exports={
    DeckQueue
}
