import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import Jokes from './Jokes'
import Login from './Login'
import WhoAmI from './WhoAmI'
import NotFound from './NotFound'
import { Initial } from './Initial'

import { add_prodRequest_TC } from '../reducers/prodRequests'



class ShopperForm extends React.Component {
  constructor(props){
    super(props)
    // console.log('the new info in shopper form is', this.props.history.location.state)
    let shopperInfo = this.props.history.location.state
    this.state = {
      name: shopperInfo ? shopperInfo.name : "",
      prodImageURL: shopperInfo ? shopperInfo.prodImageUrl : "",
      url: shopperInfo ? shopperInfo.url : "",
      description: '',
      price: shopperInfo ? shopperInfo.price : "",
      reward: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getImage = this.getImage.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    console.log('this.state ', this.state)
    this.props.add_prodRequest(this.state)
  }

  handleChange(e){
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]: value})
  }

  getImage() {
    this.state.prodImageURL.forEach(function(elem){
     <img src={elem.src} />
    })
  }

  render(){
    let user = this.props.user;
    let match = this.props.match;
    console.log('the shopperform props is', this.props)
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit} >

          <div className="form-group">
            <label className="col-sm-2 control-label">Product Name</label>
            <div className="col-sm-10">
              <input type="text" name="name" value={this.state.name} className="form-control" placeholder="" onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-2 control-label">Image URL</label>
            <div className="col-sm-10">
              <input id="imageName" type="text" name="prodImageURL" value={this.state.prodImageURL} className="form-control" placeholder="" onChange={this.handleChange} onLoad={this.getImage} /> 
              {this.state.prodImageURL ? <img className="shopperFrom-img" src={this.state.prodImageURL} /> : <h1>no image</h1> }
            </div>
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
              <input type="text" name="price" value={this.state.price} className="form-control" placeholder="" onChange={this.handleChange} />
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
              <button type="submit" className="btn btn-primary" onSubmit={this.handleSubmit}>Submit</button>
            </div>
          </div>

        </form>
    )
  }
}

const mapState = ({ auth }) => ({ user: auth });
const mapDispatch = {
  add_prodRequest: add_prodRequest_TC
}

export default connect(mapState, mapDispatch)(ShopperForm);
