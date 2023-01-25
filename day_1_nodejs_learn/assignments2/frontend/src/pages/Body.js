import React, { useState, useEffect } from "react";
import CreateFolder from "./CreateFolder";
import CreateFile from "./CreateFile";
import FileAndFolder from "./FileAndFolder";
import axios from "axios";
import "./Body.css";

function Body() {
  const [path, setPath] = useState("/");
  const [allFileAndFolder, setAllFileAndFolder] = useState([]);
  const [reload,setReload] = useState(false);
  useEffect(()=>{
    const tempPath = localStorage.getItem("path")
    if(tempPath){
      setPath(tempPath)
    }
  },[])
  useEffect(() => {
    fetchAllFileInDir();
  }, [path,reload]);
  useEffect(() => {
    console.log(allFileAndFolder);
  }, [allFileAndFolder]);

  const fetchAllFileInDir = async () => {
    localStorage.setItem("path",path);
    setAllFileAndFolder([]);
    try {
      const res = await axios.get("http://localhost:8080/listOfFileAndFolder", {
        params: { path },
      });
      setAllFileAndFolder(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const addPath = (tempFolderName) => {
    console.log(path + tempFolderName + "/");
    setPath(path + tempFolderName + "/");
  };

  const backBtnClick = () =>{
    if(path=="/"){
        return;
    }
    const tempArray = path.split('/');
    let ans = "";
    for(let i=0;i<tempArray.length-2;i++){
        if(tempArray[i]==""){
            ans = ans + "/"
        }else{
            ans = ans + tempArray[i];
        }
    }
    if(ans!="/"){
        ans = ans + "/"
    }
    console.log(path.split('/'))
    console.log("ans",ans)
    setPath(ans)
  }

  const reloadFunction= ()=>{
    setReload(!reload);
  }
  const deleteFolder = async (item) =>{
    const tempPath = path + item;
    try{
      const res = await axios.get("http://localhost:8080/deleteFolder",{params:{path:tempPath}});
      console.log(res);
      fetchAllFileInDir();
    }catch(err){
      console.log(err);
    }
  }
  const deleteFile =  async (item) =>{
    const tempPath = path + item;
    try{
      const res = await axios.get("http://localhost:8080/deleteFile",{params:{path:tempPath}});
      console.log(res);
      fetchAllFileInDir();
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div>
      <div className="path-and-back-button-body">
        {path != "/" ? <button onClick={backBtnClick}>Back</button> : <></>}
        <h2>path : {path}</h2>
      </div>
      <div>
        <div> <CreateFolder path={path} fetchAllFileInDir={fetchAllFileInDir} /></div>
        <div><CreateFile  path={path} fetchAllFileInDir={fetchAllFileInDir} /></div>
      </div>
     
      {allFileAndFolder.length != 0 ? (
        <FileAndFolder allFileAndFolder={allFileAndFolder} addPath={addPath} reload={reloadFunction} deleteFolder={deleteFolder} deleteFile={deleteFile}/>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Body;
