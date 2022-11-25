import React from "react";
import { loginSuccess } from 'features/redux/authSlice';
import { useDispatch,useSelector } from 'react-redux';
import {CreateAxios} from 'features/redux/createInstance'
import { useState } from "react";
import { CreateCategory } from "apiServices/theSong";
import  ToastMessger  from "features/ToastMessger";
import { useRef } from "react";

// import "./addSong.scss";
function AddCategory() {
const [nameCategory,setNameCategory]=useState("")
const [file,setFile]=useState();
const [disabled,setDisabled]=useState(false)
const refFile=useRef();
const dispatch = useDispatch();
const user= useSelector((state)=> state.auth.login?.currentUser)
let axiosJWT= CreateAxios(user,dispatch,loginSuccess);
let formData = new FormData();
const handelCreateCategory= async(e)=>{
  e.preventDefault();
  setDisabled(true)
  if (nameCategory !=null && file){
    formData.append('NameCategory', nameCategory); 
    formData.append('FileImage', file);  
    const res = await CreateCategory(formData,axiosJWT)
    if(res){
      ToastMessger(res,"Thêm thành công thể loại!")
      setNameCategory("")
      refFile.current.value=""
      setDisabled(false)
    }else{
      ToastMessger(res,"Thêm thất bại thể loại!")
      setDisabled(false)
    }
    
  }else{
    ToastMessger(false,"Thêm thất bại thể loại!")
    setDisabled(false)
  }


}
  return (
    <div className="center">
    <h1>Thêm thể loại</h1>
    <form onSubmit={handelCreateCategory} action="#">
      <div className="txt_field">
        <input value={nameCategory}  onChange={(e)=>setNameCategory(e.target.value)} type="text" required/>
        <span></span>
        <label>Nhập tên thể loại</label>
      </div>
      <div className="txt_field1">
        <label htmlFor="#">Chọn ảnh</label>
      </div>
      <div className="txt_field">
        <input ref={refFile} onChange={(e)=> setFile(e.target.files[0])} type="file" required/>
        <span></span>
      </div>
      <input disabled={disabled} type="submit" value="Thêm"/>
    </form>
  </div>



  );
}
export default AddCategory;
