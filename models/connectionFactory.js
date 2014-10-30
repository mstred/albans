var mongoClient = require('mongodb').MongoClient;
var connectionInstance;

var DATABASE_URL = "mongodb://localhost:27017/albans";

/*
 * Expected callback: function (error, db)
 */
module.exports.getConnection = function (callback) {
	if (connectionInstance) {
		callback(null, connectionInstance);
	} else {
		mongoClient.connect(DATABASE_URL, function (error, db) {
			connectionInstance = db;
			callback(error, db);
		});
	}
}
