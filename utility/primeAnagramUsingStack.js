var utility = require('./BalancedEx');
var util = require('./PrimeNo2D');
var utl = new utility.Stack();
var u = new util.Prime2D();

module.exports={
    //to print prime anagram
    primeAnagramStack()
    {
        var primenumbers = u.primeNumber(1000);
        //console.log(primenumbers.length);
        //var array=[[]];
        var row=0,range=1000;
        //var k=0;
        var value=false;
          //for comparing two prime are anagram or not.
        for (let i = 0; i < primenumbers.length - 1; i++) 
        {
            for (let j = i + 1; j < primenumbers.length; j++) 
            {
                //check two primes angram or not
                var value=(u.isAnagram(primenumbers[i],primenumbers[j]))
                if(value==true){
                    if (primenumbers[i] <= range) 
                    {
                        //store the two anagram in array
                        if (primenumbers[j] <= range) 
                        {
                            utl.pushElement(primenumbers[i]);
                            utl.pushElement(primenumbers[j]);
                        }
                    } 
                }
        
            }
        }
        var string=new Array(); 
        string= utl.display();
        //console.log(string);
        //this.reverse(string);
    }
   /* reverse(string)
    {
        //var string = string;
        console.log(string.length);
        console.log(string[0]);
    }*/
        

}