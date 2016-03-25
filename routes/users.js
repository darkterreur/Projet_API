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
		server.middlewares.ensureBodyFields([ 'password', 'email']),
		server.actions.users.create);


	//PUT
	router.put('/:id', 
		bodyparser,
		server.actions.users.update); 

	//DELETE
	router.delete('/:id', 
		server.actions.users.remove); 




	return router;
};


