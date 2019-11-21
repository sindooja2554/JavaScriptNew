//iife example
(function() {
    var x = 20;
    var y = 20;
    var answer = x + y;
    console.log("iife example output="+answer);
    }
)();

//closure

function add(value)
{
    function addTwo(value2)
    {
        return value+value2;
    }
    return addTwo;
}

var addNumbers = add(5);
console.log(addNumbers(3));