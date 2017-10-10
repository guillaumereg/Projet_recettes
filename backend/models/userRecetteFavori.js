var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var UserRecipeSchema = new mongoose.Schema({

  recipeTitle: {
    type: String,
    unique: false
  },
  username: {
    type: String,
    unique: false
  },

});


module.exports = mongoose.model('UserRecipe', UserRecipeSchema);
