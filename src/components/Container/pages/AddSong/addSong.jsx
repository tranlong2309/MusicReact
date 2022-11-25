import { CreateTheSongAPI, getAlbum, getCategory } from "apiServices/theSong";
import React from "react";
import { loginSuccess } from 'features/redux/authSlice';
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import {CreateAxios} from 'features/redux/createInstance'
import  ToastMessger  from "features/ToastMessger";
import { useRef } from "react";
import "./addSong.scss";
function AddSong() {
  const[category,setCategory]=useState([]);
  const[ablum,setAlbum]=useState([]);
  const [nameTheSong,setNameTheSong]=useState("")
  const [fileMusic,setFileMuisc]=useState();
  const [fileImg,setFileImg]=useState();
  const [idCategory,setIdCategory]=useState("")
  const [idAlbum,setIdAlbum]=useState("")
  const [disabled,setDisabled]=useState(false)
  const refFileMusic= useRef();
  const refFileImg= useRef();
  const dispatch = useDispatch();
  const user= useSelector((state)=> state.auth.login?.currentUser)
  let axiosJWT= CreateAxios(user,dispatch,loginSuccess);
  let formData = new FormData();
  useEffect(()=>{
    const fechAPICategory=async()=>{
      const res= await getCategory();
      setCategory(res)
    }
    const fechAPIAlbum=async()=>{
      const res= await getAlbum();
      setAlbum(res)
    }
    fechAPIAlbum();
    fechAPICategory();

  },[])
  const handleCreateSong= async(e)=>{
    e.preventDefault();
    setDisabled(true)
    if(nameTheSong && fileMusic && fileImg){
      formData.append('NameSong', nameTheSong); 
      formData.append('FileSong', fileMusic);  
      formData.append('FileImage', fileImg);  
      formData.append('IdCategory', idCategory);  
      const res= await CreateTheSongAPI(formData,axiosJWT)
      if(res){
        ToastMessger(res,"Thêm nhạc thành công !")
      }else{
        ToastMessger(res,"Thêm nhạc thất bại !")
      }
      setNameTheSong("");
      refFileMusic.current.value="";
      refFileImg.current.value="";
    } else{
      ToastMessger(false,"Vui lòng nhập đầy đủ thông tin !")
    }
  }
  return (
    <div className="center">
    <h1>Thêm nhạc</h1>
    <form onSubmit={handleCreateSong} action="#">
      <div className="txt_field">
        <input value={nameTheSong} onChange={(e)=> setNameTheSong(e.target.value)} type="text" required/>
        <span></span>
        <label>Nhập tên nhạc</label>
      </div>
      <div className="txt_field1">
        <label htmlFor="#">Chọn file</label>
      </div>
      <div className="txt_field">
        <input ref={refFileMusic} onChange={(e)=> setFileMuisc(e.target.files[0])}  type="file" required/>
        <span></span>
      </div>
      <div className="txt_field1">
        <label htmlFor="#">Chọn ảnh</label>
      </div>
      <div className="txt_field">
        <input ref={refFileImg}  onChange={(e)=> setFileImg(e.target.files[0])} type="file" required/>
        <span></span>
      </div>
      <div className="txt_field1">
        <select onChange={(e)=> setIdCategory(e.target.value)}>
        {category.map((item,index)=>
          ( <option value={item.id}>{item.nameCategory}</option>) 
          )}
        </select>
        <select onChange={(e)=> setIdAlbum(e.target.value)}>
        {ablum.map((item,index)=>
          ( <option value={item.id}>{item.nameAlbum}</option>) 
          )}
        </select>
      </div>
      <input disabled={disabled} type="submit" value="Tải lên"/>
    </form>
  </div>



  );
}
export default AddSong;
