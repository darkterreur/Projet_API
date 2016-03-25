//actions/users/index

/*
	Module permettant de declare tout les fichier present dans ce module
*/

module.exports = function(server) {
  return {
    create: require('./create')(server),
    get: require('./get')(server),
    show: require('./show')(server)
  }
};