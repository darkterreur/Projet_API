module.exports = function(server){
   server.use('/users', require('./users')(server));
};
