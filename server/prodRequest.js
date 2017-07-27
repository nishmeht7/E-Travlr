const db = require('APP/db')
const ProdRequest = db.model('prodRequests')

module.exports = require('express').Router()
	.get('/', 
		(req, res, next) => 
			ProdRequest.findAll()
			.then(prodRequests => {
				res.json(prodRequests)
				console.log('hitting prodRequests')
			})
			.catch(next)
		)
