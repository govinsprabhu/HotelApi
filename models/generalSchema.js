var mongoose = require("mongoose");
var schema = mongoose.Schema;
var generalSchema  = new schema({
	title:String,
	url:String,
	guid:{
		type:String,
		index:true,
		unique:true
	},
	img:String,
	desc:String,
	pubDate:String
});

exports.hindiSportsSchema = mongoose.model('hindisportes',generalSchema,'hindisportes');
exports.hindiBusinessSchema = mongoose.model('hindibusiness',generalSchema,'hindibusiness');
exports.hindiIndiaSchema = mongoose.model('hindiindia',generalSchema,'hindiindia');
exports.hindiWorldSchema = mongoose.model('hindiworld',generalSchema,'hindiworld');
exports.hindiEntertaintmentSchema = mongoose.model('hindientertainment',generalSchema,'hindientertainment');
exports.hindiTopSchema = mongoose.model('hinditop',generalSchema,'hinditop');

exports.englishSportsSchema = mongoose.model('englishsportes',generalSchema,'englishsportes');
exports.englishBusinessSchema = mongoose.model('englishbusiness',generalSchema,'englishbusiness');
exports.englishIndiaSchema = mongoose.model('englishindia',generalSchema,'englishindia');
exports.englishWorldSchema = mongoose.model('englishworld',generalSchema,'englishworld');
exports.englishEntertainmentSchema = mongoose.model('englishentertainment',generalSchema,'englishentertainment');
exports.englishTopSchema = mongoose.model('englishtop',generalSchema,'englishtop');

exports.malayalamSportsSchema = mongoose.model('malayalamsportes',generalSchema,'malayalamsportes');
exports.malayalamBusinessSchema = mongoose.model('malayalambusiness',generalSchema,'malayalambusiness');
exports.malayalamIndiaSchema = mongoose.model('malayalamindia',generalSchema,'malayalamindia');
exports.malayalamWorldSchema = mongoose.model('malayalamworld',generalSchema,'malayalamworld');
exports.malayalamEntertaintmentSchema = mongoose.model('malayalamentertainment',generalSchema,'malayalamentertainment');
exports.malayalamTopSchema = mongoose.model('malayalamstop',generalSchema,'malayalamstop');

exports.tamilSportsSchema = mongoose.model('tamilsportes',generalSchema,'tamilsportes');
exports.tamilBusinessSchema = mongoose.model('tamilbusiness',generalSchema,'tamilbusiness');
exports.tamilIndiaSchema = mongoose.model('tamilindia',generalSchema,'tamilindia');
exports.tamilWorldSchema = mongoose.model('tamilworld',generalSchema,'tamilworld');
exports.tamilEntertaintmentSchema = mongoose.model('tamilentertainment',generalSchema,'tamilentertainment');
exports.tamilTopSchema = mongoose.model('tamiltop',generalSchema,'tamiltop');




