import { createSlice } from '@reduxjs/toolkit';
import {
	NORMAL_PLAYLIST_STORAGE_KEY,
	SPECIAL_PLAYLIST_STORAGE_KEY,
	LABEL_STORAGE_KEY,
	SINGER_SLIDE_STORAGE_KEY,
	EVENT_STORAGE_KEY,
	NEW_PLAYLIST_STORAGE_KEY,
	FAVORITE_ARTIST_STORAGE_KEY,
	BRAND_STORAGE_KEY,
} from 'constants/index';

const containerDataSlice = createSlice({
	name: 'containerData',
	initialState: {
		normalPlaylist: JSON.parse(localStorage.getItem(NORMAL_PLAYLIST_STORAGE_KEY)) || [],
		Category: [],
		specialPlaylist: JSON.parse(localStorage.getItem(SPECIAL_PLAYLIST_STORAGE_KEY)) || [],
		labelList: JSON.parse(localStorage.getItem(LABEL_STORAGE_KEY)) || [],
		singerSlideList: JSON.parse(localStorage.getItem(SINGER_SLIDE_STORAGE_KEY)) || [],
		eventList: JSON.parse(localStorage.getItem(EVENT_STORAGE_KEY)) || [],
		newReleaseList: JSON.parse(localStorage.getItem(NEW_PLAYLIST_STORAGE_KEY)) || [],
		favoriteArtistList: JSON.parse(localStorage.getItem(FAVORITE_ARTIST_STORAGE_KEY)) || [],
		brandList: JSON.parse(localStorage.getItem(BRAND_STORAGE_KEY)) || [],
		brandListCategory:[],
	},
	reducers: {
		getCategory(state,action){
			state.Category=action.payload
		},
		getBrandCategory(state,action){
			state.brandListCategory=action.payload
		}
	},
});

const {actions: { getCategory,getBrandCategory}, reducer } = containerDataSlice;
export { getCategory,getBrandCategory};
export default reducer;
