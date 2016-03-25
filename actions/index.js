module.exports = function(server){
  server.actions = {
     users: require('./users')(server),
  }
};
