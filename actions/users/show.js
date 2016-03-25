// action.users.show


/*
	Module permettant d'afficher un user donné
*/

module.exports = function(server){
	 return function(req, res, next){
	 	var User = server.models.User; 
	 	var id = req.params.id; // id désigne l'id dans les paramètre de la requeste 
	 	var query = User.findById(id, function(err, data){  // On récupère l'user en précisant son id en paramètre
	 		if(err)
	 			res.status(500).send(err);
  		res.send(data); 
	 	});

	 }
}