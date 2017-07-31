import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'

import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import Initial from './components/Initial'
import Traveler from './components/Traveler'
import Shopper from './components/Shopper'

console.log(Initial)

class Root extends React.Component {
  constructor(){
    super()
    this.state = {activeItem: ''}//??
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name })//wtf is this

  render(){
    let user = this.props.user;
    let match = this.props.match;
    return (
      <div>
      <nav className="navbar navbar-inverse navbar-fixed-top navbar-custom">
            <div className="navbar-header page-scroll">
                <button type="button" data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" className="navbar-toggle">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <a href="#me" className="navbar-brand">E-Travlr</a>
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
                            <a href="/root/Shopper">Start Shopping Internationally</a>
                        </li>
                        <li className="page-scroll">
                            <a href="/root/Traveler">Make $$ while Traveling</a>
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
        <Switch>
          <Route path={`${match.url}/login`} component={Login} />
          <Route path={`${match.url}/WhoAmI`} component={WhoAmI} />
          <Route path={`${match.url}/traveler`} component={Traveler} />
          <Route exact path={`${match.url}/start`} component={Initial} />
          <Redirect exact from={`${match.url}`} to={`${match.url}/start`} />

          <Route path={`${match.url}/shopper`} component={Shopper} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

const mapState = ({ auth }) => ({ user: auth });
export default connect(mapState)(Root);

// <div className="nav nav-tabs">
//               <span>Home | </span>
//               <span>blah | </span>
//               <span>blah</span>
//             {user ? <WhoAmI/> : <Login/>}
//           </div>
