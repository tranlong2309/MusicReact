import React, { useEffect, useState } from 'react';
import './SettingNavigation.scss';
import { NavLink,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
function SettingProfileNav({handleLogout}) {
  const user= useSelector((state)=> state.auth.login?.currentUser)
 
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
     {user?.userInfor?.role==0 && <div>
      <div className="setting__item">
      <NavLink to="addsong">
        <div className="setting__item-content">
        <i class="bi bi-patch-plus setting__item-icon"></i>
          <span>Thêm nhạc</span>
        </div>
        </NavLink>
      </div>
      <div className="setting__item">
      <NavLink to="addplaylist">
        <div className="setting__item-content">
        <i class="bi bi-patch-plus setting__item-icon"></i>
          <span>Thêm playlist</span>
        </div>
        </NavLink>
      </div>
      <div className="setting__item">
      <NavLink to="addartist">
        <div className="setting__item-content">
        <i class="bi bi-patch-plus setting__item-icon"></i>
          <span>Thêm nghệ sĩ</span>
        </div>
        </NavLink>
      </div>
      <div className="setting__item">
      <NavLink to="addcategory">
        <div className="setting__item-content">
        <i class="bi bi-patch-plus setting__item-icon"></i>
          <span>Thêm thể loại</span>
        </div>
        </NavLink>
      </div>
      <div className="setting__item">
      <NavLink to="addalbum">
        <div className="setting__item-content">
        <i class="bi bi-patch-plus setting__item-icon"></i>
          <span>Thêm album</span>
        </div>
        </NavLink>
      </div>
      </div>}
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
