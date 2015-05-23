var mongoose = require('mongoose');
var express = require('express');

exports.news = function(request,response){
	var model = ''; 
	if(request.query.ln == 'hi'){
		model = 'hindi';
		
	}else if(request.query.ln == 'en'){
		model = 'english';
	}else if(request.query.ln == 'ta'){
		model = 'tamil';
	}else if(request.query.ln == 'ml'){
		model = 'malayalam';
	}else{
		model = 'notfound';
	}

	if(! request.query.topic){
		model = model.concat('top');
	}
	if(request.query.topic=='w'){
		model = model.concat('world');
	}
	if(request.query.topic =='n'){
		model = model.concat('india');
	}
	if(request.query.topic =='s'){
		model = model.concat('sportes');
	}
	if(request.query.topic =='e'){
		model = model.concat('entertainment');
	}
	if(request.query.topic =='b'){
		model = model.concat('business');
	}
	if(model.match(/notfound/)){
		response.status(404).send('404 -HTTP NOT FOUND');
	}else{
		mongoose.model(model).find({},{},{skip:request.query.pg*10,limit:10},function(err, feed){
			response.send(feed);
		}).sort({_id:-1});
	}
};
