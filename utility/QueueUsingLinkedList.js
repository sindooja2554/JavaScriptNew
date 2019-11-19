class Node
{
    constructor(data)
    {
        this.data=data;
        this.next = null;
    }
}

class QueueUsingLinkedList
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
    enqueueData(data)
    {
        try
        {
            /*|| isNaN(data)==true) */ 
            if(data==undefined || data==null  )    throw 'Data cannot be undefined or null or string '
            //if(isNaN(cash));    throw 'Cash cannot be a string'
            //console.log(data);
            let node = new Node(data);
           
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
            //console.log(this.size)
            //console.log("Successfully Deposit.");
            this.display();
        }
        catch(e)
        {
            return e
        }

    }

    //Dequeue
    dequeueData()
    {
        //let node = this.front;
        if(this.isEmpty())
            console.log("EMPTY QUEUE");
        else
        {
            var temp = this.front.data;
            this.front=this.front.next;
        }
        //if(this.front===null)
            //this.back=null;
        this.size--;
        //console.log("Successful Withdraw.");*/
        //this.display();
        return temp;
    }
    
    //size
    queueSize()
    {
        //console.log(this.size);
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
            while(temp!=null)
            {
                tempArray.push(temp.data);
                temp = temp.next;
            }
            return tempArray.join('->');

        }
    }

}

module.exports={
    QueueUsingLinkedList
}