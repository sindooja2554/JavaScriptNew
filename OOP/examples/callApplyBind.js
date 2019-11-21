var object = {num:2};

var addToThis=function(a,b,c)
{
    return this.num +a +b +c;
}
var bound=addToThis.bind(object);
var array = [1,2,3]

console.log("Using call="+addToThis.call(object,1,2,3));
console.log("Using apply="+addToThis.apply(object,array));
console.log("Using bind="+bound(1,2,3));
