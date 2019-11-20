class Prime2D
{
    //creating twoD array
    twoDArray()
    {
        try
        {
            var prime = this.primeNumber(1000);
            //console.log(prime.length);
            if(prime.length===0)   throw 'Array is empty'

            var arrPrime = [["000-100 "],["100-200 "],["200-300 "],["300-400 "],["400-500 "],["500-600 "],["600-700 "],["700-800 "],["800-900 "],["900-1000 "]];
            var range = 100, i = 0, j = 1;
            for(let p = 0;p < prime.length-1; p++)
            {
                if (prime[p] < range)
                {
                    arrPrime[i][j] = prime[p];
                    j++;
                }
                else
                {
                    j = 1;
                    i=i+1;
                    range = range + 100;
                    arrPrime[i][j] = prime[p];
                }
            }
            return arrPrime;
        }
        catch(e)
        {
            return e
        }

    }
    

    primeNumber(n)
    {
        try
        {
            if(n==undefined||n==null)  throw 'Cannot be undefined or null'
            if(isNaN(n))  throw 'Please enter valid input'
            var array = new Array();
            var position=0;
            var isPrime;
            for(var i=2;i<n;i++)
            {
                isPrime = true;
                for(let j=2;j<i/2;j++)
                {
                    if((i%j)===0)
                    {
                        isPrime=false;
                        break;
                    }
                }
                if(isPrime===true)
                {
                    //console.log(pos);
                    array[position]=i;
                    position++;
                }
            }
            return array;    //return array
        }
        catch(e)
        {
            return e;
        }
    }

    //anagram
    isAnagram(string1,string2)
    {
        try
        {
            if(string1==undefined||string2==undefined||string1==null||string2==null)  throw  'String cannot be undefined or null'
            
            var count=0;
            var string1=string1.toString().split("");
            string1.sort();
            var string2=string2.toString().split("");
            string2.sort();
            
            var l1=string1.length;
            //console.log(l1);
            if(string1.length!=string2.length){
                return false;
            }
    
            else{
                for(var i=0;i<l1;i++){
                    if (string1[i] == string2[i]) {
                        count++;
                    }
                }
                if (count==string1.length) {
                    return true;
                  //console.log("string are anagram");
                }
                else {
                  return false;
                    //console.log("string are not anagram");
                }
            }
        }
        catch(e)
        {
            return e
        }


    }

    //sort
    sort(string)
    {
        try
        {
            if(string==undefined||string==null)  throw 'String cannot be undefined or null'
            var array=string;
            for(var i=0;i<array.length-1;i++){
                for(var j=i+1;i<array.length;j++){
                    if(string[i]<string[j]){
                        var temp=string[i];
                        string[i]=string[j];
                        string[j]=temp;
                    }
                }
            }
            return array;
        }
        catch(e)
        {
            return e
        }
    }

    //to print prime anagram
    primeAnagram()
    {
        var primenumbers = this.primeNumber(1000);
        //console.log(primenumbers.length);
        var array=[[]];
        var row=0,range=100;
        var k=0;
        var value=false;
          //for comparing two prime are anagram or not.
        for (let i = 0; i < primenumbers.length - 1; i++) 
        {
            for (let j = i + 1; j < primenumbers.length; j++) 
            {
                //check two primes angram or not
                var value=(this.isAnagram(primenumbers[i],primenumbers[j]))
                if(value==true){
                    if (primenumbers[i] <= range) 
                    {
                        //store the two anagram in array
                        if (primenumbers[j] <= range) 
                        {
                           array[k].push(primenumbers[i]);
                            array[k].push(primenumbers[j]);
                        }
                    } 
                    else 
                    {
                        range = range + 100;
                        k++;
                        array[k] = [];
                        if (primenumbers[j] <= range) 
                        {
                            array[k].push(primenumbers[i]);
                            array[k].push(primenumbers[j]);
                        }
                    }
                }
        
            }
        }
        console.log(array);
    }
}

module.exports={
    Prime2D
}