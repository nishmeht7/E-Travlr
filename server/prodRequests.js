const db = require('APP/db')
const ProdRequest = db.model('prodRequests')
const ScraperFunc = require('./scraper')

console.dir(ProdRequest.create)

module.exports = require('express').Router()
	.get('/',
		(req, res, next) =>
			ProdRequest.findAll()
			.then(prodRequests => {
				res.json(prodRequests)
				console.log('hitting prodRequests')
			})
			.catch(next))
	.post('/',
		(req, res, next) =>{
			console.log('req.body ', req.body)
			ProdRequest.create(req.body)
			.then(singleRequest => res.status(201).json(singleRequest))
			.catch(next)
		})
	.post('/scraper',
		(req, res, next) => {
			console.log('the url is',req.body.url)
			ScraperFunc(req.body.url)
			.then(urlInfo => {
				console.log('the urlinfo is', urlInfo)
				res.status(201).json(urlInfo)
			})
			.catch(next)
		})
	.delete('/:id',
		(req, res, next) =>
		ProdRequest.destroy({where: {id: req.params.id}})
		.then(() => res.json('success'))
		.catch(next))
