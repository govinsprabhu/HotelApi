var express = require("express");
var router = express.Router();
var feedParser = require('ortoo-feedparser');
var malayalamSchema = require('./generalSchema.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myapp', function(err,db){
	if(!err){
		console.log("This is also here successfully connected");
	}else{
		console.log("This is here unable to connect");
		console.log(err);
	}
});

function crawlMalayalam(crawlUrl){
	var topic = '';
	if(crawlUrl.match(/topic/)){
		topic = crawlUrl.substring(crawlUrl.match(/topic/).index+6,crawlUrl.match(/&output/).index);

	}
	feedParser.parseUrl(crawlUrl).on('article',function(article){
		var Feed ="";
		if(topic == 'b'){
			Feed = malayalamSchema.malayalamBusinessSchema;
		}else if(topic == 's'){
			Feed = malayalamSchema.malayalamSportsSchema;
		}else if(topic == 'w'){
			Feed = malayalamSchema.malayalamWorldSchema;
		}else if(topic == 'n'){
			Feed = malayalamSchema.malayalamIndiaSchema;
		}else if(topic == 'e'){
			Feed = malayalamSchema.malayalamEntertaintmentSchema;
		}else{
			Feed = malayalamSchema.malayalamTopSchema;
		}

		var index = article.guid.match(/cluster/).index;
		var guid1 = article.guid.substring(index+8,article.guid.length);
		index = article.link.match(/&url/).index;
		var link = article.link.substring(index+5,article.link.length);
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
				console.log("an error occurred in malayalamSchema");
			}else{
				console.log("successfylly saved");
			}
		});
	});
}
exports.crawlMalayalam = crawlMalayalam;