import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'

import Jokes from './Jokes'
import Login from './Login'
import WhoAmI from './WhoAmI'
import NotFound from './NotFound'
import { Initial } from './Initial'

/* note..getting this warning:

Warning: ShopperForm is changing an uncontrolled input of type text to be
controlled. Input elements should not switch from uncontrolled to controlled
(or vice versa). Decide between using a controlled or uncontrolled input
element for the lifetime of the component.
More info: https://fb.me/react-controlled-components

*/


class ShopperForm extends React.Component {
  constructor(){
    super()
    this.state = {
      productName: '',
      image: '',// not sure how to do this.. figure it out
      url: '',
      description: '',
      price: '',
      reward: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(){
    console.log('submit code here... dispatch a thunk or some shiz')
  }

  handleChange(e){
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]: value})
  }

  render(){
    let user = this.props.user;
    let match = this.props.match;
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label className="col-sm-2 control-label">Product Name</label>
            <div className="col-sm-10">
              <input type="text" name="productName" value={this.state.productName} className="form-control" placeholder="" onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-group">
            :::Upload Image Placeholder:::
          </div>

          <div className="form-group">
            <label className="col-sm-2 control-label">URL</label>
            <div className="col-sm-10">
              <input type="text" name="url" value={this.state.url} className="form-control" placeholder="" onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-2 control-label">Description</label>
            <div className="col-sm-10">
              <input type="text" name="description" value={this.state.description} className="form-control" placeholder="" onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-2 control-label">Price</label>
            <div className="col-sm-10">
              <input type="number" name="price" value={this.state.price} className="form-control" placeholder="" onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-2 control-label">Reward</label>
            <div className="col-sm-10">
              <input type="number" name="reward" value={this.state.reward} className="form-control" placeholder="" onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>

        </form>
    )
  }
}

const mapState = ({ auth }) => ({ user: auth });
export default connect(mapState)(ShopperForm);
