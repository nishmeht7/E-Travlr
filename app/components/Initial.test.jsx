import React from 'react'

import chai, {expect} from 'chai'
chai.use(require('chai-enzyme')())

import {shallow} from 'enzyme'

import Initial from './Initial'

/* global describe it beforeEach */
describe('<Initial />', () => {
	let root;
	beforeEach('Render the root', () => 
		root = shallow(<Initial />)
	)

	it('shows a shopper form', () => 
		expect(root.find('input[name="prodUrl"]')).to.have.length(1)
	)
})

