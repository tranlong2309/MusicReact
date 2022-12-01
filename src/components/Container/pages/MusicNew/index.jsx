import { toggleThickenHeader } from 'configSlice';
import SongNew from 'features/SongNew';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import './ChartPage.scss';

function MusicNew() {
	const dispatch = useDispatch();
	const containerRef = useRef();

	useEffect(() => {
		const containerElement = containerRef.current;
		const handleScrollContainer = e => {
			const scrollTop = e.target.scrollTop;

			dispatch(toggleThickenHeader(scrollTop > 10));
		};

		containerElement.addEventListener('scroll', handleScrollContainer);

		return () => containerElement.removeEventListener('scroll', handleScrollContainer);
		// eslint-disable-next-line
	}, []);
	return (
		<div className="app__container tab--charts" ref={containerRef}>
			<div className="app__container-content">
				<div className="charts__container">
					<div className="grid">
						<div className="chart__container-header mb-40">
							<h3 className="chart__header-name">#Nhạc Mới</h3>
							<div className="chart__header-btn">
								<i className="bi bi-play-fill chart__header-icon"></i>
							</div>
						</div>
						<SongNew />
					</div>
				</div>
			</div>
		</div>
	);
}

export default MusicNew;
