const db = require('APP/db')
const Order = db.model('Order')

module.exports = require('express').Router()
	.get('/', //will only be used for admin purposes to see all orders on system
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
	.post('/',
		(req, res, next) => 
		Order.create(req.body)
		.then(createdOrder => {
			res.json(createdOrder)
		})
		.catch(next))
	.delete('/',
		(req,res,next) => 
		Order.delete(req.body)
		.then(() => res.json('order deleted complete'))
		.catch(next))