module.exports = function(server){
  server.actions = {
     users: require('./users')(server),
     events: require('./events')(server),
     auth: require('./auth')(server)
  }
};
