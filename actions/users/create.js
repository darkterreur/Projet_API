
//action/users/create

/*
	Module permettant de créer un user et de l'insérer en BD
*/

var sha1 = require('sha1');  // on inclut "la librairie sha1"
module.exports = function(server){
  

return function(req, res, next){
    
    req.body.password = sha1(req.body.password);  // on encode le pasword

    var User = server.models.User;
    var user  = new User(req.body);

    user.save(function(err, data){  // on sauvegarde le user en base
      if(err)
        return res.status(500).send(err);
      res.json(data); // on renvoi le resultat sous format json

    });
  }

};