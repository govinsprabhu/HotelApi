var mongoose = require('mongoose');
var express = require('express');

exports.news = function(request,response){
	var model = ''; 
	if(request.query.ln == 'hi'){
		if(!request.query.topic){
			model = 'hinditopes';	
		}
		if(request.query.topic=='w'){
			model = 'hindiworldes';
		}
		if(request.query.topic =='n'){
			model = 'hindiindiaes';
		}
		if(request.query.topic =='s'){
			model = 'hindisportes';
		}
		if(request.query.topic =='e'){
			model = 'hindientertaines';
		}
		if(request.query.topic =='b'){
			model = 'hindiworldes';	
		}
	}else if(request.query.ln == 'en'){
		if(! request.query.topic){
			model = 'englishtopes';
		}
		if(request.query.topic== 'w'){
			model = 'englishworldes';
		}
		if(request.query.topic =='n'){
			model = 'englishindiaes';
		}
		if(request.query.topic =='s'){
			model = 'englishsportes';
		}
		if(request.query.topic =='e'){
			model = 'englishentertainesses';		}
		if(request.query.topic =='b'){
			model = 'englishbusines';
		}
	}else if(request.query.ln == 'ta'){
		if(! request.query.topic){
			model = 'tamilstopes';
		}
		if(request.query.topic==	'w'){
			model = 'tamilworldes';
		}
		if(request.query.topic =='n'){
			model = 'tamilindiaes';
		}
		if(request.query.topic =='s'){
			model = 'tamilsportes';
		}
		if(request.query.topic =='e'){
			model = 'tamilentertaines';
		}
		if(request.query.topic =='b'){
			model = 'tamilbusines';
		}
	}else if(request.query.ln == 'ml'){
		if(! request.query.topic){
			model = 'malayalamstopes';
		}
		if(request.query.topic=='w'){
			model = 'malayalamworldes';
		}
		if(request.query.topic =='n'){
			model = 'malayalamindiaes';
		}
		if(request.query.topic =='s'){
			model = 'malayalamsportes';
		}
		if(request.query.topic =='e'){
			model = 'malayalamentertaines';
		}
		if(request.query.topic =='b'){
			model = 'malayalambusines';
		}
	}
	mongoose.model(model).find({},{},{skip:request.query.pg*10,limit:5},function(err, feed){
		response.send(feed);
	}).sort({_id:-1});
};
