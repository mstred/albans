var express = require('express');
var router = express.Router();

/* Constants */
var OK_HTTP_STATUS_CODE = 200;
var CREATED_HTTP_STATUS_CODE = 201;
var NO_CONTENT_HTTP_STATUS_CODE = 204;

/* Get User */
router.get('/users', function(request, response) {
	handleJsonResponse(
		response, 
		OK_HTTP_STATUS_CODE, 
		"GET");
});

/* Create User */
router.post('/users', function(request, response) {
	handleJsonResponse(
		response, 
		CREATED_HTTP_STATUS_CODE, 
		"POST");
});

/* Update User */
router.put('/users', function(request, response) {
	handleJsonResponse(
		response, 
		OK_HTTP_STATUS_CODE, 
		"PUT");
});

/* Delete User */
router.delete('/users', function(request, response) {
	handleJsonResponse(
		response, 
		NO_CONTENT_HTTP_STATUS_CODE, 
		"DELETE");
});

function handleJsonResponse(response, httpStatusCode, json) {
	response.writeHead(httpStatusCode, {
		"Content-Length": json.length,
  		"Content-Type": "text/json"
	});
	response.write(content, "utf8");
	response.end();
}

module.exports = router;