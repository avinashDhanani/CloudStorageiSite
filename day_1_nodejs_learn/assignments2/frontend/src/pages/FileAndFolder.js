import React, { useState, useEffect } from "react";
import FileContainer from "../component/FileContainer";
import FolderContainer from "../component/FolderContainer";
import "./FileAndFolder.css"

function FileAndFolder({ allFileAndFolder,addPath,deleteFolder,deleteFile }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(allFileAndFolder);
    console.log(allFileAndFolder);
  }, []);
  useEffect(() => {
    console.log(list);
  }, [list, allFileAndFolder]);
  const folderClick = (item) =>{
    console.log(item)
    addPath(item)
  }
  const tempDeleteFolder = (item) =>{
    deleteFolder(item)
  }
  
  return (
    <div>
      <hr/>
      <h2>Folder</h2>
      <div className="folder-list">
        {list.map((item, index) => (
          <div key={item + index}>
            {!item.includes(".") && <FolderContainer name={item} folderClick={folderClick} deleteFolder={tempDeleteFolder} /> }
          </div>
        ))}
      </div>
      <hr/>
      <h2>Files</h2>
      <div className="file-list">
        {list.map((item, index) => (
          <div key={item + index}>
            {item.includes(".") && <FileContainer name={item} deleteFile={deleteFile}/>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileAndFolder;
