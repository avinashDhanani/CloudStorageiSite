import React,{useState,useEffect} from "react";
import "./EditFile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EditFile() {
    const [fileContent,setFileContent] = useState("");
    const [fileName,setFileName] = useState("");
    const [path,setPath] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
     const tfileName = localStorage.getItem("fileName");
     const tpath = localStorage.getItem("path");
     setFileName(tfileName);
     setPath(tpath);
     readFile();
    }, []);
    const readFile = async () =>{
      const path =  localStorage.getItem("path") + localStorage.getItem("fileName");
      try {
        const res = await axios.get("http://localhost:8080/readFile", {
          params: { path },
        });
        console.log(res.data);
        setFileContent(res.data.data);
      } catch (err) {
        console.log(err);
      }
    }
   const updateButtonClick = async () =>{
    try{
      
    const response = await axios.get(
      "http://localhost:8080/updatefile",
      {params:{ "folderName":path+fileName,"data":fileContent} }
    );
    console.log(response.data);
    }catch(error){
      console.log(error)
    }
    navigate("/")
   }
   const backBtnClick = () =>{
    navigate("/")
   }
    
  return (
    <div>
      <div className="main-div-edit-file">
        <div><h2>{fileName}</h2></div>
        <div>
            <textarea rows={30} cols={130} value={fileContent} onChange={(e)=>{setFileContent(e.target.value)}}>

            </textarea>
        </div>
        <div>
          <button className="submit-btn-editfile" onClick={updateButtonClick}>Update</button>
          <button className="back-btn-editfile" onClick={backBtnClick}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default EditFile;
