import * as request from 'utils/request'

export const getAll=async()=>{
    try {
        const res = await request.get('TheSong/GetAll');
        return res
    } catch (error) {
        console.log(error)
    }
}

export const UploadFile=async(e)=>{
    try {
        let formData = new FormData();
        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        if(e.target && e.target.files[0]){
            formData.append('fileProfile', e.target.files[0]);  
            const res = await request.post('TheSong/upload-file',formData,config)
            return res
        }
       
    } catch (error) {
        console.log(error)
    }
}