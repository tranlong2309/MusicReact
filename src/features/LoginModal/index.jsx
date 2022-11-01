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
	const[name,setName]=useState("")
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
			name,
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
						<h1 className='h1-login'>Create Account</h1>
						<div className="social-container">
							<a  href="#" className="a-login social"><BsFacebook/></a>
							<a href="#" className="a-login social"><BsGoogle/></a>
							<a href="#" className="a-login social"><FaTiktok/></a>
						</div>
						<span className='span-login'>or use your email for registration</span>
						<input className='input-login' onChange={(e)=>setName(e.target.value)}  type="text" placeholder="Name" />
						<input className='input-login' onChange={(e)=>setrUsername(e.target.value)}  type="text" placeholder="UserName" />
						<input className='input-login' onChange={(e)=>setRassword(e.target.value)}  type="password" placeholder="Password" />
						<button className='button-login' type='submit' >Sign Up</button>
						<div className="modal__close-btn" onClick={handleCloseLoginModal}>
							<i className="bi bi-x-lg close  "></i>	
							</div>
					</form>
				</div>
				<div className="form-container sign-in-container">
					<form onSubmit={handleLogin} className='form-login' action="#">
						<h1 className='h1-login'>Sign in</h1>
						<div className="social-container">
							<a  href="#" className="a-login social"><BsFacebook/></a>
							<a href="#" className="a-login social"><BsGoogle/></a>
							<a href="#" className="a-login social"><FaTiktok/></a>
						</div>
						<span className='span-login'>or use your account</span>
						<input className='input-login' onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="UserName" />
						<input className='input-login'  onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder="Password" />
						<a className='a-login' href="#">Forgot your password?</a>
						<button className='button-login' type='submit'  >Sign In</button>
						
					</form>
				</div>
				<div className="overlay-container">
					<div className="overlay-login">
						<div className="overlay-panel overlay-left">
							<h1 className='h1-login'>Welcome Back!</h1>
							<p className='p-login '>To keep connected with us please login with your personal info</p>
							<button className="button-login ghost" onClick={SignIn} id="signIn">Sign In</button>
							
						</div>
						<div className="overlay-panel overlay-right">
							<h1 className='h1-login'>Hello, Friend!</h1>
							<p className='p-login '>Enter your personal details and start journey with us</p>
							<button className="button-login ghost" onClick={SignUp} >Sign Up</button>
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
