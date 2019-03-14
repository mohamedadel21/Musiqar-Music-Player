import {LOGIN_ATTEMING,LOGIN_FAILED, LOGIN_SUCCESS} from '../actions/types';
import { State } from 'react-native-gesture-handler';

const INITIAL_STATE ={loading:false,token:null,error:false};

export default (state =INITIAL_STATE,action)=>{
 
    switch(action.type){

        case LOGIN_ATTEMING:
        return{...State,loading:true}

        case LOGIN_SUCCESS:
        return{loading:false,token:action.payload}
        case LOGIN_FAILED:
        return{loading:false,error:action.payload}

        default: return state;

    }

};