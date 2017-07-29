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
			.catch(next))
	.post('/',
		(req, res, next) =>
			ProdRequest.Create(req.body)
			.then(singleRequest => res.status(201).json(singleRequest))
			.catch(next))
	.delete('/:id',
		(req, res, next) =>
		ProdRequest.destroy({where: {id: req.params.id}})
		.then(() => res.json('success'))
		.catch(next))
