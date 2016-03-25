
//action/users/get

/*
	Module permettant de récupérer un user depuis la BD
*/


module.exports =  function(server){
  return function(req, res, next){
  	var User = server.models.User; 
  	var query = User.find(); // ~ SELECT * FROM USER

  	query.exec(function(err, data){ // on execute la requête
  		if(err)
  			res.status(500).send(err);
  		res.send(data); // on envoi donc les données si tout se passe bien
  	});
  }
};