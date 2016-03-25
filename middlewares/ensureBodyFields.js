// actions.middlewares.ensureBodyFields

/*
	Module permettant de spécifier les champs necessaire à mentionner
	sinon on renvoi un message d'erreur avec les champs manquant
*/

module.exports = function(server){
	return function(fields){
		fields = (fields instanceof Array)? fields : [fields];

		return function(req, res, next){

			// pour tous les élements 
			var missing = [];
			fields.forEach(function(field){
				if(!req.body[field])
					missing.push(field);
			});
			
			if(missing.length > 0)
				return res.status(400).send('missing field ' + missing); 
			
			next();
		}
	}
}