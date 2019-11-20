class Deque
{
    constructor()
    {
        this.front=-1;
        this.rear=-1;
    }

    //to check if empty
    isEmpty()
    {
        if(this.front===-1 && this.rear===-1)
            return true
        else
            return false
    }

    //to check if full
    isFull(n)
    {
        if((this.front===0 && this.rear===n-1)|| (this.front == this.rear+1))
            return true
        else
            return false
    }

    //add element to front
    addFront(dequeArray,data,n)
    {
        console.log(this.isFull);
        if(this.isFull())       throw 'OverFlow'
        if(this.isEmpty())
        {
            this.front=this.rear=0;
            dequeArray[this.front]=data;
        }
        else if(this.front==n-1)
        {
            this.front=0;
            dequeArray[this.front]=data;
        }
        else
        {
            this.front--;
            dequeArray[this.front]=data;
        }
    }

    //to remove from front 
    removeFront(n)
    {
        if(this.isEmpty())  throw 'NoElementPresent'
        if(this.front==n-1)
        {
            this.front=0;
        }
        else if(this.front==this.rear)
        {
            this.front=this.rear=-1;
        }
        else
        {
            this.front++;
        }
    }

    //adding element to rear
    addRear(dequeArray,data,n)
    {
        if(this.isFull())   throw 'Overflow'
        if(this.isEmpty())
        {
            this.front=this.rear=0
            dequeArray[this.rear]=data;
        }
        else if(this.rear==n-1)
        {
            this.rear=0;
            dequeArray[this.rear]=data;
        }
        else
        {
            this.rear++;
            dequeArray[this.rear]=data;
        }
        //this.palindromeChecker(dequeArray,n);
    }
    //remove from the rear
    removeRear(n)
    {
        
        if(this.isEmpty())  throw 'NoElementPresent'
        if(this.front==this.rear)
        {
            this.rear=this.front=-1;
        }
        else if(this.rear==0)
        {
            this.rear=n-1;
        }
        else
        {
            this.rear--;
        }
    }

    //Display
    display(dequeArray,n)
    {
        //console.log(this.isEmpty());
        if(this.isEmpty())  throw 'NoElementPresent'
        var i = this.front;
        while(i!=this.rear)
        {
            console.log(dequeArray[i]);
            i=(i+1)%n;
        }
        console.log(dequeArray[this.rear]);
    }

    //Palindrome checker
    palindromeChecker(dequeArray,n)
    {
        var i=this.front;
        var j=this.rear;
        var check=false;
        console.log(dequeArray);
        while(i<j)
        {
            if(dequeArray[i]==dequeArray[j])
            {
                check=true;
                break;
            }
            i++;
            j--;
        }
        if(check==true)
            return true;
        else
            return false;
    }
}

module.exports={
    Deque
}