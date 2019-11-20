var ull=require('./utility/LinkedList');
var util = require('./utility/utility');
var rdl = require('readline-sync');
var ll = new ull.LinkedList();
var fs = require('fs');
var string=" ";
string = fs.readFileSync('UnOrdered.txt').toString();
console.log(string);
var res = string.split(" ");
var n = res.length;
var string =" ";
function search()
{
    var search = rdl.question("Enter to search=");
    var found = ll.isThere(search);
    if(found===true)
    {
        ll.remove(search);
        ll.print();
    }
    else
    {
        ll.append(search);
        ll.print();
    }
}
for(var i=0;i<n;i++)
{
    ll.add(res[i]);
}
ll.print();
do
{
    var choice;
    console.log("1.Add Element");
    console.log("2.InsertAt");
    console.log("3.Append(insert at last)");
    console.log('4.RemoveAt using index');
    console.log("5.Remove using element");
    console.log("6.Search");
    console.log("7.Print");
    console.log("8.Exit");
    choice = rdl.questionInt('Enter your choice');
    
    switch(choice)
    {
        case 1:
              //console.log("case1");

              console.log("Enter a word=");
              var data = util.inputStringRead();
              console.log(data);
              ll.add(data);
              break;
        case 2:
              var data = rdl.question("Enter a word=");
              var index=rdl.question("Enter position=");
              ll.insert(data,index);
              break;

        case 3:
              var data =rdl.question("Enter a word=");
              ll.append(data);
              break;
        case 4:
              var index = rdl.questionInt("Enter position=");
              ll.removeAt(index);
              break;
        case 5:
              var data =rdl.question("Enter a word=");
              ll.remove();
              break;
        case 6:
              search();
              break;
        case 7:
              var string = ll.print();
              console.log(string);
              fs.writeFileSync('test.txt',string,'utf-8');
              console.log("writing of file done");

              break;
        case 8:
              return;
       default:
             console.log("Wrong Choice");
             break;
    }
    //console.log("switch");
}while(choice);
