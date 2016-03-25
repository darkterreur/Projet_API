// actions.auth.logout


/* 
		Module permettant de gérer le logout du user
*/

module.exports = function(server){
	return function(req, res, next){
		var Token = server.models.Token; 
		Token.remove({ userId: req.auth.userId}, function(err,  data){ // Suppression du token 
			if(err)
				return res.status(500).send(err);
		res.send('logout successed'); // en envoi un message si tout c'est bien passé
		});
	}
}
