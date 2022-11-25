import { getAllCategory, getBrandCategoryAPI } from 'apiServices/theSong';
import { getCategory,getBrandCategory } from 'components/Container/containerDataSlice';
import { toggleThickenHeader } from 'configSlice';
import Brand from 'features/Brand';
import BrandCategory from 'features/BrandCategory';
import Event from 'features/EventFeature';
import FavoriteArtist from 'features/FavoriteArtist';
import Label from 'features/Label';
import NewReleasePlaylist from 'features/NewReleasePlaylist';
import NormalPlaylist from 'features/NormalPlaylist';
import Radio from 'features/Radio';
import SingerSlide from 'features/SingerSlide';
import SpecialPlaylist from 'features/SpecialPlaylist';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CategoryPage.scss';

function CategoryPage() {
	const {
		Category
	} = useSelector(state => state.containerData);

	const dispatch = useDispatch();
	const containerRef = useRef();

	useEffect(() => {
		const containerElement = containerRef.current;
		const handleScrollContainer = e => {
			const scrollTop = e.target.scrollTop;

			dispatch(toggleThickenHeader(scrollTop > 10));
		};
		const fechAPI= async()=>{
			const res= await getAllCategory();
			dispatch(getCategory(res));
		}
		const getAPIBrandCategory= async()=>{
			const res= await getBrandCategoryAPI();
			dispatch(getBrandCategory(res))
		}
		getAPIBrandCategory();
		fechAPI();
		containerElement.addEventListener('scroll', handleScrollContainer);

		return () => containerElement.removeEventListener('scroll', handleScrollContainer);
		// eslint-disable-next-line
	}, []);

	return (
		<div className="app__container tab--explore" ref={containerRef}>
			<div className="app__container-content">
				<div className="explore__container">
					<div className="grid">
						{/* <!-- Slide --> */}
						<div className="row container__section">
							<div className="col l-12 m-12 c-12">
								<BrandCategory />
							</div>
						</div>

						{/* <!-- Playlists --> */}
						{Category
							.map(playlist => (
								<NormalPlaylist
									key={playlist.header}
									sectionName={playlist.header}
									playlistList={playlist.playlists}
									optionalClass="mt-30"
									noWrap
								/>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CategoryPage;
