import axios from "axios";
import request from "utils/request";

export const CreateSinger=async(formData,axiosJWT)=>{
    try { 
            const res = await axiosJWT.post('https://localhost:44348/Singer/create-singer',formData,{ headers: { 'content-type': 'multipart/form-data' }})
            return res.data
       
    } catch (error) {
        console.log(error)
    }
}

export const getallSinger=async()=>{
    try {
            const res = await request.get('Singer/get-all-singer')
            return res.data 
    } catch (error) {
        console.log(error)
    }
}