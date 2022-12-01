import React, { useEffect, useState } from "react";
import {CreateAxios} from 'features/redux/createInstance'
import { loginSuccess } from 'features/redux/authSlice';
import { useDispatch,useSelector } from 'react-redux';
import { CreateSinger } from "apiServices/apiSinger";
import ToastMessger from "features/ToastMessger";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
// import "./addSong.scss";
function AddArtist() {
  const [nameSinger,setNameSinger]=useState("")
  const [fileImage,setFileImage]=useState()
  const [disabled,setDisabled]=useState(false)
  const ref=useRef()
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const user= useSelector((state)=> state.auth.login?.currentUser)
  let axiosJWT= CreateAxios(user,dispatch,loginSuccess);
  let formData = new FormData();
  useEffect(()=>{
    if(user?.userInfor?.role!=0){
			navigate("/")
		}
  },[])
const handleCreateSinger=async(e)=>{
  e.preventDefault();
  setDisabled(true)
  formData.append('NameSinger', nameSinger); 
  formData.append('FileImage', fileImage); 
  const res=await CreateSinger(formData,axiosJWT);
  if (res){
    ToastMessger(res,"Thêm nghệ sĩ thành công!");
    setNameSinger("");
    ref.current.value="";
    setDisabled(false);
    
  }else{
    ToastMessger(res,"Thêm nghệ sĩ thất bại!");
    setNameSinger("");
    ref.current.value="";
    setDisabled(false);
  }
}
  return (
    <div className="center">
    <h1>Thêm nghệ sĩ</h1>
    <form onSubmit={handleCreateSinger} action="#">
      <div className="txt_field">
        <input value={nameSinger} type="text" onChange={(e)=>setNameSinger(e.target.value)}  required/>
        <span></span>
        <label>Nhập tên nghệ sĩ</label>
      </div>
      <div className="txt_field1">
        <label htmlFor="#">Chọn ảnh</label>
      </div>
      <div className="txt_field">
        <input ref={ref} onChange={(e)=> setFileImage(e.target.files[0])} type="file" required/>
        <span></span>
      </div>
      <input disabled={disabled} type="submit" value="Thêm"/>
    </form>
  </div>



  );
}
export default AddArtist;
