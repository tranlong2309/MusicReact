import axios from "axios";
import jwtDecode from "jwt-decode";
import {loginSuccess} from 'react-redux'
import { refreshToken } from "apiServices/apiLogin";

export const CreateAxios =(user,dispatch,stateSuccess)=>{
    const axiosJWT= axios.create()

	axiosJWT.interceptors.request.use(
		async(config)=>{
			let date =new Date()
			const decoedToken= jwtDecode(user?.jwtToken);
			if(decoedToken.exp < date.getTime()/1000 ){
				const data= await refreshToken({ refreshToken:user?.refreshToken});
				const refreshUser={
					...user,
					jwtToken:data.jwtToken
				};
				dispatch(stateSuccess(refreshUser));
				config.headers["Authorization"] ="Bearer "+data.jwtToken
                
			}else{
                config.headers["Authorization"] ="Bearer "+user?.jwtToken
            }
			return config;
		},(err)=>{
			return Promise.reject(err)
		}
	);
    return axiosJWT;
};