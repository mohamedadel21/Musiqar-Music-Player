import {combineReducers} from 'redux';
import LoginReducer from '../reducers/LoginReducer'
import SignupReducer from '../reducers/SignupReducer'
import FacebookLoginReducer from '../reducers/FacebookLoginReducer'
import GetTracksReducer from '../reducers/GetTracksReducer'

export default combineReducers({
    login:LoginReducer,
    signup:SignupReducer,
    facebook:FacebookLoginReducer,
    tracks:GetTracksReducer,
   
})