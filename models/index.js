var mongoose = require('mongoose');

module.exports = function(server) {
  server.mongoose =  mongoose.connect(server.settings.db.mongo);

  server.models = {
    User: require('./User')(server),
    Token: require('./Token')(server),
    Event: require('./Event')(server),
    Category: require('./Category')(server),
    Participant: require('./Participant')(server)
  };
};
