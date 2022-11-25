import React from "react";
import { loginSuccess } from 'features/redux/authSlice';
import { useDispatch,useSelector } from 'react-redux';
import {CreateAxios} from 'features/redux/createInstance'
import { useState } from "react";
import { CreateAlbum, CreateCategory } from "apiServices/theSong";
import  ToastMessger  from "features/ToastMessger";
import { useRef } from "react";
// import "./addSong.scss";
function AddAlbum() {

  const [nameAlbum,setNameAlbum]=useState("")
const [file,setFile]=useState();
const [disabled,setDisabled]=useState(false)
const refFile=useRef();
const dispatch = useDispatch();
const user= useSelector((state)=> state.auth.login?.currentUser)
let axiosJWT= CreateAxios(user,dispatch,loginSuccess);
let formData = new FormData();
const handelCreateAlbum= async(e)=>{
  e.preventDefault();
  setDisabled(true)
  if (nameAlbum !=null && file){
    formData.append('NameAlbum', nameAlbum); 
    formData.append('FileImage', file);  
    const res = await CreateAlbum(formData,axiosJWT)
    if(res){
      ToastMessger(res,"Thêm ablum thành công !")
      setNameAlbum("")
      refFile.current.value=""
      setDisabled(false)
    }else{
      ToastMessger(res,"Thêm ablum thất bại !")
      setDisabled(false)
    }
    
  }else{
    ToastMessger(false,"Thêm ablum thất bại !")
    setDisabled(false)
  }
}
  return (
    <div className="center">
    <h1>Thêm album</h1>
    <form onSubmit={handelCreateAlbum} action="#">
      <div className="txt_field">
        <input value={nameAlbum} onChange={(e)=>setNameAlbum(e.target.value)} type="text" required/>
        <span></span>
        <label>Nhập tên album</label>
      </div>
      <div className="txt_field1">
        <label htmlFor="#">Chọn ảnh</label>
      </div>
      <div className="txt_field">
        <input ref={refFile} onChange={(e)=> setFile(e.target.files[0])}  type="file" required/>
        <span></span>
      </div>
      <input disabled={disabled} type="submit" value="Thêm"/>
    </form>
  </div>



  );
}
export default AddAlbum;
