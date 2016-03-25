module.exports = function(server){
  server.actions = {
    // todos: require('./todos')(server),
    // auth : require('./auth')(server),
    events: require('./events')(server),
     users: require('./users')(server)
  }
};
