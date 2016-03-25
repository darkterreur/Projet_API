module.exports = function(server){
   server.middlewares = {
  	  ensureBodyFields: require('./ensureBodyFields')(server)
  }
}
