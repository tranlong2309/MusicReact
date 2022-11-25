import React from 'react';
import SongRankingItem from '../SongRankingItem';
import { toggleLoadingSong } from 'features/PlayerMusic/musicSlice';
import { nextSong } from 'features/PlayMusic/listSongSlice';
import { useDispatch, useSelector } from 'react-redux';
function SongRankingList({ listSong = [] }) {
	const dispatch = useDispatch();
	const handleClickSong = index => {
		dispatch(toggleLoadingSong(true));
		dispatch(nextSong(index));
	};
	
	return (
		<div className="container__playlist">
			<div className="playlist__list-charts overflow-visible">
				{listSong.map(song => (
					<SongRankingItem onClick={handleClickSong} key={song.name} song={song} />
				))}
			</div>
		</div>
	);
}

export default SongRankingList;
