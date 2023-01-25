import React,{useState,useEffect} from 'react'
import axios from 'axios';

function CreateFile({path,fetchAllFileInDir}) {
  const [file, setFileName] = useState("");
  const [formVisible, setFromVisible] = useState(false);

  const submitBtnClick = async () => {
    if (file == "") {
      return;
    }
   
    try {
        let filePath = file;
        if(!filePath.includes(".txt")){
           filePath = filePath + ".txt";
           console.log(filePath)
         }
      const response = await axios.get(
        "http://localhost:8080/createFile",
        {params:{ folderName:path+filePath} }
      );
      console.log(response.data);
      setFileName("");
      setFromVisible(false);
      fetchAllFileInDir();
    } catch (err) {
      console.log(err);
    }
  };
    return (
        <div>
          <button onClick={() => setFromVisible(!formVisible)}>
            Create File
          </button>
          <br />
          {formVisible ? (
            <>
              <input
                type="text"
                value={file}
                onChange={(event) => setFileName(event.target.value)}
                placeholder="enter file name"
              />
    
              <div className="btn-container">
                <button
                  className="submit-btn-createfoler btn-createfolder"
                  onClick={submitBtnClick}
                >
                  Submit
                </button>
                <button
                  className="back-btn-createfoler btn-createfolder"
                  onClick={() => {
                    setFromVisible(false);
                    setFileName("");
                  }}
                >
                  Back
                </button>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      );
}

export default CreateFile