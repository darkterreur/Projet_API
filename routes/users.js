var router = require('express').Router();
var bodyparser = require('body-parser').json();


module.exports = function(server){

	console.log('loaded');
	//GET
	router.get('/',
		 server.actions.users.get);

	router.get('/:id',
		 server.actions.users.show);

	//POST
	router.post('/', 
		bodyparser,
		//server.middlewares.ensureBodyFields([ 'password', 'email', 'username' ]),
		server.actions.users.create);

	return router;
};


