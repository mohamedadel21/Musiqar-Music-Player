import {SIGNUP_ATTEMING,SIGNUP_FAILED,SIGNUP_SUCCESS, LOGIN_SUCCESS} from '../actions/types';
import { State } from 'react-native-gesture-handler';

const INITIAL_STATE ={loading:false,token:null,error:false};

export default (state =INITIAL_STATE,action)=>{
 
    switch(action.type){

        case SIGNUP_ATTEMING:
        return{...State,loading:true}

        case SIGNUP_SUCCESS:
        return{loading:false,token:action.payload}

        case SIGNUP_FAILED:
        return{loading:false,error:action.payload}

        default: return state;

    }

};