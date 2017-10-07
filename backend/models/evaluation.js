var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var EvaluationSchema = new mongoose.Schema({
  recetteName: {
    type: String,
    unique: false
  },
  eval: {
    type: Number,
    unique: false
  },
  commentary: {
  	type: String,
  	unique: false
  },
  author: {
  	type: String,
  	unique: false
  }
});


module.exports = mongoose.model('Evaluation', EvaluationSchema);
