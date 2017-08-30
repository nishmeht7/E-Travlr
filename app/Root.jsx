import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import Initial from './components/Initial'
import Traveler from './components/Traveler'
import Shopper from './components/Shopper'
import ShopperForm from './components/ShopperForm'
import Navbar from './components/Navbar'

console.log(Initial)

class Root extends React.Component {
  constructor(){
    super()
    this.state = {activeItem: ''}//??
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name })//wtf is this

  render(){
    let match = this.props.match;
    return (
      <div>
        <Navbar />
        <div className = 'top10'>
        <Switch>
          <Route path={`${match.url}/login`} component={Login} />
          <Route path={`${match.url}/WhoAmI`} component={WhoAmI} />
          <Route path={`${match.url}/traveler`} component={Traveler} />
          <Route exact path={`${match.url}/start`} component={Initial} />
          <Redirect exact from={`${match.url}`} to={`${match.url}/start`} />

          <Route path={`${match.url}/shopper`} component={ShopperForm} />
          <Route component={NotFound} />
        </Switch>
        </div>
      </div>
    )
  }
}

export default Root

// <div className="nav nav-tabs">
//               <span>Home | </span>
//               <span>blah | </span>
//               <span>blah</span>
//             {user ? <WhoAmI/> : <Login/>}
//           </div>
