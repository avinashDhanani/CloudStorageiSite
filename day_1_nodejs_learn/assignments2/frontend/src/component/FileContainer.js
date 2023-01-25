import React from "react";
import folderImage from "../assets/fileimage.png";
import "./FolderContainer.css";
import { useNavigate } from "react-router-dom";

function FileContainer({ name,deleteFile }) {
  const navigate = useNavigate();
  const tempFolderClick = () =>{
    localStorage.setItem("fileName",name);
    navigate("/updateFile");
  }
  const deleteButtonClick = () =>{
    deleteFile(name);
  }
  return (
    <div className="file-main-div">
      <img src={folderImage} alt="file" className="image-file" />
      <div className="dropdown">
        <div className="dropdown-content">
          <button onClick={tempFolderClick}>open</button>
          <button onClick={deleteButtonClick}>delete</button>
        </div>
        <p className="dropbtn">
          <b>{name}</b>
        </p>
      </div>
    </div>
  );
}

export default FileContainer;
