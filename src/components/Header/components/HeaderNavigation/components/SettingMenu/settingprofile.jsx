import clsx from 'clsx';
import React from 'react';
import SettingpProfile from '../SettingProfile';
import './SettingMenu.scss';

function SettingProfile({handleLogout, open }) {
	const handleClickMenu = e => {
		e.stopPropagation();
	};
	return (
		<div
			className={clsx('setting__menu', {
				open: open,
			})}
			onClick={handleClickMenu}
		>
			<SettingpProfile handleLogout={handleLogout} />
		</div>
	);
}

export default SettingProfile;