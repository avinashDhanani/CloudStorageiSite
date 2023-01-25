import React from "react";
import folderImage from "../assets/folder.png";
import "./FolderContainer.css";
function FolderContainer({ name, folderClick,deleteFolder }) {
  const tempFolderClick = () => {
    folderClick(name);
  };
  const deleteButtonClick = () =>{
    deleteFolder(name);
  }
  return (
    <div className="folder-main-div">
      <img src={folderImage} alt="folder" className="image-folder " />
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

export default FolderContainer;
