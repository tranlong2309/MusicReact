import { getSongRankAPI } from 'apiServices/theSong';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SongRankingList from './components/SongRankingList';
import './SongRanking.scss';

function SongRanking() {
	const [showFull, setShowFull] = useState(false);
	const { listSong } = useSelector(state => state.songRanking);
	const[listSongRanking,setListSongRankking]=useState([])
	const [renderList, setRenderList] = useState(() => listSong.filter((x, index) => index < 10));

	const handleShowFull = () => {
		setShowFull(true);
	};
	useEffect(()=>{
		const GetSongRank=async()=>{
			const res= await getSongRankAPI();
			setListSongRankking(res)
		}
		GetSongRank();
	},[])
	useEffect(() => {
		if (showFull) setRenderList(listSongRanking);
	}, [showFull, listSongRanking]);
	return (
		<>
			<div className="row no-gutters chart--container mt-10 mb-20">
				<div className=" col l-12 m-12 c-12">
					<SongRankingList listSong={listSongRanking} />
				</div>
			</div>
			{!showFull && (
				<div className="charts__expand">
					<button className="button charts__expand-btn" onClick={handleShowFull}>
						Xem top 100
					</button>
				</div>
			)}
		</>
	);
}

export default SongRanking;
