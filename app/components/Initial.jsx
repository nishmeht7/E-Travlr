import React, { Component } from 'react'
import {
  Link,
} from 'react-router-dom';
import { fetch_prodRequests_urlInfo } from '../reducers/prodRequests'

class Initial extends React.Component {
//const Initial = (props) => {
  constructor(){
    super()
    this.state = {
      prodUrl: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    fetch_prodRequests_urlInfo(this.state.prodUrl)
      .then(prodInfo => {
        console.log('the prodInfo in initial', prodInfo)
        console.log('this props', this.props)
        this.props.history.push({
          pathname: '/root/Shopper/form', 
          state: prodInfo
        })
      })
      .catch(console.error)
  }

  handleChange(e){
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]: value})
  }

  render() {
  // console.log('this props', this.props)
  let match = this.props.match;
  return (
    <div className="row-initial">
      <div className="initial-page col-md-12">
        <h1 className="h1-initial">Order from Anywhere, Deliveries made Everywhere</h1>
        <form className="form-search" onSubmit={this.handleSubmit}>
          <input type="text" name="prodUrl" className="input-medium" placeholder="Enter Product URL" value={this.state.prodUrl} onChange={this.handleChange} />
          <button type="submit" className="btn btn-primary btn-cons"> START!</button>
        </form>
      </div>
    </div>
  )
}
//}

}

export default Initial


/*      <div>
        <Link className="thumbnail" to={`/root/shopper`} >
        Order anything you want from around the world
        </Link>
      </div>*/
//<div>
//        <Link className="thumbnail" to={`/root/traveler`} >
//        Are you a traveler?
//        </Link>
//      </div>
// no need to make this connected component.. it's just links
// import {connect} from 'react-redux'
//
// export default connect(
//   state => ({}),
//   {login},
// )(Login)
