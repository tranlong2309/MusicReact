import React from "react";
import "./addSong.scss";
function AddSong() {
  return (
    <div className="center">
    <h1>Thêm nhạc</h1>
    <form method="post">
      <div className="txt_field">
        <input type="text" required/>
        <span></span>
        <label>Nhập tên nhạc</label>
      </div>
      <div className="txt_field1">
        <label htmlFor="#">Chọn file</label>
      </div>
      <div className="txt_field">
        <input type="file" required/>
        <span></span>
      </div>
      <div className="txt_field1">
        <label htmlFor="#">Chọn ảnh</label>
      </div>
      <div className="txt_field">
        <input type="file" required/>
        <span></span>
      </div>
      <div className="txt_field1">
        <label htmlFor="#">Category</label>
        <select>
          <option>Rock</option>
          <option value="#">Ballad</option>
        </select>
        <label htmlFor="#">Album</label>
        <select>
          <option>Rock</option>
          <option value="#">Ballad</option>
        </select>
      </div>
      <input type="submit" value="Tải lên"/>
    </form>
  </div>



  );
}
export default AddSong;
