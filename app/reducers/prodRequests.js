import axios from 'axios'

const intialState = []
const reducer = (prevState = intialState, action) => {
  console.log("action is ", action)
  switch (action.type) {
  case GET_PRODREQUESTS:
    return action.prodRequests
  case ADD_PRODREQUEST:
    return [...prevState, action.prodRequest]
  }
  return prevState
}

// ACTION CREATORS

const GET_PRODREQUESTS = 'GET_PRODREQUESTS'
const ADD_PRODREQUEST = 'ADD_PRODREQUEST'
const REMOVE_PRODREQUEST = 'REMOVE_PRODREQUEST'

const get_prodRequests_AC = (prodRequests) => ({
  type: GET_PRODREQUESTS,
  prodRequests
})

const add_prodRequest_AC = (prodRequest) => ({
  type: ADD_PRODREQUEST,
  prodRequest
})

// THUNK CREATORS
export const fetch_prodRequests_urlInfo = (url) => {
  console.log('the url is', url)
  return axios.post('/api/prodRequests/scraper', {url})
    .then(res => {
      return (res.data)
    })
    .catch(console.error)
}

export const fetch_prodRequests_TC = () => dispatch => {
  return axios.get('/api/prodRequests')
    .then(res => res.data)
    .then(prodRequests => dispatch(get_prodRequests_AC(prodRequests)))
    .catch(console.error)
}

export const add_prodRequest_TC = (prodRequest_create) => dispatch => {
  return axios.post('/api/prodRequests', prodRequest_create)
    .then(res => res.data)
    .then(added_prodRequest => {
      dispatch(add_prodRequest_AC(added_prodRequest))
    })
    .catch(console.error)
}

export default reducer
