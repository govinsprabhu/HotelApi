var express = require("express");
var router = express.Router();
var feedParser = require('ortoo-feedparser');
var url = "https://news.google.co.in/news?pz=1&cf=all&ned=in&hl=en&output=rss";
var englishSchema = require('./generalSchema.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myapp', function(err,db){
	if(!err){
		console.log("This is also here successfully connected");
	}else{
		console.log("This is here unable to connect");
		console.log(err);
	}
});

function crawlEnglish(crawlUrl){
	var topic = '';
	if(crawlUrl.match(/topic/)){
		topic = crawlUrl.substring(crawlUrl.match(/topic/).index+6,crawlUrl.match(/&output/).index);

	}
	feedParser.parseUrl(crawlUrl).on('article',function(article){
		console.log(crawlUrl);
		var Feed ="";
		if(topic == 'b'){
			Feed = englishSchema.englishBusinessSchema;
		}else if(topic == 's'){
			Feed = englishSchema.englishSportsSchema;
		}else if(topic == 'w'){
			Feed = englishSchema.englishWorldSchema;
		}else if(topic == 'n'){
			Feed = englishSchema.englishIndiaSchema;
		}else if(topic == 'e'){
			Feed = englishSchema.englishEntertainmentSchema;
		}else{
			Feed = englishSchema.englishTopSchema;
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
				console.log("an error occurred englishSchema");
			}else{
				console.log("successfylly saved");
			}
		});
	});
}
exports.crawlEnglish = crawlEnglish;