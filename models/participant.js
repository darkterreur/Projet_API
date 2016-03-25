//models/participant.js

module.exports = function(server){
  var ParticipantSchema = server.mongoose.Schema({
     user_id: [{
      type: server.mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
     event_id: [{
      type: server.mongoose.Schema.Types.ObjectId,
      ref: 'Event'
    }]
  });

  ParticipantSchema.plugin(require('mongoose-timestamp'));
  return server.mongoose.model('Participant', ParticipantSchema);
};
