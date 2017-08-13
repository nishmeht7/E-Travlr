import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  prodRequests: require('./prodRequests').default,
})

export default rootReducer
