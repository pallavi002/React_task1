function setInterval(callback){
    var x=0;
    var intervalId= window.setInterval(function(){
        console.log("React is best");
        callback();
        if(++x===3){
            window.clearInterval(intervalId);
        }
    },1000,3);
}