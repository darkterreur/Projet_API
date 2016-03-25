 //models/event.js

module.exports = function(server){
  var EventSchema = server.mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: date,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    max_participant_number: {
      type: number,
      required: true
    },
    category: [{
      type: server.mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    }]
     user_owner: [{
      type: server.mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
  });


  UserSchema.plugin(require('mongoose-timestamp'));
  return server.mongoose.model('User', UserSchema);
};
