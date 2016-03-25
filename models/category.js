 //models/category.js

module.exports = function(server){
  var CategorySchema = server.mongoose.Schema({
    label: {
      type: String,
      required: true,
      unique: true
    }
  });

  CategorySchema.plugin(require('mongoose-timestamp'));
  return server.mongoose.model('Category', CategorySchema);
};
