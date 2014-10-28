var app = require('./app');
var util = require('./util');
var tag = util.tag;
var port = 1337;

console.log(tag("starting app..."));

app.listen(port);

console.log(tag("server started, listening on port " + port));