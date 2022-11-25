import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Container.scss';
import ChartPage from './pages/ChartPage';
import ExplorePage from './pages/ExplorePage';
import FollowPage from './pages/FollowPage';
import PersonalPage from './pages/PersonalPage';
import TabAlbum from './pages/PersonalPage/pages/TabAlbum';
import TabArtist from './pages/PersonalPage/pages/TabArtist';
import TabHome from './pages/PersonalPage/pages/TabHome';
import TabMv from './pages/PersonalPage/pages/TabMv';
import TabPlaylist from './pages/PersonalPage/pages/TabPlaylist';
import TabSong from './pages/PersonalPage/pages/TabSong';
import TabUpload from './pages/PersonalPage/pages/TabUpload';
import RadioPage from './pages/RadioPage';
import AddSong from './pages/AddSong/addSong';
import CreateSideBar from 'components/Sidebar/components/CreateSideBar/CreateSideBar';
import AddArtist from 'features/Artist/components/AddArtist/AddArtist';
import AddCategory from 'features/Category/AddCategory';
import AddAlbum from 'features/Album/components/AddAlbum/AddAlbum';
import CategoryPage from './pages/Category';
function Container() {
	return (
		<Routes>
			<Route path="personal/*" element={<PersonalPage />}>
				<Route path="" element={<TabHome />} />
				<Route path="songs" element={<TabSong />} />
				<Route path="playlists" element={<TabPlaylist />} />
				<Route path="albums" element={<TabAlbum />} />
				<Route path="mvs" element={<TabMv />} />
				<Route path="artists" element={<TabArtist />} />
				<Route path="upload" element={<TabUpload />} />
				<Route path='addsong' element={<AddSong/>} />
			</Route>
			<Route path="/" element={<ExplorePage />} />
			<Route path="zingChart" element={<ChartPage />} />
			<Route path="radio" element={<RadioPage />} />
			<Route path="follow" element={<FollowPage />} />
			<Route path='addsong' element={<AddSong/>} />
			<Route path='addplaylist' element={<CreateSideBar/>}/>
			<Route path='addartist' element={<AddArtist/>} />
			<Route path='addcategory' element={<AddCategory/>} />
			<Route path='addalbum' element={<AddAlbum/>} />
			<Route path='category' element={<CategoryPage/>} />
		</Routes>
	);
}

export default Container;
