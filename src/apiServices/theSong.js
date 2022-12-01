import axios from 'axios';
import * as request from 'utils/request'

export const getAll=async(id)=>{
    try {
        const res = await request.get('TheSong/GetAll',{
            params:{
                id
            }
        });
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
            const res = await request.post('Singer/create-singer',formData,config)
            return res
        }
       
    } catch (error) {
        console.log(error)
    }
}

export const getAllCategory=async()=>{
    try {
        const res = await request.get('TheSong/Get-category');
        return res
    } catch (error) {
        console.log(error)
    }
}

export const getBrandCategoryAPI=async()=>{
    try {
        const res = await request.get('TheSong/get-brand-category');
        return res
    } catch (error) {
        console.log(error)
    }
}

export const CreateCategory=async(formData,axiosJWT)=>{
    try {
        const res = await axiosJWT.post('https://localhost:44348/TheSong/create-category',formData,{ headers: { 'content-type': 'multipart/form-data' }})
        return res.data  
        }
        catch(error)
        {
            console.log(error)
        }
}
export const CreateAlbum=async(formData,axiosJWT)=>{
    try {
        const res = await axiosJWT.post('https://localhost:44348/TheSong/create-album',formData,{ headers: { 'content-type': 'multipart/form-data' }})
        return res.data  
        }
        catch(error)
        {
            console.log(error)
        }
}

export const getCategory=async()=>{
    try {
        const res = await request.get('TheSong/get-all-category');
        return res
    } catch (error) {
        console.log(error)
    }
}

export const getAlbum=async()=>{
    try {
        const res = await request.get('TheSong/get-all-album');
        return res
    } catch (error) {
        console.log(error)
    }
}
export const CreateTheSongAPI=async(formData,axiosJWT)=>{
    try {
        const res = await axiosJWT.post('https://localhost:44348/TheSong/create-the-song',formData,{ headers: { 'content-type': 'multipart/form-data' }})
        return res.data  
        }
        catch(error)
        {
            console.log(error)
        }
}

export const SearchSongAPI=async(keyword)=>{
    try {
        const res = await request.get('TheSong/get-search-song',{
            params:{
                keyword
            }
        })
        return res
        }
        catch(error)
        {
            console.log(error)
        }
}
export const UpdateListen=async(idsong)=>{
    try {
        const res = await axios.put('https://localhost:44348/TheSong/update-listens?id='+idsong)
        return res
        }
        catch(error)
        {
            console.log(error)
        }
}
export const getSongRankAPI=async()=>{
    try {
        const res = await request.get('TheSong/get-song-chart');
        return res
    } catch (error) {
        console.log(error)
    }
}
export const UploadMusic=async(formData,axiosJWT)=>{
    try {
        const res = await axiosJWT.post('https://localhost:44348/TheSong/create-upload',formData,{ headers: { 'content-type': 'multipart/form-data' }})
        return res
        }
        catch(error)
        {
            console.log(error)
        }
}

export const getMusicListener=async(id,axiosJWT)=>{
    try {
        const res = await axiosJWT.get('https://localhost:44348/TheSong/get-music-listener?id='+id)
        return res.data
        }
        catch(error)
        {
            console.log(error)
        }
}