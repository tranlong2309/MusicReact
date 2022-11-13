import React from 'react';
import './SettingNavigation.scss';
import { NavLink,useNavigate } from 'react-router-dom';

function SettingProfileNav({handleLogout}) {
  return (
    <div className="setting__nav">
      <div className="setting__item">
      <NavLink to="personal">
        <div className="setting__item-content">
          <i className="bi bi-person-badge-fill setting__item-icon"></i>
          <span>Cá nhân</span>
        </div>
        </NavLink>
      </div>
      <div className="setting__item">
        <div className="setting__item-content">
          <i className="bi bi-box-arrow-right setting__item-icon"></i>
          <a href="#" onClick={handleLogout}><span>Đăng xuất</span></a>
        </div>
      </div>
    </div>
  );
}

export default SettingProfileNav;
