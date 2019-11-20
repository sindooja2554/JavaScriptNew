var util=require('./utility/utility');
var utility = require('./utility/LinkedList');
var utl = require('./utility/OrdList');
var u=new utility.LinkedList();
var ut=new utl.OrderLinkedList();
var rdl = require('readline-sync');
var fs = require('fs');
function orderedList()
{
    var string =" ";
    string= fs.readFileSync('orderlist.txt').toString();
    var result=[];
    result=string.split(" ");
    var array= util.BubbleSort(result);
    console.log(array);
    for(var i=0;i<array.length;i++)
    {
        ut.add(array[i]);
    }
   // ut.search();
   // var array=ut.print();
   // console.log(array);
 //   fs.writeFileSync('orderlist.txt',array,'utf-8');
  //  console.log("Writing Done");

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
              u.insert(data,index);
              break;

        case 3:
              var data =rdl.question("Enter a word=");
              ut.append(data);
              break;
        case 4:
              var index = rdl.questionInt("Enter position=");
              ut.removeAt(index);
              break;
        case 5:
              var data =rdl.question("Enter a word=");
              ut.remove();
              break;
        case 6:
              ut.search();
              break;
        case 7:
              var string = ut.print();
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

}

orderedList();

