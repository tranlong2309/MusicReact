import clsx from 'clsx';
import { toggleShowLoginModal } from 'configSlice';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ThemeModal.scss';
import { BsFacebook,BsGoogle } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import { useState } from 'react';
import { LoginUser,RegisterUser } from 'apiServices/apiLogin';
import { useNavigate } from 'react-router-dom';


function LoginModal() {
	const dispatch = useDispatch();
	const [controler,setControler]=useState("modal-container")
	const[username,setUsername]=useState("")
	const[password,setPassword]=useState("")
	const[firstName,setFirstName]=useState("")
	const[lastName,setLastName]=useState("")
	const[rUsername,setrUsername]=useState("")
	const[rPassword,setRassword]=useState("")
	const { isShowLoginModal} = useSelector(state => state.config);
	const navigate=useNavigate()
	const handleCloseLoginModal = () => {
		dispatch(toggleShowLoginModal(false));
	};
	const SignUp=()=>{
		setControler("modal-container right-panel-active")
	}
	const SignIn=()=>{
		setControler("modal-container")
		}

	const handleLogin=(e)=>{
		e.preventDefault();
		const newUser={
			username,
			password
		};
		LoginUser(newUser,dispatch,navigate);
	}
	const handelRegisterUser=(e)=>{
		e.preventDefault();
		const newUser={
			firstName:firstName,
			lastName:lastName,
			userName:rUsername,
			password:rPassword
		}
		RegisterUser(newUser,dispatch,navigate);
	}
	
	return (
		<div
			className={clsx('modal-theme', 'grid', {
				open: isShowLoginModal,
			
			})}
		>
			<div className={controler}  >
				<div className="form-container sign-up-container">
					<form onSubmit={handelRegisterUser} className='form-login' action="#">
						<h1 className='h1-login'>Đăng Ký Tài Khoản</h1>
						<div className="social-container">
							<a  href="#" className="a-login social"><BsFacebook/></a>
							<a href="#" className="a-login social"><BsGoogle/></a>
							<a href="#" className="a-login social"><FaTiktok/></a>
						</div>
						<span className='span-login'>hoặc sử dụng email của bạn để đăng ký</span>
						<input className='input-login' onChange={(e)=>setFirstName(e.target.value)}  type="text" placeholder="Họ" />
						<input className='input-login' onChange={(e)=>setLastName(e.target.value)}  type="text" placeholder="Tên" />
						<input className='input-login' onChange={(e)=>setrUsername(e.target.value)}  type="text" placeholder="UserName" />
						<input className='input-login' onChange={(e)=>setRassword(e.target.value)}  type="password" placeholder="Password" />
						<button className='button-login' type='submit' >Đăng ký</button>
						<div className="modal__close-btn" onClick={handleCloseLoginModal}>
							<i className="bi bi-x-lg close  "></i>	
							</div>
					</form>
				</div>
				<div className="form-container sign-in-container">
					<form onSubmit={handleLogin} className='form-login' action="#">
						<h1 className='h1-login'>Đăng nhập</h1>
						<div className="social-container">
							<a  href="#" className="a-login social"><BsFacebook/></a>
							<a href="#" className="a-login social"><BsGoogle/></a>
							<a href="#" className="a-login social"><FaTiktok/></a>
						</div>
						<span className='span-login'>hoặc sử dụng tài khoản của bạn</span>
						<input className='input-login' onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="UserName" />
						<input className='input-login'  onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder="Password" />
						<a className='a-login' href="#">Quên mật khẩu?</a>
						<button className='button-login' type='submit'>Đăng nhập</button>
						
					</form>
				</div>
				<div className="overlay-container">
					<div className="overlay-login">
						<div className="overlay-panel overlay-left">
							<h1 className='h1-login'>Chào mừng trở lại!</h1>
							<p className='p-login '>Để giữ kết nối với chúng tôi, vui lòng đăng nhập bằng thông tin cá nhân của bạn</p>
							<button className="button-login ghost" onClick={SignIn} id="signIn">Đăng nhập</button>
							
						</div>
						<div className="overlay-panel overlay-right">
							<h1 className='h1-login'>Chào bạn!</h1>
							<p className='p-login '>Nhập thông tin cá nhân của bạn và bắt đầu hành trình với chúng tôi</p>
							<button className="button-login ghost" onClick={SignUp} >Đăng ký</button>
							<div className="modal__close-btn" onClick={handleCloseLoginModal}>
							<i className="bi bi-x-lg close  "></i>	
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
	);
}

export default LoginModal;
