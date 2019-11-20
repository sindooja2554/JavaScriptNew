const ms = require('./utility/utility');
const rd = require('readline-sync');
//ms.MergeSort();
var n = rd.questionInt("Enter array size=");
    var merge = new Array(n);
    for(var i=0;i<n;i++)
    {
        merge[i]=rd.question("enter element=");
    }
    console.log("String elements before sorting  "+merge.join(" "));
    var low = 0;
    var high = (merge.length-1);
    ms.Divide(merge, low, high);