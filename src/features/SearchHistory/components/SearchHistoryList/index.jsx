import React, { useState } from 'react';
import './SearchHistoryList.scss';
import { useSelector } from 'react-redux';
function SearchHistoryList({  onClick,searchList = [] }) {
	const { songIndex: currentIndex, playlistIndex } = useSelector(state => state.listSong);
	const handleClickSearchHistory = e => {
		e.preventDefault();
	};


	const handleClickSong = (e,index) => {
		const checkNode = e.target.closest('.playlist__song-check');
		const optionNode = e.target.closest('.playlist__song-option');

		if (index === currentIndex || optionNode || checkNode) return;
		if (onClick) onClick(index);
	};
	return (
		<div className="header__search-history" onMouseDown={handleClickSearchHistory}>
			<ul className="header__search-list">
				{searchList.map((item,index) => (
					<li className="header__search-item" key={index}>
						<i className="bi bi-search header__item-icon"  ></i>
						<a href="#" onClick={(e)=> handleClickSong(e,item.index)} className="header__item-link">
							{item.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SearchHistoryList;
