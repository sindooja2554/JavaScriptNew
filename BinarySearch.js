const readline = require('readline-sync')
const bs = require('./utility/utility');
var n = readline.questionInt("Enter number of elements=");
    var arr = new Array(n);
    for(var i=0;i<n;i++)
    {
        arr[i]=readline.question("Enter element=");
    }
    for(var i=0; i<n; i++)
    {
        for(var j=0; j<n-1-i; j++)
        {
            if(arr[j].localeCompare(arr[j+1])===1)
            {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }  
    console.log(arr.join(" "));
    var l=0;
    var r=n-1;
    var x = readline.question("Enter string to search=");
    var index;
    bs.BinarySearch(arr, l, r,x);
    if(true)
    {
        console.log("Element found");
    }
    else
        console.log("Element not found");
