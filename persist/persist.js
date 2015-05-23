var express = require("express");
var router = express.Router();
var feedParser = require('ortoo-feedparser');
var schema = require('../models/generalSchema.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myapp', function(err,db){
	if(!err){
		console.log("Successfully connected");
	}else{
		console.log("Unable to connect");
		console.log(err);
	}
});

function save(crawlUrl){
	var topic = '';
	var	language = crawlUrl.substring(crawlUrl.match(/hl/).index+3,crawlUrl.match(/hl/).index+5);
	if(crawlUrl.match(/topic/)){
		topic = crawlUrl.substring(crawlUrl.match(/topic/).index+6,crawlUrl.match(/&output/).index);
	}

	feedParser.parseUrl(crawlUrl).on('article',function(article){
		var Feed ="";
		if(language === 'hi'){
			if(topic == 'b'){
				Feed = schema.hindiBusinessSchema;
			}else if(topic == 's'){
				Feed = schema.hindiSportsSchema;
			}else if(topic == 'w'){
				Feed = schema.hindiWorldSchema;
			}else if(topic == 'n'){
				Feed = schema.hindiIndiaSchema;
			}else if(topic == 'e'){
				Feed = schema.hindiEntertaintmentSchema;
			}else{
				Feed = schema.hindiTopSchema;
			}
		}
		else if(language === 'en'){
			if(topic == 'b'){
				Feed = schema.englishBusinessSchema;
			}else if(topic == 's'){
				Feed = schema.englishSportsSchema;
			}else if(topic == 'w'){
				Feed = schema.englishWorldSchema;
			}else if(topic == 'n'){
				Feed = schema.englishIndiaSchema;
			}else if(topic == 'e'){
				Feed = schema.englishEntertainmentSchema;
			}else{
				Feed = schema.englishTopSchema;
			}
		}
		else if(language === 'ml'){
			if(topic == 'b'){
				Feed = schema.malayalamBusinessSchema;
			}else if(topic == 's'){
				Feed = schema.malayalamSportsSchema;
			}else if(topic == 'w'){
				Feed = schema.malayalamWorldSchema;
			}else if(topic == 'n'){
				Feed = schema.malayalamIndiaSchema;
			}else if(topic == 'e'){
				Feed = schema.malayalamEntertaintmentSchema;
			}else{
				Feed = schema.malayalamTopSchema;
			}

		}
		else if(language === 'ta'){
			if(topic == 'b'){
				Feed = schema.tamilBusinessSchema;
			}else if(topic == 's'){
				Feed = schema.tamilSportsSchema;
			}else if(topic == 'w'){
				Feed = schema.tamilWorldSchema;
			}else if(topic == 'n'){
				Feed = schema.tamilIndiaSchema;
			}else if(topic == 'e'){
				Feed = schema.tamilEntertaintmentSchema;
			}else{
				Feed = schema.tamilTopSchema;
			}
		}
		//console.log("now in router with url ",crawlUrl, " TOPIC ",topic,"language ",language);
		

		var index = article.guid.match(/cluster/).index;
		var guid1 = article.guid.substring(index+8,article.guid.length);
		index = article.link.match(/&url/).index;
		var link = article.link.substring(index+5,article.link.length);
		if(link.match(/%3D/)){
			link = link.replace('%3D','=');
		}

		index = article.description.match(/img/).index;
		lastIndex = article.description.match(/alt/).index;
		var image = article.description.substring(index+11,lastIndex-2);
		index = article.description.match(/<\/b><\/font><br><font size="-1">/).index;
		var description = "";
		if(article.description.match(/...<\/font><br><font size="-1"><a/)){
			lastIndex = article.description.match(/...<\/font><br><font size="-1"><a/).index;
			description = article.description.substring(index+31,lastIndex);
		}

		var feedObject = new Feed({title:article.title,url:link,guid:guid1, img:image,desc:description,pubDate:article.pubDate});
		feedObject.save(function(err){
			if(err){
				//console.log("an error occurred schema");
			}else{
				console.log("successfylly saved");
			}
		});
	});
}
exports.save = save;