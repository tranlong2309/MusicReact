import React from 'react';
import './ContainerPlayMusicHeader.scss';
import * as theSong from 'apiServices/theSong'
import axios from 'axios';
function ContainerPlayMusicHeader() {
	let formData = new FormData();

	const config = {     
		headers: { 'content-type': 'multipart/form-data' }
	}

	const handleUploadfile=(e)=>{

		const testApi=async()=>{
			const result= await theSong.UploadFile(e);
		}
		testApi();
	}


	return (
		<div className="container__header">
			<a href="/" className="container__header-title">
				<h3>Bài Hát&nbsp;</h3>
				<i className="bi bi-chevron-right container__header-icon"></i>
			</a>
			<h3 className="container__header-subtitle">Bài Hát</h3>
			<div className="container__header-actions">
				<div className="button is-small container__header-btn hide-on-mobile">
					<input
						type="file"
						name="upload song"
						id="home__upload-input"
						className="container__header-input"
						onChange={handleUploadfile}
					/>
					<label htmlFor="home__upload-input">
						<i className="bi bi-upload container__header-icon"></i>
						&nbsp;Tải lên
					</label>
				</div>
				<button className="button is-small button-primary container__header-btn btn--play-all">
					<i className="bi bi-play-fill container__header-icon"></i>
					<span>Phát tất cả</span>
				</button>
			</div>
		</div>
	);
}

export default ContainerPlayMusicHeader;
