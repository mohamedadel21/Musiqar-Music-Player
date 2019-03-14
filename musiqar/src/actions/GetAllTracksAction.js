import axios from 'axios';

import {GETALL_SUCCESS,GETALL_ATTEMING,GETONE_SUCCESS} from './types';
import {getTracksURL,client_id,client_secret} from '../Constant/Urls';

export const getAllTacks =(access_token)=>{

    return  (dispatch)=>{

        var headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer '+access_token
 
        }

        dispatch({type:GETALL_ATTEMING});

        axios({ method: 'GET', url: getTracksURL, headers:headers }).then(Response=>{

            dispatch({type:GETALL_SUCCESS,payload:Response.data.list.data})

        }).catch(error=>{
            console.log(error);

        })
    }


}


export const getOneTacks =(access_token,id)=>{

    return  (dispatch)=>{

        var headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer '+access_token
 
        }

        axios({ method: 'GET', url: getTracksURL, headers:headers }).then(Response=>{

            Response.data.list.data.forEach(item => {
                if(item.id==id){
                    dispatch({type:GETONE_SUCCESS,payload2:item})

                }
            });


        }).catch(error=>{
            console.log(error);

        })
    }
}