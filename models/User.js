module.exports = function(server){
  var UserSchema = server.mongoose.Schema({

    firstName: {
      type: String,
      default: 'foo'
    },
    lastName: {
      type: String,
      default: 'bar'
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
