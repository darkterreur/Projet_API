// actions.users.remove


/*
	Module permettant de supprimer un id donné dans la BD
*/

module.exports = function(server) {
  return function(req, res, next) {
  var User = server.models.User; 
  User.remove({_id: req.params.id}, function(err, data){  // on supprime un user en récupérant son id = _id
  if(err)
      return res.status(500).send(err);
    res.json(data);  // on retourne ses info sous format json
   });
  }
};