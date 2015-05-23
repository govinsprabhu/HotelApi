var mongoose = require("mongoose");
var schema = mongoose.Schema;
var generalSchema  = new schema({
	title:String,
	url:String,
	guid:String,
	img:String,
	desc:String,
	pubDate:String
});

exports.hindiSportsSchema = mongoose.model('hindisportes',generalSchema);
exports.hindiBusinessSchema = mongoose.model('hindibusines',generalSchema);
exports.hindiIndiaSchema = mongoose.model('hindiindiaes',generalSchema);
exports.hindiWorldSchema = mongoose.model('hindiworldes',generalSchema);
exports.hindiEntertaintmentSchema = mongoose.model('hindientertaines',generalSchema);
exports.hindiTopSchema = mongoose.model('hinditopes',generalSchema);

exports.englishSportsSchema = mongoose.model('englishsportes',generalSchema);
exports.englishBusinessSchema = mongoose.model('englishbusines',generalSchema);
exports.englishIndiaSchema = mongoose.model('englishindiaes',generalSchema);
exports.englishWorldSchema = mongoose.model('englishworldes',generalSchema);
exports.englishEntertainmentSchema = mongoose.model('englishentertainesses',generalSchema);
exports.englishTopSchema = mongoose.model('englishtopes',generalSchema);

exports.malayalamSportsSchema = mongoose.model('malayalamsportes',generalSchema);
exports.malayalamBusinessSchema = mongoose.model('malayalambusines',generalSchema);
exports.malayalamIndiaSchema = mongoose.model('malayalamindiaes',generalSchema);
exports.malayalamWorldSchema = mongoose.model('malayalamworldes',generalSchema);
exports.malayalamEntertaintmentSchema = mongoose.model('malayalamentertaines',generalSchema);
exports.malayalamTopSchema = mongoose.model('malayalamstopes',generalSchema);

exports.tamilSportsSchema = mongoose.model('tamilsportes',generalSchema);
exports.tamilBusinessSchema = mongoose.model('tamilbusines',generalSchema);
exports.tamilIndiaSchema = mongoose.model('tamilindiaes',generalSchema);
exports.tamilWorldSchema = mongoose.model('tamilworldes',generalSchema);
exports.tamilEntertaintmentSchema = mongoose.model('tamilentertaines',generalSchema);
exports.tamilTopSchema = mongoose.model('tamilstopes',generalSchema);




