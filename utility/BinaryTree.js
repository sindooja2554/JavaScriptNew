module.exports={
    binaryTree(node)
    {
        try
        {
            if(node==undefined||node==null)   throw  'Node cannot be undefined or null'
            if(typeof(node)!=number)         throw  'Node cannot be string'
            var number =( Math.floor(this.factorial(2*node))/(this.factorial(node+1)*this.factorial(node)));
            return number;
        }
        catch(e)
        {
            return e;
        }
    },
    factorial(n)
    {
        try
        {
            if(n==undefined||n==null)   throw  'Node cannot be undefined or null'
            var number = number;
            if(typeof(n)!=number)         throw  'Node cannot be string'
            factorial=1;
            for(let i=1;i<=n;i++)
            {
                factorial*=i ;
            }
            return factorial;
        }
        catch(e)
        {
            return e;
        }
    }
}