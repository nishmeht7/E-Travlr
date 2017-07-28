import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'

import Jokes from './Jokes'
import Login from './Login'
import WhoAmI from './WhoAmI'
import NotFound from './NotFound'
import TravelerForm from './TravelerForm'

class Traveler extends React.Component {

  render(){
    let user = this.props.user;
    let match = this.props.match;
    return (
      <div>
        <Switch>
          <Route exact path={`${match.url}/form`} component={TravelerForm} />
          <Redirect exact from={`${match.url}`} to={`${match.url}/form`} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

const mapState = ({ auth }) => ({ user: auth });
export default connect(mapState)(Traveler);
