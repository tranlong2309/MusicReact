import React from "react";
// import "./addSong.scss";
function CreateSideBar() {
  return (
    <div className="center">
    <h1>Thêm playlist</h1>
    <form method="post">
      <div className="txt_field">
        <input type="text" required/>
        <span></span>
        <label>Nhập playlist</label>
      </div>
      <input type="submit" value="Tạo"/>
    </form>
  </div>



  );
}
export default CreateSideBar;
