var util = require('./utility');

class Node
{
    constructor(cash)
    {
        this.cash=cash;
        this.next = null;
    }
}

class Queue
{
    constructor(){
        this.front = null;
        this.back = null;
        this.size=0
    }

    //tocheck if there is no node
    isEmpty()
    {
        if(this.front===null)
            return true;
        else
            return false;
    }

    //to enqueue
    enqueue(data)
    {
        try
        {
            if(data==undefined || data==null || isNaN(data)==true)      throw 'Data cannot be undefined or null or string '
            //if(isNaN(cash));    throw 'Cash cannot be a string'

            let node = new Node(cash);
            if(this.isEmpty())
            {
                this.front=node;
                this.back=node;
            }
            else
            {
                this.back.next = node;
                this.back=node;
            }
            this.size++;
            //console.log("Successfully Deposit.");
            this.display();
        }
        catch(e)
        {
            return e
        }

    }

    //Dequeue
    dequeue()
    {
        //let node = this.front;
        if(this.isEmpty())
            console.log("EMPTY QUEUE");
        else
        {
            this.front=this.front.next;
        }
        /*if(this.front===null)
            this.back=null;
        this.size--;*/
        console.log("Successful Withdraw.");
        this.display();
    }
    
    //size
    size()
    {
        console.log(this.size);
        return this.size;
    }

    //To Print
    display()
    {
        if(this.isEmpty())
        {
            console.log("EMPTY QUEUE");
        }
        else
        {
            let tempArray = [];
            let temp =this.front;
            while(temp)
            {
                tempArray.push(temp.cash);
                temp = temp.next;
            }
            return tempArray.join(',');

        }
    }

    bankCashCounter(accBalance)
    {
        //Queue
        try
        {
            if(accBalance==undefined || accBalance==null || isNaN(accBalance)==true)  throw 'Data cannot be undefined or null or string '
            console.log("Enter the number of person in queue:");
            var people = util.inputIntegerRead();
    
            //Adding people in the queue
            for (let i = 0; i <= people; i++) {
                this.enqueue(i);
            }
    
    
            while (people > 0) {
                //Switch case to deposit or withdraw amount 	
                var amount = 0;
                console.log("Enter 1 to deposit amount: \nEnter 2 to withdraw amount:")
                let ch = util.inputIntegerRead();
                console.log(ch);
                switch (ch) {
                    case 1:
    
                        //To deposit amount
                        console.log("Enter the money you want to deposit:")
                        var depo = util.inputIntegerRead();
                        var deposit = (Number(depo));
                        if (deposit < 0) {
                            console.log("Enter valid amount to deposit");
                        }
                        else {
                            //total balance after deposit
                            accBalance = accBalance + deposit;
                            console.log("Updated account balance is: " + accBalance);
                        }
                        console.log("person deposited " + deposit);
                        people--;
                        break;
                    case 2:
    
                        //To withdraw amount
                        console.log("Enter the money you want to withdraw:");
                        var withd = util.inputIntegerRead();
                        var withdraw = (Number(withd));
                        if (withdraw < 0) {
                            console.log("Enter valid amount to withdraw");
                        }
                        else if (withdraw > accBalance) {
                            console.log("Check account balance and withdraw valid ammount");
                        }
                        else {
                            //total balance after withdrawal
                            accBalance = accBalance - withdraw;
                            console.log("Updated account balance is: " + accBalance);
                        }
                        console.log("person withdrew " + withdraw);
                        people--;
                        break;
                    default:
                        console.log("Enter valid choice to deposit or withdraw ");
                }
            }
            console.log("There are no people in the queue");
        }
        catch(e)
        {
            return e;
        }

    }
}

module.exports={
    Queue
}
