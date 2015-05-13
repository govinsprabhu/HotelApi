var express = require('express');
var app = express();
var hindi = require('./hindi.js');
var english = require('./english.js');
var malayalam = require('./malayalam');
var tamil = require('./tamil');
var mongoose = require('mongoose');
var express = require('express');
var route = express.Router();
var schema = mongoose.Schema;
var feedParser = require('ortoo-feedparser');


function crawl(crawlUrl){
	var language = crawlUrl.substring(crawlUrl.match(/hl/).index+3,crawlUrl.match(/hl/).index+5);
	var Feed="";
	if(language === 'hi'){
		hindi.crawlHindi(crawlUrl);
	}
	if(language === 'en'){
		english.crawlEnglish(crawlUrl);
	}
	if(language == 'ml'){
		malayalam.crawlMalayalam(crawlUrl);
	}
	if(language == 'ta'){
		tamil.crawlTamil(crawlUrl);
	}

}

var lan = ["hi","en","ml","ta"];
var topic = ['','s','b','n','w','e'];
var n1 = lan.length;
var n2 = topic.length;
var url;
setInterval(function(){
	for(i  = 0; i < n1; i++){
		for(j = 0; j < n2; j++){
			if(j == 0){
				url = "https://news.google.co.in/news?pz=1&cf=all&ned=in&hl="+lan[i%n1]+"&output=rss";
			}else{
				url = "https://news.google.co.in/news?pz=1&cf=all&ned=in&hl="+lan[i%n1]+"&topic="+topic[j%n2]+"&output=rss";
			}
			crawl(url);
		}
	}
},100000);



app.get('/find', function(request, response){
	if(request.query.ln == 'hi'){
		if(!request.query.topic){
			mongoose.model('hinditopes').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
		if(request.query.topic=='w'){
			mongoose.model('hindiworldes').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
		if(request.query.topic =='n'){
			mongoose.model('hindiindiaes').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
		if(request.query.topic =='s'){
			mongoose.model('hindisportes').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
		if(request.query.topic =='e'){
			mongoose.model('hindientertaines').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
		if(request.query.topic =='b'){
			mongoose.model('hindibusines').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
	}else if(request.query.ln == 'en'){
		if(! request.query.topic){
			mongoose.model('englishtopes').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
		if(request.query.topic==	'w'){
			mongoose.model('englishworldes').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
		if(request.query.topic =='n'){
			mongoose.model('englishindiaes').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
		if(request.query.topic =='s'){
			mongoose.model('englishsportes').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
		if(request.query.topic =='e'){
			mongoose.model('englishentertainesses').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
		if(request.query.topic =='b'){
			mongoose.model('englishbusines').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
	}else if(request.query.ln == 'ta'){
		if(! request.query.topic){
			mongoose.model('tamilstopes').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
		if(request.query.topic==	'w'){
			mongoose.model('tamilworldes').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
		if(request.query.topic =='n'){
			mongoose.model('tamilindiaes').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
		if(request.query.topic =='s'){
			mongoose.model('tamilsportes').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
		if(request.query.topic =='e'){
			mongoose.model('tamilentertaines').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
		if(request.query.topic =='b'){
			mongoose.model('tamilbusines').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
	}else if(request.query.ln == 'ml'){
		if(! request.query.topic){
			mongoose.model('malayalamstopes').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
		if(request.query.topic=='w'){
			mongoose.model('malayalamworldes').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
		if(request.query.topic =='n'){
			mongoose.model('malayalamindiaes').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
		if(request.query.topic =='s'){
			mongoose.model('malayalamsportes').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
		if(request.query.topic =='e'){
			mongoose.model('malayalamentertaines').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
		if(request.query.topic =='b'){
			mongoose.model('malayalambusines').find(function(err, feed){
				response.send(feed);
			}).sort({_id:-1}).skip(request.query.pg*10).limit(10);
		}
	}
});
module.exports = app;
