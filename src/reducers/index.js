import { combineReducers } from 'redux'
import user from './user'
import destinations from './destinations'
import hosts from './hosts'
import authReducer from './auth.js'

export default combineReducers({
    user,
    destinations,
    hosts,
    authReducer
})