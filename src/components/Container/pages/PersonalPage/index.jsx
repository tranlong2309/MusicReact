import ContentNavBar from 'components/Container/components/ContentNavBar';
import { toggleThickenHeader ,toggleShowLoginModal } from 'configSlice';
import React, { useEffect, useRef } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { Outlet ,useNavigate} from 'react-router-dom';
import AppHeader from '../../components/AppHeader';
import { loginSuccess } from 'features/redux/authSlice';
import { getListMusicListener} from 'features/PlayMusic/listSongSlice';
import {CreateAxios} from 'features/redux/createInstance'
import { getMusicListener } from 'apiServices/theSong';
function PersonalPage() {
	const dispatch = useDispatch();
	const navigate=useNavigate();
	const containerRef = useRef();
	const user= useSelector((state)=> state.auth.login?.currentUser)
	let axiosJWT= CreateAxios(user,dispatch,loginSuccess);
	useEffect(() => {
		if(!user){
			navigate("/")
			dispatch(toggleShowLoginModal(true))
		}
		const containerElement = containerRef.current;
		const handleScrollContainer = e => {
			const scrollTop = e.target.scrollTop;

			dispatch(toggleThickenHeader(scrollTop > 10));
		};
		const fechAPIGetMuisc= async()=>{
			if(user!=null){
				const res= await getMusicListener(user.userInfor.idListener,axiosJWT)
				dispatch(getListMusicListener(res));
			}
		}
		//fechAPIGetMuisc();
		
		containerElement.addEventListener('scroll', handleScrollContainer);

		return () => containerElement.removeEventListener('scroll', handleScrollContainer);
		// eslint-disable-next-line
	}, []);

	return (
		<div className="app__container tab--personal" ref={containerRef}>
			<AppHeader />
			<div className="content">
				<ContentNavBar />
				<div className="content__container">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default PersonalPage;
