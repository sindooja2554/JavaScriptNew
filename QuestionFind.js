const qf = require('./utility/utility');
var N = process.argv[2];
//console.log(N);
//console.log(process.argv.length);
if(process.argv.length<3)
    console.log("Please enter numbers from command line");
else
{
    var array = new Array(N);
    console.log("Please think a number between 0 to N-1");
    for(i=1;i<N;i++)
    {
        array[i]=i;
    //console.log(array[i]);
    }
    var l =1;
    var r = array.length;//Math.pow(2, N);
    //console.log("r"+r);
    var number =qf.FindNumber(array,l,r);
}