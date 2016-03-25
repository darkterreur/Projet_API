var mongoose = require('mongoose');

module.exports = function(server) {
  server.mongoose =  mongoose.connect(server.settings.db.mongo);

  server.models = {
    // Todo: require('./Todo')(server),
    // User: require('./User')(server),
    // Token: require('./Token')(server),
    // Role: require('./Role')(server)
    event: require('./event')(server),
    category: require('./category')(server)
  };
};
