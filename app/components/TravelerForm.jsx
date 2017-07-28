import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'

import Jokes from './Jokes'
import Login from './Login'
import WhoAmI from './WhoAmI'
import NotFound from './NotFound'
import { Initial } from './Initial'

/* note.. getting this warning:

Warning: TravelerForm is changing an uncontrolled input of type text to be
controlled. Input elements should not switch from uncontrolled to controlled
(or vice versa). Decide between using a controlled or uncontrolled input
element for the lifetime of the component.
More info: https://fb.me/react-controlled-components

*/


class TravelerForm extends React.Component {
  constructor(){
    super()
    this.state = {
      trips: [{
        from: '',
        to: '',
        dates: '',
      }]
      // roundTripchecked: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addTrip = this.addTrip.bind(this)
  }

  handleSubmit(){
    console.log('submit code here... dispatch travlerform submit thunks')
  }

  handleChange(e){
    const name = e.target.name
    const value = e.target.value
    const id = e.target.id.split('-')[1]
    // console.log(value)
    // if(name === 'roundTrip'){
    //   const valueBool = (value === 'true')
    //   this.setState({[name]: !valueBool}, () => console.log(this.state))
    // }
    const trips = this.state.trips
    trips[id] = Object.assign(trips[id], {[name]: value})
    this.setState({ trips })
  }

  addTrip(e){
    e.preventDefault()
    const trips = this.state.trips
    trips.push({
      from: '',
      to: '',
      dates: '',
    })
    this.setState({ trips })
  }

  render(){
    let user = this.props.user;
    let match = this.props.match;
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit} >

        { this.state.trips.map((trip, idx) => {
          return (
            <div key={'trip-'+idx}>
              <div className="form-group">
                <label className="col-sm-2 control-label">From</label>
                <div className="col-sm-10">
                  <input id={'trip-'+idx} type="text" name="from" value={trip.from} className="form-control" placeholder="" onChange={this.handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-2 control-label">To</label>
                <div className="col-sm-10">
                  <input id={'trip-'+idx} type="text" name="to" value={trip.to} className="form-control" placeholder="" onChange={this.handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-2 control-label">Dates</label>
                <div className="col-sm-10">
                  <input id={'trip-'+idx} type="number" name="dates" value={trip.dates} className="form-control" placeholder="" onChange={this.handleChange} />
                </div>
              </div>

            </div>
          )
        })}

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-primary" onClick={this.addTrip}>Add Trip</button>
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>

          {/* <div>
            <input type="checkbox" id="roundTrip" name="roundTrip" checked={this.state.roundTripchecked} value={this.state.roundTripchecked} onChange={this.handleChange}/>
            <label for="roundTrip">Round Trip?</label>
          </div> */}

        </form>
    )
  }
}

const mapState = ({ auth }) => ({ user: auth });
export default connect(mapState)(TravelerForm);
