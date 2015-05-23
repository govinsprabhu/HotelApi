var persist = require('../persist/persist.js');

function crawl(crawlUrl){
	persist.save(crawlUrl);
}
exports.ping = function(){
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
	},30000);
};
