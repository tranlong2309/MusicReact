import React from "react";
// import "./addSong.scss";
function AddAlbum() {
  return (
    <div className="center">
    <h1>Thêm album</h1>
    <form method="post">
      <div className="txt_field">
        <input type="text" required/>
        <span></span>
        <label>Nhập tên album</label>
      </div>
      <div className="txt_field1">
        <label htmlFor="#">Chọn ảnh</label>
      </div>
      <div className="txt_field">
        <input type="file" required/>
        <span></span>
      </div>
      <input type="submit" value="Thêm"/>
    </form>
  </div>



  );
}
export default AddAlbum;