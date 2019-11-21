function multiply(x,y)
{
    return x+y;
}

var multiplyBy = multiply.bind(this,2);
console.log(multiplyBy(5))
