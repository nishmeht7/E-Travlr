import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme')())

import {shallow} from 'enzyme'

import Navbar from './Navbar'

/*global describe it beforeEach*/

describe('<Navbar />', () => {
	let root 
	beforeEach('Render the root', () => 
		root = shallow(<Navbar />)
	)

	it('Shows a navbar', () => {
		expect('nav[name="navbar"]').to.have.length(1)
	})
})