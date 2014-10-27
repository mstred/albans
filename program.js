var htmlBuilder = require("./htmlBuilder.js");
var express = require('express');
var server = express();

server.get("/", function (request, response) {
	console.log("request event");

	var htmlContent = htmlBuilder.buildHtmlContent("Hello World");
	response.writeHead(200, {
	    "Content-Length": htmlContent.length,
	    "Content-Type": "text/html"
	});
	response.write(htmlContent, "utf8");
	response.end();
});

server.listen(1337);
