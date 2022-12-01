import React, { useState } from 'react';
import { loginSuccess } from 'features/redux/authSlice';
import { useDispatch,useSelector } from 'react-redux';
import {CreateAxios} from 'features/redux/createInstance';
import { FaSpinner } from 'react-icons/fa';
import './ContainerPlayMusicHeader.scss';
import * as theSong from 'apiServices/theSong';
import  ToastMessger  from "features/ToastMessger";
function ContainerPlayMusicHeader() {
	let formData = new FormData();
	const dispatch = useDispatch();
	const [loading,setLoading]=useState(false)
	const user= useSelector((state)=> state.auth.login?.currentUser)
	let axiosJWT= CreateAxios(user,dispatch,loginSuccess);
	const hanledUploadfile= async(e)=>{
		e.preventDefault();
		setLoading(true)
		if(e.target.files[0]!=null && user!=null){
			formData.append('IdListener',user.userInfor.idListener)
			formData.append('FileSong',e.target.files[0])
			const res= await theSong.UploadMusic(formData,axiosJWT)
			if(res){
				ToastMessger(res,"Upload thành công!")
			}else{
				ToastMessger(false,"Upload thất bại!")
			}
			
		}else{
			ToastMessger(false,"Lỗi máy chủ!")
		}
		setLoading(false)
	}
	return (
		<div className="container__header">
			<a href="/" className="container__header-title">
				<h3>Bài Hát&nbsp;</h3>
				<i className="bi bi-chevron-right container__header-icon"></i>
			</a>
			<h3 className="container__header-subtitle">Bài Hát</h3>
			<div className="container__header-actions">
				<div className="button is-small container__header-btn hide-on-mobile">
					<input
						disabled={loading}
						type="file"
						name="upload song"
						id="home__upload-input"
						className="container__header-input"
						onChange={hanledUploadfile}
					/>
					<label htmlFor="home__upload-input">
					{ loading && <FaSpinner icon="spinner" className="spinner" /> 
					}
					{
					 !loading && <i className="bi bi-upload container__header-icon"></i>
					}					
						&nbsp;Tải lên
					</label>
				</div>
				<button className="button is-small button-primary container__header-btn btn--play-all">
					<i className="bi bi-play-fill container__header-icon"></i>
					<span>Phát tất cả</span>
				</button>
			</div>
		</div>
	);
}

export default ContainerPlayMusicHeader;
