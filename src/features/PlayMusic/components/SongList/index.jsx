import { toggleLoadingSong } from 'features/PlayerMusic/musicSlice';
import { nextSong } from 'features/PlayMusic/listSongSlice';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentListDuration } from 'selectors/ListSongSelector';
import SongItem from '../SongItem';
import {refreshToken} from "apiServices/apiLogin"
import './SongList.scss';


import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { loginSuccess } from 'features/redux/authSlice';
const SongList=({ listSong = [], isSongTab = false })=> {
	const dispatch = useDispatch();
	const listDuration = useSelector(currentListDuration);
	const prevPlaylist = useRef();
	const handleClickSong = index => {
		dispatch(toggleLoadingSong(true));
		dispatch(nextSong(index));
	};

	const user= useSelector((state)=> state.auth.login?.currentUser)

	let axiosJWT= axios.create()

	axiosJWT.interceptors.request.use(
		async(config)=>{
			let date =new Date()
			const decoedToken= jwtDecode(user?.jwtToken);
			if(decoedToken.exp < date.getTime()/1000 ){
				const data= await refreshToken();
				const refreshUser={
					...user,
					jwtToken:data.accessToken
				};
				dispatch(loginSuccess(refreshUser));
				config.headers["Authorization"] ="Bearer "+data.jwtToken
			}
			return config;
		},(err)=>{
			return Promise.reject(err)
		}
	)






	return (
		<div className="playlist__list">
			{listSong.map((song, index) => (
				<SongItem
					key={song.name}
					index={index}
					song={song}
					duration={listDuration[index]}
					onClick={handleClickSong}
					prevPlaylist={prevPlaylist}
					isSongTab={isSongTab}
				/>
			))}
		</div>
	);
}

export default SongList;
