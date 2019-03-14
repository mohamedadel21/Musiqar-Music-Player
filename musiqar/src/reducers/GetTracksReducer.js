import {GETALL_ATTEMING,GETALL_SUCCESS,GETONE_SUCCESS} from '../actions/types';
import { State } from 'react-native-gesture-handler';

const INITIAL_STATE ={loading:false,tracks:[],track:{}};

export default (state =INITIAL_STATE,action)=>{
 
    switch(action.type){

        case GETALL_ATTEMING:
        return{...State,loading:true}

        case GETALL_SUCCESS:
        return{loading:false,tracks:action.payload}

        case GETONE_SUCCESS:
        return{loading:false,track:action.payload2}

        default: return state;

    }

};