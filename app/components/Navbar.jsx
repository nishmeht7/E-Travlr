'use strict mode'

import React from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'

const Navbar = (props) => {
  const user = props.user
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top navbar-custom">
          <div className="navbar-header page-scroll">
              <button type="button" data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" className="navbar-toggle">
                  <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
              </button>
              <Link to="/root" className="navbar-brand">E-Travlr</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                      <li className="hidden">
                          <a href="#page-top"></a>
                      </li>
                      <li className="page-scroll">
                          <a href="#about"><span>How this works?</span></a>
                      </li>
                      <li className="page-scroll">
                          <Link to="/root/Shopper">Start Shopping Internationally</Link>
                      </li>
                      <li className="page-scroll">
                          <Link to="/root/Traveler">Make $$ while Traveling</Link>
                      </li>

                      {user ?
                        <li className="page-scroll">
                          <a href="#connect"> {user}</a>
                      </li>
                        :
                        <li className="page-scroll">
                          <a href="#connect">Login</a>
                      </li>}

                  </ul>
              </div>
      </nav>
  )
}
const mapState = ({ auth }) => ({ user: auth });
export default connect(mapState)(Navbar)
