var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var EvaluationSchema = new mongoose.Schema({
  recipeName: {
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
  	unique: true
  }
});


module.exports = mongoose.model('Evaluation', EvaluationSchema);
