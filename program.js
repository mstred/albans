var htmlBuilder = require("./htmlBuilder.js");
var http = require("http");
var server = http.createServer();

server.addListener("request", function (request, response) {
	console.log("request event");
	
	var htmlContent = htmlBuilder.buildHtmlContent("Hello World");
	response.writeHead(200, {
		"Content-Length": htmlContent.length,
  		"Content-Type": "text/html"
	});
	response.write(htmlContent, "utf8");
	response.end();
});

server.addListener("connection", function (socket) {
	console.log("connection event");
});

server.addListener("close", function (socket) {
	console.log("close event");
});

server.addListener("checkContinue", function (request, response) {
	console.log("checkContinue event");
});

server.addListener("connect", function (request, socket, head) {
	console.log("connect event");
});

server.addListener("upgrade", function (request, socket, head) {
	console.log("upgrade event");
});

server.addListener("clientError", function (exception, socket) {
	console.log("clientError event");
});

server.listen(1337);
