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

module.exports.evenDoubler = evenDoubler;

module.exports.foo = "bar";