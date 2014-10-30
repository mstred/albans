var express = require('express');
var router = express.Router();

var mongoClient = require('mongodb').MongoClient;

function testMongo () {
	mongoClient.connect("mongodb://localhost:27017/albans", function (error, db) {
    	if (!error) {
        	console.log("Connected!");
        
        	var collection = db.collection('tagcollection');
			var stream = collection.find().stream();
			stream.on('data', function (item) {
				console.log(item);
			});
            stream.on('end', function () {
            	console.log("end");
            });
    	} else {
        	console.log("Error: " + error);
    	}
	});
}

/* GET users listing. */
router.get('/', function(req, res) {
//	var return = testMongo();
//	console.log(return);
	var settings = require('settings');
	console.log('Current directory: ' + settings.PROJECT_DIR);
	console.log("User controler path: " + settings.getControllerPath("userController.js"));
	testMongo();
	res.send('respond with a resource');
});

module.exports = router;
