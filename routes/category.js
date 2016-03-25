var router = require('express').Router();
var bodyparser = require('body-parser').json();


module.exports = function(server){

	// GET
	router.get('/',
	 	 server.actions.category.get);

	 router.get('/:id',
	 	 server.actions.category.show);

	



	return router;
};


