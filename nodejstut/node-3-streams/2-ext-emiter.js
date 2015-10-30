var Resource = require('./resource');

var r = new Resource(7);

r.on('start', function () {
  console.log("startt");
});

r.on('data', function (d) {
    console.log("data: "+d);
});

r.on('end', function (t) {
    console.log("finish "+ t);
});