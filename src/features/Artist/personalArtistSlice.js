import { createSlice } from '@reduxjs/toolkit';
import { ARTIST_STORAGE_KEY } from 'constants/index';

const personalArtistSlice = createSlice({
	name: 'personalArtist',
	initialState: {
		list:[],
	},
	reducers: {
		getAllSinger(state,action){
			state.list=action.payload
		}
	},
});

const {actions: { getAllSinger}, reducer } = personalArtistSlice;
export { getAllSinger };
export default reducer;
