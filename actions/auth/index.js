// actions.auth.index

/*
	Module où on déclare le contenu du module
*/

module.exports = function(server){
	
	return {
		login : require('./login')(server),
		logout : require('./logout')(server)
	}
};