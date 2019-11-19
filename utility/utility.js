var methods = {}
const readline = require('readline-sync');
var fs = require('fs');
//var w = require('');
methods.inputIntegerRead = function(){
  let value =  readline.questionInt("");
  return value;
}
methods.inputStringRead = function(){
    try{
        var value ;
        value = readline.question("");
        var content = /^[a-zA-Z]+$/;
        //console.log(content.test(value));
        if(!content.test(value))    
        {
            console.log('Should be a character string');
            methods.inputStringRead();
        }
        else
        {
            return value;
        }

    }
    catch(e)
    {
        return e;
    }
}

methods.writeFile= function(fileName,data)
{
    fs.writeFileSync(fileName,JSON.stringify(data));
} 

methods.readFile= function(fileName)
{
    var content = fs.readFileSync(fileName);
    return content
}

methods.hello = function()
{
    console.log("Hello World");
}
//module.exports={
//leap year
methods.LeapYear = function(year)
{
    try
    {
        var a = Number(year);
        if(Number.isInteger(a) !== true) throw "The Year should be a number"
        if(year.length != 4) throw 'The Year should be 4 Digit number'
      
                if(year%4===0)
                    return true;
                else
                    return false;
                     
    }
    catch(e)
    {
       return e; 
    }
}


//string replace
methods.SReplace = function (username)
{
    try
    {
        var a = isNaN(username);
//
//console.log(a.localeCompare('true'));
        if(a === true)
        {
            if(username.length>3)
            {
    
                    var pr = "Hello <<username>>, How are you?";
                    var string = pr.replace('<<username>>',username);
                    return string;
            }
            else
            throw new Error('Username should greater than 3');    
        }
        else
        throw new Error('Username should be character string');

    }
    catch(e)
    {
        console.log(e);
    }
}

//sum of elements is zero

methods.SumOfElementsIsZero = function (arr1 , n)
{
    try
    {
        if(Array.isArray(arr1))
        {
            var i,j,k;
            for(i=0;i<n-2;i++)
            {
                for(j=i+1;j<n-1;j++)
                {
                    for(k=j+1;k<n;k++)
                    {
                        var sum1 = arr1[i] + arr1[j] + arr1[k];
                        if(sum1===0)
                        {
                            console.log(+arr1[i], "+" +arr1[j], "+" +arr1[k], "=" +sum1);
                        }
                        else
                        {
                            console.log(+arr1[i],"+" +arr1[j], "+" +arr1[k], "=" +sum1);
                        }
                    }
                }
            }
        }
        else
        {
            throw new Error('Array cannot be empty');
        }
    }
    catch(e)
    {
        console.log(e);
    }

}

//Flipcoin
methods.FlipCoin = function (n)
{

    //console.log(n);
    //var p = ;
    try
    {
        if(Number.isInteger(n))
        {
            var count = 0;  //for heads
            var num = 0;
            if(n>0)
            {
                for(var i =0;i<n;i++)
                {
                    var ran = Math.random();
                    if(ran<0.5)
                    {
                        count++;
                        console.log('H');
                        //return count
                    }  
                    else
                    {
                        num++;
                        console.log('T');
                        //return num
                    }                      
                }
        
                var HeadPercent = (count/n)*100;
                return HeadPercent
            }
            else
            {
                throw new Error("Number of times should be greater than 0");
            }

        }
        else
        {
            throw new Error("It should be a number");
        }
    }
    catch(e)
    {
        console.log(e);
    }
}


//powerOfTwo
methods.PowerOfTwo = function (number)
{
    try
    {
        if(process.argv.length>=3)
        {
            var number = (Number(number));
            if(Number.isInteger(number))
            {
                if(number>0)
                {
                    if(number<31)
                    {
                        var pow = 1;
                        var i = 1;
                        while(i<=number)
                        {
                            pow = 2 * pow;
                            i=i+1;
                        }
                        return pow
                    }
                    else
                    {
                        throw new Error('It should be less than 31');
                    }
                }
                else
                {
                    throw new Error('It should be greater than 0');
                }
            }
            else
            {
                throw new Error('It should be a number');
            }
        }
        else
        {
            throw new Error("Please pass value through command line");
        }
    }
    catch(e)
    {
        console.log(e);
    }

}

//HarmonicNumber

methods.HarmonicNumber = function(n)
{
    try
    {
        if(process.argv.length>=3)
        {
            var n= (Number(n));
            if(Number.isInteger(n))
            {
                if(n>0)
                {
                    var i = 1;
                    var m=0;
                    while(i<=n)
                    {
                        var j = 1/i;
                        m = m + j;
                        i = i+1;
                    }
                    m = Math.round(m);
                    return m
                }
                else
                {
                    throw new Error('It should be greater than 0');
                }

            }
            else
            {
                throw new Error('It should be number');
            }
        }
        else
        {
            throw new Error("Please pass value through command line");
        }
    }
    catch(e)
    {
        console.log(e);
    }
}

//distance
methods.Distance = function(x,y)
{
    try
    {       
        if(process.argv.length>3)
        {
            var x= (Number(x));
            var y= (Number(y));
            if(Number.isInteger(x) && Number.isInteger(y))
            {
                var x = Math.pow(x,2);
                var y = Math.pow(y,2);
                var z = x+y;
                var distance = Math.sqrt(z);
                return distance
            }
            else
            {
                throw new Error('x and y should be Number');
            }
        }
        else
        {
            throw new Error("Please enter numbers from command line");
        }
    }
    catch(e)
    {
        console.log(e);
    }
}

//WindChill
methods.WindChill = function (t,v)
{
    try
    {
        if(process.argv.length>3)
        {
            var t= (Number(t));
            var v= (Number(v));
            if(Number.isInteger(t) && Number.isInteger(v))
            {
                if(t<=50) 
                {
                    if(v<120 && v>=3)
                    {
                        var a = 0.6215 * t;
                        var b = 0.4275 * v;
                        var c = Math.pow(v,0.16);
                        var d = (b-35.75)*c;
                        var windchill = 35.74 + a + d;
                        return windchill
                    }
                    else
                    {
                        throw new Error('speed should be greater than 3 and less than 120');
                    }
                }
                else
                {
                    throw new Error("The Temperature should be less than 50");
                }
            }
            else
            {
                throw new Error('It should not be string');
            }
        }
        else
        {
            throw new Error("Please enter numbers from command line");
        }
    }
    catch(e)
    {
        console.log(e);
    }
}

//Quadratic
methods.Quadratic = function (a,b,c,delta)
{
    try
    {
        var delta = Number(delta);
        if(Number.isInteger(delta))
        {
            if(a!==0 && b!==0 && c!==0)
            {
                if(delta>0)
                {
                    console.log("Roots are Real and Unequal");
                    var srt = Math.sqrt(delta);
                    var x1=0,x2=0;
                    x1 = ((-b)+srt)/(2*a);
                    x2 = ((-b)-srt)/(2*a);
                    console.log("Two roots are...");
                    console.log("x1 = "+x1 ,"x2 = "+x2);
                }
                else if(delta<0)
                    console.log("Roots are Imaginary");
                else
                {
                    console.log("Roots are real")
                    var r1,r2;
                    r1=(-b)/2*a;
                    r2=(-b)/2*a;
                    console.log("r1="+r1,"r2="+r2);
                }  
            }
            else
            {
                throw new Error('Number should b greater than 0 to form quadratic equation');
            }
        }
        else
        {
            throw new Error('It should not be string');
        }
    
    }
    catch(e)
    {
        console.log(e);
    }

}

//binarySearch
methods.BinarySearch = function(arr, x)
{
    try
    {
        var l = 0;
        var r = arr.length;
        if(Array.isArray(arr)!=true)
        {
            //console.log(Array.isArray(arr));
            if(r>=l)
            {
                var mid = Math.floor((l + r)/2);
                if(arr[mid]===x)
                {      
                    console.log("Index= " +mid);
                    return true; 
                }
                else if(arr[mid].localeCompare(x)>0)
                {
                    methods.BinarySearch(arr, l, mid-1,x);
                }
                else
                {
                    methods.BinarySearch(arr, mid+1, r, x);
                }
            }
            else
            {
                console.log("Element not found");
                return false
            }
        }
        else
        {
            throw new Error("Please enter element in array");
        }

    }
    catch(e)
    {
        console.log(e);
    }

}

//Bubble Sort
methods.BubbleSort = function(array)
{
    try
    {
        //if(array.length!==0)
        //{
            var n = array.length;
            //console.log(n);
            var temp=0;
            for(var i=0; i<n; i++)
            {
                for(var j=0; j<n; j++)
                {
                    if(array[j]>array[j+1])
                    {
                        temp = array[j];
                        array[j] = array[j+1];
                        array[j+1] = temp;
                    }
                }
            }
            return array
        //}
        /*else
        {
            throw new Error('Please enter element in array');
        }*/
    }
    catch(e)
    {
        console.log(e);
    }

}

//string anagram
methods.Anagram = function(str1,str2)
{
    try
    {
        var check = false;
        var n1 = str1.length;
        var n2 = str2.length;
        if(n1==n2)
        {
            for(var i=0;i<n1;i++)
            {
                for(var j=0;j<n1;j++)
                {
                    if(str1.charAt(i)==str2.charAt(j))
                    {
                        check = true;
                    }
                    break;
                }
                if(check != true)
                {
                    check = false;
                }
                break;
            }
            if(check == true)
                return true;
            else
                return false;
        }
        else 
            throw new Error('Lengths of the two strings should be equal to be Anagram');
    }
    catch(e)
    {
        console.log(e);
    }

}

//PrimeNoRange
methods.RangeOfPrime = function(primeNumbers)
{
    //var start = readline.question("Enter the start index to find Prime Number in range=");
    //var last = readline.question("Enter last index=");

    for(var i=1;i<=1000;i++)
    {
        var j = 0;
        var count = 0;
        if(i==1)
        {
            console.log("1 is neither prime nor composite");
        }
        else
        {
            for(var j =i; j>=1; j--)
            {
                if(i%j===0)
                {
                    count++;
                    break;
                }
                
            }
            if(count === 2)
            {
                primeNumbers= primeNumbers + j + " ";
            }
            console.log(primeNumbers);  
        }
    }
}

//InsertionSort
methods.InsertionSort = function(insertion,m)
{
    try
    {
        if(Array.isArray(insertion))
        {
            for(var i=0;i<m;i++)
            {
                insertion[i]=readline.question("enter element=");
            }
            console.log("String elements before sorting  "+insertion.join(" "));
            //insertion logic
            var temp,j;
            for(var i=1;i<m;i++)
            {
                temp = insertion[i];
                j=i-1;
                while(j>=0 && insertion[j].localeCompare(temp)>0)
                {
                    insertion[j+1]=insertion[j];
                    j=j-1;
                }        
                insertion[j+1]=temp; 
            }
            console.log("sorted array " +insertion.join(" "));
        }
        else{
            throw new Error('Please enter element in array');
        }
    }
    catch(e)
    {
        console.log(e);
    }

}

//2dArray
methods.TwoDArray = function(myArray,m,n)
{
    try
    {
        if(Array.isArray(myArray))
        {
            for(var i=0;i<m;i++)
            {
                myArray[i] = new Array(n)
            }
            for(var i=0;i<m;i++)
            {
                for(var j=0;j<n;j++)
                {
                    myArray[i][j] =readline.question("Enter Element=");
                }
            }
            return myArray
        }
        else
        {
        throw new Error('Please enter element in array');
        }
    }
    catch(e)
    {
        console.log(e);
    }
} 

//merge sort
/*
methods.Divide= function(merge, low, high)
{
    if(low<high)
    {
        var m = (low + (high-low))/2;
        methods.Divide(merge,low,m);
        methods.Divide(merge,m+1,high);
        methods.Merge(merge,low,m,high);
    }

}

methods.Merge(merge,low,m,high)
{
    var tempArray = new Array(100);
    for(var i=l;i<h;i++)
    {
        tempArray[i] = merge[i];
    }
    var i = low;
    var j = m+1;
    var k = low;
    while(i<=j && i<=high)
    {
        if(tempArray[i].localeCompare(tempArray[j])<0)
        {
            merge[k]=tempArray[i];
            i++;
        }
        else
        {
            merge[k]=tempArray[j]
            j++;
        }
    }
}*/

//Question to find your number
methods.FindNumber = function(array,l,r)
{
    try
    {
        if(Array.isArray(array))
        {
            if(r>=l)
            {
                var mid = Math.floor((l + r)/2);
                //console.log("Please enter only true or false");
                console.log("Is number less than or equal to ..(if equal enter true.. else false)"+mid)
        
                var ans=readline.question();
                if(l===r)
                    console.log("Your guessed number is="+mid);
                else if(ans.localeCompare('true')===0 || ans.localeCompare('True')===0)
                {
                    methods.FindNumber(array,l,mid);
                }
                else if(ans.localeCompare('false')===0 || ans.localeCompare('False')===0)
                {
                    methods.FindNumber(array,mid+1,r);
                }
            }
        }
        else
        {
            throw new Error('Please enter element in array');
        }
    }
    catch(e)
    {
        console.log(e);
    }
}

/*methods.Gambler = function(stake,goal,num)
{
    console.log(num);
    var bet=0;
    var won=0;
    for(var i=0;i<num;i++)
    {
        console.log('for');
        var tempstake = stake;
        while(tempstake<goal && tempstake>0)
        {
            bet++;
            var b = Math.round(1+Math.random()*8);
            //console.log(b);
            if(b>4)
                tempstake++;
            else  
                tempstake--;
        }
        if(tempstake===goal)
        {
            won++;
            console.log('Wins');
        }
        else
        {
            console.log('Loss');
        }
    }
    var wonPer = won/num;
    console.log(wonPer);
    var avgbet= bet/num;
    console.log(avgbet);
}*/

methods.Regex = function(para,name,fullname,mob)
{
    var a = /^[a-zA-Z]+$/;
    var c = /^([+]\d{2}[ ])?\d{10}$/;
    var check = a.test(name);
    if(check===true)
    {
        para = para.replace('<<name>>',name);
    }
    var b = /^[A-Za-z]+[ ]([\ A-Za-z]+[ ])*/;
    var chck = b.test(fullname);
    if(chck===true)
    {
        para = para.replace('<<fullname>>',fullname);
    }
    var test =c.test(mob);
    if(test=== true)
    {
        para = para.replace('91-xxxxxxxxxx',mob);
    }
    console.log(para);
}
module.exports= methods 

