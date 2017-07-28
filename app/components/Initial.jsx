import React, { Component } from 'react'
import {
  Link,
} from 'react-router-dom';

const Initial = (props) => {
  let match = props.match;
  return (
    <div>
      <div>
        <Link className="thumbnail" to={`/root/traveler`} >
        Are you a traveler?
        </Link>
      </div>

      <div>
        <Link className="thumbnail" to={`/root/shopper`} >
        Are you a shopper?
        </Link>
      </div>
    </div>
  )
}

export default Initial
// no need to make this connected component.. it's just links
// import {connect} from 'react-redux'
//
// export default connect(
//   state => ({}),
//   {login},
// )(Login)
