import { combineReducers } from 'redux'
import user from './user'
import destinations from './destinations'
import hosts from './hosts'


export default combineReducers({
    user,
    destinations,
    hosts
})