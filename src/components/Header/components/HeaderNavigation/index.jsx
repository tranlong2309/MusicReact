import { toggleShowThemeModal,toggleShowLoginModal } from 'configSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SettingMenu from './components/SettingMenu';
import SettingProfile from './components/SettingMenu/settingprofile';
import './HeaderNavigation.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {logOut } from 'apiServices/apiLogin'
import {CreateAxios} from 'features/redux/createInstance'
import { logOutSuccess } from 'features/redux/authSlice';
function HeaderNavigation() {
	const dispatch = useDispatch();
    const navigate=useNavigate();
	const [open, setOpen] = useState(false);
	const [openSettingProfile, setOpenSettingProfile] = useState(false);
	const user= useSelector((state)=> state.auth.login?.currentUser)
	const isFetching= useSelector((state)=> state.auth.login?.isFetching)
	let axiosJWT= CreateAxios(user,dispatch,logOutSuccess);
	useEffect(() => {
		const handleCloseSettingMenu = e => {
			const settingMenu = e.target.closest('.setting__menu');
			const navSettingBtn = e.target.closest('.btn--nav-setting');
			const navSettingloginBtn = e.target.closest('.btn--nav-login');
			if (!settingMenu && !navSettingBtn) {
				setOpen(false);
				
			}
			if(!settingMenu && !navSettingloginBtn){
				setOpenSettingProfile(false)
			}
		};

		document.addEventListener('click', handleCloseSettingMenu);
		

		return () => document.removeEventListener('click', handleCloseSettingMenu);
	});

	const toastLogin=()=>{
		toast.success('Đăng xuất thành công!', {
		  position:"top-right",
		  autoClose: 5000,
		  hideProgressBar: false,
		  closeOnClick: true,
		  pauseOnHover: true,
		  draggable: true,
		  progress: undefined,
		  theme: "dark",
		  });
	}
	const handleShowSettingMenu = () => {
		setOpen(!open);
	};

	const handleShowThemeModal = () => {
		dispatch(toggleShowThemeModal(true));
	};
	const handleShowLoginModal = () => {
		if (!user){
         dispatch(toggleShowLoginModal(true));
		}else{
			setOpenSettingProfile(!openSettingProfile);
			
		}
	};
	const handleLogout=async()=>{
		const res=await logOut(dispatch,navigate,axiosJWT)
		if (res?.success){
			toastLogin()
			setOpenSettingProfile(false);
		}
	  }
	return (
		<div>
			<div className="header__nav">
				<ul className="header__nav-list">
					<li className="header__nav-item">
						<div className="header__nav-btn nav-btn--theme" onClick={handleShowThemeModal}>
							<svg width="20" height="20" className="header__nav-icon" viewBox="0 0 20 20">
								<defs>
									<linearGradient id="j32lhg93hd" x1="62.206%" x2="18.689%" y1="70.45%" y2="39.245%">
										<stop offset="0%" stopColor="#F81212"></stop>
										<stop offset="100%" stopColor="red"></stop>
									</linearGradient>
									<linearGradient id="hjoavsus6g" x1="50%" x2="11.419%" y1="23.598%" y2="71.417%">
										<stop offset="0%" stopColor="#00F"></stop>
										<stop offset="100%" stopColor="#0031FF"></stop>
									</linearGradient>
									<linearGradient id="la1y5u3dvi" x1="65.655%" x2="25.873%" y1="18.825%" y2="56.944%">
										<stop offset="0%" stopColor="#FFA600"></stop>
										<stop offset="100%" stopColor="orange"></stop>
									</linearGradient>
									<linearGradient id="2dsmrlvdik" x1="24.964%" x2="63.407%" y1="8.849%" y2="55.625%">
										<stop offset="0%" stopColor="#13EFEC"></stop>
										<stop offset="100%" stopColor="#00E8DF"></stop>
									</linearGradient>
									<filter id="4a7imk8mze" width="230%" height="230%" x="-65%" y="-65%" filterUnits="objectBoundingBox">
										<feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
									</filter>
									<filter
										id="301mo6jeah"
										width="312.7%"
										height="312.7%"
										x="-106.4%"
										y="-106.4%"
										filterUnits="objectBoundingBox"
									>
										<feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
									</filter>
									<filter
										id="b2zvzgq7fj"
										width="295%"
										height="295%"
										x="-97.5%"
										y="-97.5%"
										filterUnits="objectBoundingBox"
									>
										<feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
									</filter>
									<filter id="a1wq161tvl" width="256%" height="256%" x="-78%" y="-78%" filterUnits="objectBoundingBox">
										<feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
									</filter>
									<path
										id="qtpqrj1oda"
										d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
									></path>
									<path id="jggzvnjgfc" d="M0 0H20V20H0z"></path>
									<path
										id="2eiwxjmc7m"
										d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
									></path>
								</defs>
								<g fill="none" fillRule="evenodd" transform="translate(2 3)">
									<mask id="tinejqaasb" fill="#fff">
										<use xlinkHref="#qtpqrj1oda"></use>
									</mask>
									<use fill="#FFF" fillOpacity="0" xlinkHref="#qtpqrj1oda"></use>
									<g mask="url(#tinejqaasb)">
										<g transform="translate(-2 -3)">
											<mask id="uf3ckvfvpf" fill="#fff">
												<use xlinkHref="#jggzvnjgfc"></use>
											</mask>
											<use fill="#D8D8D8" xlinkHref="#jggzvnjgfc"></use>
											<circle
												cx="8.9"
												cy="6.8"
												r="9"
												fill="url(#j32lhg93hd)"
												filter="url(#4a7imk8mze)"
												mask="url(#uf3ckvfvpf)"
											></circle>
											<circle
												cx="9.3"
												cy="13.7"
												r="5.5"
												fill="url(#hjoavsus6g)"
												filter="url(#301mo6jeah)"
												mask="url(#uf3ckvfvpf)"
											></circle>
											<circle
												cx="15.9"
												cy="6.9"
												r="6"
												fill="url(#la1y5u3dvi)"
												filter="url(#b2zvzgq7fj)"
												mask="url(#uf3ckvfvpf)"
											></circle>
											<circle
												cx="16.4"
												cy="17.7"
												r="7.5"
												fill="url(#2dsmrlvdik)"
												filter="url(#a1wq161tvl)"
												mask="url(#uf3ckvfvpf)"
											></circle>
										</g>
									</g>
									<use fill="#FFF" fillOpacity="0.05" xlinkHref="#2eiwxjmc7m"></use>
								</g>
							</svg>
						</div>
					</li>
					<li className="header__nav-item hide-on-mobile">
						<div className="header__nav-btn">
							<input type="file" name="upload song" id="header__nav-input" />
							<label htmlFor="header__nav-input">
								<i className="bi bi-upload header__nav-icon"></i>
							</label>
						</div>
					</li>
					<li className="header__nav-item hide-on-mobile">
						<div className="header__nav-btn btn--nav-setting" onClick={handleShowSettingMenu}>
							<i className="bi bi-gear header__nav-icon"></i>
							<SettingMenu open={open} />
						</div>
					</li>
					<li className="header__nav-item ">
						<img src="/assets/img/avatars/tenor.png" onClick={handleShowLoginModal} alt="" className="header__nav-btn btn--nav-login" />
						<SettingProfile handleLogout={handleLogout} open={openSettingProfile}/>
						<ToastContainer
							position="top-right"
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme="dark"
							/>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default HeaderNavigation;
