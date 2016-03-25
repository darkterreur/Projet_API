module.exports = function(server){
  var UserSchema = server.mongoose.Schema({

    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      select: false
    }
  });


  UserSchema.plugin(require('mongoose-timestamp'));
  return server.mongoose.model('User', UserSchema);
};
