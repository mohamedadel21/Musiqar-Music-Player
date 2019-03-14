import axios from 'axios';

import {FACEBOOKLOGIN_ATTEMING,FACEBOOKLOGIN_FAILED,FACEBOOKLOGIN_SUCCESS} from './types';
import {facebookLoginUrl,client_id,client_secret} from '../Constant/Urls';
import {Facebook } from 'expo';
export const facebookLogin =()=>{

    return async (dispatch)=>{

        dispatch({type:FACEBOOKLOGIN_ATTEMING});

        const {token,type}= await Facebook.logInWithReadPermissionsAsync('2318390868206080',{
            permissions:['public_profile']
        });
       axios.post(facebookLoginUrl,{
            "client_id" : client_id,
            "client_secret" : client_secret,
            "access_token":token
          
        }).then(Response=>{
            console.log(Response.data.access_token)
            dispatch({type:FACEBOOKLOGIN_SUCCESS,payload:Response.data.access_token})

        }).catch(error=>{
            console.log(error);

        })

       






    }
}