import { configureStore,combineReducers } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

import songReducer from 'features/PlayMusic/listSongSlice';
import musicReducer from 'features/PlayerMusic/musicSlice';
import personalPlaylistReducer from 'features/Playlist/personalPlaylistSlice';
import personalAlbumReducer from 'features/Album/personalAlbumSlice';
import personalMvReducer from 'features/Mv/personalMvSlice';
import personalArtistReducer from 'features/Artist/personalArtistSlice';
import exploreSlideReducer from 'features/ExploreSlide/exploreSlideSlice';
import containerDataReducer from 'components/Container/containerDataSlice';
import songRankingReducer from 'features/SongRanking/songRankingSlice';
import radioReducer from 'features/Radio/RadioSlice';
import postReducer from 'features/Post/postSlice';
import themeReducer from 'features/ThemeModal/themeSlice';
import toastReducer from 'features/Toast/toastSlice';
import configReducer from 'configSlice';
import authReducer from "features/redux/authSlice";


const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	whitelist:["auth"],
  }
const rootReducerAuth= combineReducers({listSong: songReducer,
	music: musicReducer,
	personalPlaylist: personalPlaylistReducer,
	personalAlbum: personalAlbumReducer,
	personalMv: personalMvReducer,
	personalArtist: personalArtistReducer,
	exploreSlide: exploreSlideReducer,
	containerData: containerDataReducer,
	songRanking: songRankingReducer,
	radio: radioReducer,
	post: postReducer,
	theme: themeReducer,
	toast: toastReducer,
	config: configReducer,
	auth:authReducer,})

const persistedReducer = persistReducer(persistConfig, rootReducerAuth)
const rootReducer = {
	
};


export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
	  getDefaultMiddleware({
		serializableCheck: {
		  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	  }),
  })



export let persistor = persistStore(store);
