var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var RecipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    unique: true
  },
  ingredient: {
    type: String,
    unique: false
  },
  prepare: {
  	type: String,
  	unique: false
  },
  author: {
    type: String,
    unique: false
  },
});


module.exports = mongoose.model('Recipe', RecipeSchema);
