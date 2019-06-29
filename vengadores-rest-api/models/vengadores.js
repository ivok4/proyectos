var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var vengadorSchema = new Schema({
    id:{ type: String },
    personaje:{ type: String },
	raza:{ type: String },
    mundo:{ type: String },
    img:{ type: String },
    peliculas:  { type: Array },
	});  
	  //comentarios:  { type: Array },



module.exports = mongoose.model('Vengador', vengadorSchema,'vengadores');
