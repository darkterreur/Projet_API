// actions.users.update


/*
    Module permettant de modfier les caractéristique d'un user
*/

module.exports = function(server) {
  return function(req, res, next) {
  delete req.body.password; // on supprime password du body
 

  var User = server.models.User; 

  User.findByIdAndUpdate(req.params.id,{$set: req.body}, function(err, todo){  // on met à jour tout ce qui reste du body 
    if(err)
      return res.status(500).send(err);
    res.json(todo);  // Et on renvoi le contenu du body changé sous format json
    }); 
  }
};