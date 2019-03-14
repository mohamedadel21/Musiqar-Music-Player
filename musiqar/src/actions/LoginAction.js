import axios from 'axios';

import {LOGIN_ATTEMING,LOGIN_FAILED, LOGIN_SUCCESS} from './types';
import {loginUrl,client_id,client_secret} from '../Constant/Urls';

export const login =(email,password)=>{

    return  (dispatch)=>{

        dispatch({type:LOGIN_ATTEMING});
       axios.post(loginUrl,{
            "client_id" : client_id,
            "client_secret" : client_secret,
            "email":email,
            "password": password ,
        }).then(Response=>{
            console.log(Response.data.access_token)
            dispatch({type:LOGIN_SUCCESS,payload:Response.data.access_token})
            if(!Response.data.access_token){
                dispatch({type:LOGIN_FAILED,payload:true})
  
            }
        }).catch(error=>{
            console.log(error);

        })

       






    }
}