var utility = require('./utility/QueueBank');

var queue = new utility.Queue();

//function queue()
///{
      /*do
      {
          var choice;
          console.log("1.Deposit");
          console.log("2.Withdraw");
          console.log("3.Exit");
          console.log('Enter your choice=');
          choice = util.inputIntegerRead();
          switch(choice)
          {
              case 1:
                    //console.log("case1");
                    console.log("Enter Ammount to Deposit=");
                    queue.enqueue(util.inputIntegerRead());
                    break;
              case 2:
                    console.log("Enter Ammount to Withdraw=");
                    queue.dequeue(util.inputIntegerRead());
                    if(queue.isEmpty())
                    {
                        console.log("No Sufficient Balance");
                    }
                    else
                    {
                      console.log("Balance is ");
                      var array = new Array();
                      array=queue.display();
                      console.log(array);
                    }
                    break;
              case 3:
                    return;
              default:
                    console.log("Wrong Choice");
                    break;
          }
          //console.log("switch");
      }while(choice);*/
//}
//queue();

console.log("#Welcome to Bank#");
        
//Account balance before deposit or withdrawal
var accBalance = 15000;
console.log("The account balance is: " + accBalance);
queue.bankCashCounter(accBalance);

