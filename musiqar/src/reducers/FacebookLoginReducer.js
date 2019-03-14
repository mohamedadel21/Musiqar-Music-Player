import {FACEBOOKLOGIN_ATTEMING,FACEBOOKLOGIN_SUCCESS} from '../actions/types';
import { State } from 'react-native-gesture-handler';

const INITIAL_STATE ={loading:false,token:null};

export default (state =INITIAL_STATE,action)=>{
 
    switch(action.type){

        case FACEBOOKLOGIN_ATTEMING:
        return{...State,loading:true}

        case FACEBOOKLOGIN_SUCCESS:
        return{loading:false,token:action.payload}

        default: return state;

    }

};