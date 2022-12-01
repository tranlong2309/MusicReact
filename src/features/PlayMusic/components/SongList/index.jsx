import { toggleLoadingSong } from 'features/PlayerMusic/musicSlice';
import { loginSuccess } from 'features/redux/authSlice';
import { useDispatch,useSelector } from 'react-redux';
import {CreateAxios} from 'features/redux/createInstance'
import { getListMusicListener, nextSong } from 'features/PlayMusic/listSongSlice';
import React, { useEffect, useRef, useState } from 'react';
import { currentListDuration } from 'selectors/ListSongSelector';
import SongItem from '../SongItem';
import './SongList.scss';
import { getMusicListener } from 'apiServices/theSong';

const SongList=({ listSong = [], isSongTab = false })=> {
	const dispatch = useDispatch();
	const listDuration = useSelector(currentListDuration);
	const prevPlaylist = useRef();

	const handleClickSong = index => {
		dispatch(toggleLoadingSong(true));
		dispatch(nextSong(index));
	};
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
