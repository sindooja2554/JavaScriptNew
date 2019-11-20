//var eh = require('')

var array = [];
var n = array.length;
try
{
    if(n>0)
    {
        console.log("Its working fine");
    }
    else
        throw new Error("Length should not be Zero");
}
catch(e)
{
    console.log(e);
}