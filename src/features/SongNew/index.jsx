import { getSongRankAPI } from 'apiServices/theSong';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { getAll } from 'apiServices/theSong';
import SongRankingList from './components/SongRankingList';
import './SongRanking.scss';

function SongNew() {
	const[listSong,setListSong]= useState([])
	useEffect(()=>{
		const fetchSongs = async()=>{
			const res= await getAll(0)
			setListSong(res)
		}
		fetchSongs();
	},[listSong])
	return (
		<>
			<div className="row no-gutters chart--container mt-10 mb-20">
				<div className=" col l-12 m-12 c-12">
					<SongRankingList listSong={listSong} />
				</div>
			</div>
		</>
	);
}

export default SongNew;
