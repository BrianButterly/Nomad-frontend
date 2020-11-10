import { combineReducers } from 'redux'
import user from './user'
import destinations from './destinations'
import hosts from './hosts'
import authReducer from './auth.js'
import stays from './stays'
import reviews from './reviews'
import review from './review'


export default combineReducers({
    user,
    destinations,
    hosts,
    auth: authReducer,
    stays,
    reviews,
    review
})