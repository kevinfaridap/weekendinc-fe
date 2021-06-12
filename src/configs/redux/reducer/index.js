import {combineReducers} from 'redux'
import helpReducer from './helps'


const rootReducer = combineReducers({
    helps: helpReducer,
})


export default rootReducer