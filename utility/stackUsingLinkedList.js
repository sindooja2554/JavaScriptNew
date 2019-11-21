class Node
{
    constructor(data)
    {
        this.data=data;
        this.next;
    }
}
class Stack
{
    constructor()
    {
        this.top=null;
    }

    //to check if empty
    isEmpty()
    {
        if(this.top===null)
            return true
        else
            return false
    }

    //to push elements
    pushElement(data)
    {
        var node = new Node(data);
        if(node==null)
        {
            //this.top=node;
            //node.data=data;
            //console.log(data);
            console.log("Stack Underflow");
            return
        }
        else
        {
            node.next=this.top;
            this.top = node; 
        }

    }

    //to pop elements
    popElement()
    {
        if(this.isEmpty())  throw 'Stack Underflow'

        if(this.top!==null)
        {
            //var topdata = this.top.data;
            //console.log("Inside"+topdata);
            this.top= this.top.next;
            //console.log(this.top);
            //return topdata;
        }
        else
            return

    }

    //display
    display()
    {
        var string = ""
        if(this.isEmpty())   throw "Stack Underflow"
        var current = this.top;
        while(current!=null)
        {
            string += current.data + " ";
            current= current.next;
        }
        console.log(string);
        //return string;
    }

    //reverse
    /*reverse()
    {
        let current = this.top;
        var string = new Array();
        while(current!==null)
        {
            string += current.data+" ";
            current=current.next;
            this.popElement();
        }
        console.log(string[1]);
    }*/

    peek() 
    { 
        return this.top.data; 
    } 

}
module.exports={
    Stack
}