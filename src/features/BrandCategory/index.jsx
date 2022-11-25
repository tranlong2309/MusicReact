import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import ExploreSlideList from './components/ExploreSlideList';
import './ExploreSlide.scss';

function BrandCategory() {
	const {
		brandListCategory
	} = useSelector(state => state.containerData);
	const timerId = useRef();

	const [firstImage, setFirstImage] = useState(0);
	const [isReverse, setIsReverse] = useState(false);

	const handleNextSlide = () => {
		setFirstImage(prev => (prev + 1 >= brandListCategory.length ? 0 : prev + 1));
		setIsReverse(false);
	};

	const resetSlideLoop = () => {
		clearInterval(timerId.current);
		timerId.current = setInterval(handleNextSlide, 4000);
	};

	const handleClickNext = () => {
		handleNextSlide();
		resetSlideLoop();
	};

	const handleClickPrev = () => {
		setFirstImage(prev => (prev - 1 < 0 ? brandListCategory.length - 1 : prev - 1));
		setIsReverse(true);
		resetSlideLoop();
	};

	useEffect(() => {
		timerId.current = setInterval(handleNextSlide, 4000);

		return () => clearInterval(timerId.current);
		// eslint-disable-next-line
	}, []);

	return (
		<div className="row explore__slide--container">
			<div className="explore__slide-move">
				<div className="slide__move-btn btn--prev" onClick={handleClickPrev}>
					<i className="bi bi-chevron-left"></i>
				</div>
				<div className="slide__move-btn btn--next" onClick={handleClickNext}>
					<i className="bi bi-chevron-right"></i>
				</div>
			</div>
			<ExploreSlideList listSlide={brandListCategory} firstImage={firstImage} isReverse={isReverse} />
		</div>
	);
}

export default BrandCategory;
