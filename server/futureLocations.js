const db = require('APP/db')
const futureLocation = db.model('futureLocation')

module.exports = require('express').Router()
	.get('/', 
		(req, res, next) => 
		futureLocation.findAll()
		.then(trips => {
			res.json(trips)
		})
		.catch(next))
	.delete('/',
		(req, res, next) => 
		futureLocation.destroy()
		.then(() => res.json('trip is deleted'))
		.catch(next))