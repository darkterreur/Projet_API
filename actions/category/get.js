module.exports = function(server){
	return function(req,res,next){
		var Category = server.models.Category; 
	  	var query = Category.find(); // ~ SELECT * FROM CATEGORY

	  	query.exec(function(err, data){ // on execute la requête
	  		if(err)
	  			res.status(500).send(err);
	  		res.send(data); // on envoi donc les données si tout se passe bien
	  	});
	};
}