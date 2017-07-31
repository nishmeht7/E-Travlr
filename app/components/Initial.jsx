import React, { Component } from 'react'
import {
  Link,
} from 'react-router-dom';

const Initial = (props) => {
  let match = props.match;
  return (
    <div className="row-initial">
      <div className="initial-page col-md-12">
        <h1 className="h1-initial">Order from Anywhere, Deliveries made Everywhere</h1>
        <form className="form-search">
          <input type="text" className="input-medium" placeholder="Enter Product URL"/>
          <button type="submit" className="btn btn-primary btn-cons"> START!</button>
        </form>
      </div>
    </div>
  )
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
