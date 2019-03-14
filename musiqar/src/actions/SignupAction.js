import axios from 'axios';

import {SIGNUP_ATTEMING,SIGNUP_FAILED, SIGNUP_SUCCESS} from './types';
import {registerUrl,client_id,client_secret} from '../Constant/Urls';

export const signup =(first_name,last_name,username,email,password)=>{

    return  (dispatch)=>{

        dispatch({type:SIGNUP_ATTEMING});
       axios.post(registerUrl,{
            "client_id" : client_id,
            "client_secret" : client_secret,
            "username": username,
            "email":email,
            "password": password ,
            "first_name": first_name,
            "last_name": last_name
        }).then(Response=>{
            console.log(Response.data.access_token)
            alert('success')
            dispatch({type:SIGNUP_SUCCESS,payload:Response.data.access_token})
            
            if(!Response.data.access_token){
                dispatch({type:SIGNUP_FAILED,payload:true})
  
            }

        }).catch(error=>{

        })

       






    }
}