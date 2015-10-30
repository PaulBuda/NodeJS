var maxTime = 1000;

var evenDoubler = function(v, callback)
{
    var time = Math.floor(Math.random()*maxTime);
    setTimeout(function(){
        if(v%2==0)
        v*=2;
        else
        return callback(new Error("Odd input"));
        callback(null,v,Number(time));
    },time);
};

var count = 0;

for(var i = 0 ; i < 10 ; ++i )
{
    console.log("call for "+i);
    evenDoubler(i,function(err, results, time)
    {
        if (err)
        {
            console.log("Error: " + err.message);
        }
        else
        {
            console.log("the results are: "+ results + " (" + time + " ms)");
        }
        if( ++count === 10 )
            console.log("Done");
    });
}


console.log("----");