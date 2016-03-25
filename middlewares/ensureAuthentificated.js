// middlewares.ensureAuthentificated


/*
	Module permetttant de vérifier les credentials du User
*/

var jwt = require('jsonwebtoken'); 

module.exports = function(server){
	return function(req, res, next){
		var Token = server.models.Token;
		var token = req.headers.authorization;
		console.log(token);
		if(!token)
			return res.status(401).send('no Authorization'); 
		jwt.verify(token, server.settings.TOKEN_SECRET, function(err, verified){ // si le token est présent on le check
			Token.findById(verified.accessToKen, function(err, data){  // on récupère ensuite le Id du user associé au token
				if(err)
					return res.status(500).send(err);
				console.log(data);
				if(!data)
					return res.status(401).send('invalid token');

				req.auth = req.auth || {}; // permet de ne pas ecrire sur req.auth si il existe deja
				req.auth.userId = data.userId;

				next();
			});
		});
	}
}