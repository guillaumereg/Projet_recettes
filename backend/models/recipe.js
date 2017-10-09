var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var RecipeSchema = new mongoose.Schema({
  recipeID: {
    type: Number,
    unique: true
  },
  recipeTitle: {
    type: String,
    unique: false
  },
  type: {
    type: String,
    unique: false
  },
  sous_Type: {
    type: String,
    unique: false
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
  public: {
    type: Boolean,
    unique: false
  },
  favori: {
    type: Boolean,
    unique: false
  },

});


module.exports = mongoose.model('Recipe', RecipeSchema);
