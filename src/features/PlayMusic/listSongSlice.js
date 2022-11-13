import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import songApi from 'api/SongApi';
import { getAll } from 'apiServices/theSong';
import { DURATION_STORAGE_KEY, MUSIC_STORAGE_KEY, PLAYER_STORAGE_KEY } from 'constants/index';
import { useState,useEffect } from 'react';

var listSong = [

	[
		{
			name: 'Eyes - Đôi mắt',
			singers: ['G.Ducky'],
			path: '/assets/music/listSong4/song1.mp3',
			image: '/assets/img/music/listSong4/song1.jpg',
		}
	],
	
];
const listSongSlice = createSlice({
	name: 'listSong',
	initialState: {
		songIndex: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY))?.songIndex ?? 0,
		playlistIndex: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY))?.playlistIndex ?? 0,
		list:listSong ,
		listDuration: JSON.parse(localStorage.getItem(DURATION_STORAGE_KEY)) || [],
	},
	reducers: {
		getListMusic(state,action){
			state.list=action.payload
		},
		nextSong(state, action) {
			const newSongIndex = action.payload;
			state.songIndex = newSongIndex;
			// localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify  )
		},
		changePlaylist(state, action) {
			state.songIndex = 0;
			state.playlistIndex = action.payload;
		},
	},
});

const {
	actions: { nextSong, changePlaylist, getListMusic},
	reducer,
} = listSongSlice;

export { nextSong, changePlaylist,getListMusic };

export default reducer;
