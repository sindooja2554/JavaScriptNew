var firstArray = [10,70,90,60,30];
var secondArray = [45,65,95,75,25];

console.log("Array before merging="+firstArray);
firstArray = firstArray.concat(secondArray);   //merge function
console.log("Array after merging="+firstArray);

console.log("Array before spliting="+firstArray); 
var splitArray = firstArray.toString();
splitArray=splitArray.split(" ");   //split the elements by space
console.log("Array after spliting="+splitArray); 

console.log("Array before splice="+secondArray);
var spliceArray=secondArray.splice(2,1)  //first argument is thw index and the second is the number of element to be deleted
console.log("Array after splice="+spliceArray);
