// action.category.show


/*
	Module permettant d'afficher une category donnée
*/

module.exports = function(server){
	 return function(req, res, next){
	 	var Category = server.models.Category; 
	 	var id = req.params.id; // id désigne l'id dans les paramètre de la requeste 
	 	var query = Category.findById(id, function(err, data){  // On récupère l'user en précisant son id en paramètre
	 		if(err)
	 			res.status(500).send(err);
  		res.send(data); 
	 	});

	 }
}