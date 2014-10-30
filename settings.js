/*
 * WARNING: This file must be in the root project folder!
 */

module.exports = {

	PROJECT_DIR: __dirname,
	CONTROLLERS_DIR: "/controllers",
	MODELS_DIR: "/models",
	ROUTES_DIR: "/routes",
	WEB_ROUTES_DIR: "/web",
	API_ROUTES_DIR: "/api",

	RoutesDirEnum: {
	    WEB: 0,
	    API: 1
	},

	getControllerPath: function (controllerName) {
		return this.PROJECT_DIR + this.CONTROLLERS_DIR + "/" + controllerName;
	},

	getModelPath: function (modelName) {
		return this.PROJECT_DIR + this.MODELS_DIR + "/" + modelName;
	},

	getRoutePath: function (routeName, routesDirEnum) {
		var path = "";

		switch(routesDir) {
			case WEB:
				path += this.PROJECT_DIR + this.WEB_ROUTES_DIR;
				break;
			case API:
				path += this.PROJECT_DIR + this.API_ROUTES_DIR;
				break;
			default:
				path += this.PROJECT_DIR;
				break;
		}
		path += "/" + routeName;
		
		return path;
	}
	
};
