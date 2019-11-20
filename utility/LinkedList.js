var rdl = require('readline-sync');
class Node
{
    constructor()
    {
        this.data;
        this.next=null;
    }
}

class LinkedList
{
    constructor()
    {
        this.head=null;
        //this.size=0;
    }
    //Insert
    add(data)
    {
        try
        {
            if(data==undefined || data==null)    throw 'Element cannot be undefined'
            var node = new Node(); 
            let current;
            if(this.head===null)
            {
                this.head=node;
                node.data=data;
            } 
            else
            {
                current = this.head;
                while(current.next)
                {
                    current=current.next;
                }
                current.next=node;
                node.data=data;
            }
        }
        catch(e)
        {
            return e;
        }

    }

    //InsertAt
    insert(data,index)
    {
        try
        {
            if(data==null||data==undefined||index==null||index==undefined)   throw  'These fields cant be empty'
            var number = number;
            if(typeof(index)!=number)   throw  'Should be a number'
            var node = new Node();
            if(index===0)
            {
                node.next=head;
                this.head=node;
            }
            else
            {
                let current;
                current=this.head;
                let prev;
                let count=0;
                while(count<index)
                {
                    count++;
                    prev=current;
                    current=current.next;
                }
                node.next=current;
                prev.next=node;
                node.data=data;
            }
        }
        catch(e)
        {
            return e;
        }

    }

    //Insert at end
    append(data)
    {
        try
        {
            if(data==undefined || data==null)    throw 'Element cannot be undefined'
            var node = new Node();
            let current;
            //let prev;
            current=this.head;
            while(current.next!==null)
            {
                //prev=current;
                current=current.next;
            }
            current.next=node;
            //prev.next=node;
            node=current.next;
            node.data=data;
        }
        catch(e)
        {
            return e
        }
    }

    //search 
    search()
    {
        var search = rdl.question("Enter to search=");
        var found = this.isThere(search);
        console.log(found);
        if(found==true)
        {
            this.remove(search);
            this.print();
        }
        else
        {
            this.append(search);
            this.print();
        }
    }

    //Remove by index
    removeAt(index)
    {
        try
        {
            if(index == undefined || index == null)   throw  'Cannot be undefined or null'
            var number = number;
            if(typeof(index)!==number)    throw  'Should be a number'
            let current
            current=this.head;
            let count;     
            if(index===0)
            {
                current.next=this.head;
            }
            else
            {
                let current;
                let prev;
                let count=0;
                current=this.head;
                while(count!=index)
                {
                    count++;
                    prev=current;
                    current=current.next;
                }
                prev.next =current.next;          
            }
        }
        catch(e)
        {
            return e;
        }
    }

    //Remove by element
    remove(data)
    {
        try
        {
            if(data==undefined||data==null)   throw 'Cannot be undefined or null'
            let current;
            let prev=null;
            current=this.head;
            while(current!=null)
            {
                if(data==current.data)
                {   
                    if(prev==null)
                        this.head=current.next;
                    else
                        prev.next =current.next;
                }
                prev=current;
                current=current.next;
            }
        }
        catch(e)
        {
            return e;
        }
    }

    //search
    isThere(data)
    {
        try
        {
            if(data==undefined||data==null)   throw 'Cannot be undefined or null'
            let current;
            let found;
            found=false;
            let count=0;
            current=this.head;
            while(current!=null)
            {
                if(data.toLowerCase()==current.data.toLowerCase())
                {
                    found=true;
                    break;
                }
                current=current.next;
            }
            return found;
        }
        catch(e)
        {
            return e;
        }
    }
    print()
    {
        //console.log("print");
        let current=this.head;
        var string = "";
        while(current!==null)
        {

            string+='->'+current.data;
            current=current.next;
        }
        //console.log(string);
        return string;
    }
}

module.exports={
    LinkedList
}