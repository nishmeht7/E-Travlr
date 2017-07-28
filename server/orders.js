const db = require('APP/db')
const Order = db.model('Order')

module.exports = require('express').Router()
	.get('/',
		(req, res, next) => 
		Order.findAll()
		.then(orders => {
			res.json(orders)
		})
		.catch(next))
	.get('/:id',
		(req, res, next) => 
		Order.findById(req.params.id)
		.then(orders => {
			res.json(orders)
		}))