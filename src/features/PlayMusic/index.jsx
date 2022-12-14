import ContainerPlayMusicHeader from 'components/Container/components/ContainerPlayMusicHeader';
import SongSlide from 'features/SongSlide';
import { loginSuccess } from 'features/redux/authSlice';
import {CreateAxios} from 'features/redux/createInstance'
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentListSongSelector } from 'selectors/ListSongSelector';
import SongList from './components/SongList';
import './PlayMusic.scss';
import { getAll } from 'apiServices/theSong';
import { getListMusic } from 'features/PlayMusic/listSongSlice';
function PlayMusic() {
	const listSong = useSelector(currentListSongSelector);
	const dispatch= useDispatch();
	const user= useSelector((state)=> state.auth.login?.currentUser)
	let axiosJWT= CreateAxios(user,dispatch,loginSuccess);
	const [device, setDevice] = useState(() => {
		const windowWidth = window.innerWidth;
		let device;
		if (windowWidth < 740) {
			device = 'mobile';
		}

		return device;
	});
	useEffect(() => {
		const handleDetectDevice = e => {
			const windowWidth = e.target.innerWidth;
			let device;
			if (windowWidth < 740) {
				device = 'mobile';
			} else {
				device = 'notMobile';
			}
			setDevice(device);
		};
	


		window.addEventListener('resize', handleDetectDevice);

		return () => window.removeEventListener('resize', handleDetectDevice);
	}, []);
	useEffect(()=>{
		const fetchSongs = async()=>{
			const res= await getAll(user!=null ? user.userInfor.idListener : 0)
			dispatch(getListMusic([res]))
		}
		fetchSongs();
	},[listSong])

	return (
		<div className="container__control row">
			<div className="col l-12 m-12 c-12 mb-10">
				<ContainerPlayMusicHeader />
			</div>
			<div className="col l-12 m-12 c-12">
				<div className="container__playmusic">
					{device !== 'mobile' && <SongSlide />}
					<div className="container__playlist">
						<SongList listSong={listSong} />
					</div>
				</div>
			</div>
		</div>	
	);
}

export default PlayMusic;
