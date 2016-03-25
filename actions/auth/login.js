// actions.auth.login

/*
	Module ou on gère l'orsqu'un user se log
*/

var sha1 = require('sha1'); 
var jwt = require('jsonwebtoken');

module.exports = function(server){
	return function(req, res, next){
		
	var User = server.models.User; 
	var Token = server.models.Token; 

	var email = req.body.email;
	var password = sha1(req.body.password); // on encode le mot de passe
	
	User.findOne({
		email : email,
		password : password
	},function(err, user){
		if(err)
			return res.status(300).send(err);
		if(!user)
			return res.status(422).send('invalid credential');

		new Token({
			userId: user._id  // on initialise le token en lui attribuant l'id unique du user
		}).save(function(err,token){	// on le sauvegarde en BDD
			if(err)
				return res.status(500).send(err);

			var accesToken = jwt.sign({accessToKen : user._id}, server.settings.TOKEN_SECRET);   //on attribut au accesToken le user._id
			res.send(accesToken); // on renvoi l'accessToken
		});
	});
  }
};