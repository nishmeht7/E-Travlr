'use strict'

// const cheerio = require('cheerio')
// 	, req = require('tinyreq')

// function scrape(url, data, cb) {
// 	//create the request
// 	req(url, (err, body) => {
// 		if (err) {return cb(err)}

// 		//parse the HTML
// 		let $ = cheerio.load(body)
// 		let pageData = {}

// 		//Extract the data
// 		Object.keys(data).forEach(k => {
// 			pageData[k] = $(data[k]).text()
// 		})

// 		cb(null, pageData)
// 	})
// }

// scrape("https://www.amazon.com/dp/B0052ZAFMG/ref=nav_timeline_asin?_encoding=UTF8&psc=1", {
// 	title: "body"
// }, (err, data) => {
// 	console.log(err||data)
// })

//this module works with etsy, amazon, target and bestbuy!
var scraper = require('product-scraper')

scraper.init('http://www.amazon.com/gp/product/B00X4WHP5E/', function(data){
	let arr = [];
	arr.push(data.title, data.image, data.price)
    console.log('the data is', arr);
});