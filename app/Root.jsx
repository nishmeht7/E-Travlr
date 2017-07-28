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
        <nav>
          <div className="nav nav-tabs">
              <span>Home | </span>
              <span>blah | </span>
              <span>blah</span>
            {user ? <WhoAmI/> : <Login/>}
          </div>
        </nav>
        <Switch>
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
