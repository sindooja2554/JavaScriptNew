var promise = new Promise(function(resolve,reject){
    const x = "sindhu";
    const y = "sindhu";
    if(x===y)
       resolve();
    else
       reject();

})

promise
.then(function(){
    console.log("Success");
})
.catch(function(){
    console.log("Error");
})