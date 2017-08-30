import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'

import Jokes from './Jokes'
import Login from './Login'
import WhoAmI from './WhoAmI'
import NotFound from './NotFound'
import { Initial } from './Initial'
import ShopperForm from './ShopperForm'

class Shopper extends React.Component {

  render(){
    console.log('the props in shopper are',)
    let user = this.props.user;
    let match = this.props.match;
    return (
      <div>
        <Switch>
          <Route exact path={`${match.url}/form`} component={ShopperForm} />
          <Redirect exact from={`${match.url}`} to={`${match.url}/form`} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

const mapState = ({ auth }) => ({ user: auth });
export default connect(mapState)(Shopper);
