var router = require('express').Router();
var bodyparser= require('body-parser').json();


module.exports = function(server){
	router.post('/login', 
		bodyparser,
		server.middlewares.ensureBodyFields(['email' , 'password']), 
		server.actions.auth.login);

	 router.post('/logout', 
	 	server.middlewares.ensureAuthentificated,
	 	server.actions.auth.logout);
return router;
}


