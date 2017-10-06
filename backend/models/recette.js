var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var OfferSchema = new mongoose.Schema({
  recetteName: {
    type: String,
    unique: true
  },
  ingredient: {
    type: String,
    unique: false
  },
  preparation: {
  	type: String,
  	unique: false
  },
  auteur: {
    type: String,
    unique: false
  },
});


module.exports = mongoose.model('Offer', OfferSchema);
