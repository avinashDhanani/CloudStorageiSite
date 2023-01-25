import React, { useState } from "react";
import axios from "axios";

function CreateFolder({path,fetchAllFileInDir}) {
  const [folderName, setFolderName] = useState("");
  const [formVisible, setFromVisible] = useState(false);

  const submitBtnClick = async () => {
    if (folderName == "") {
      return;
    }
    try {
      const response = await axios.get(
        "http://localhost:8080/createFolder",
        {params:{ folderName:path+folderName} }
      );
      console.log(response.data);
      setFolderName("");
      setFromVisible(false);
      fetchAllFileInDir();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={() => setFromVisible(!formVisible)}>
        Create Folder
      </button>
      <br />
      {formVisible ? (
        <>
          <input
            type="text"
            value={folderName}
            onChange={(event) => setFolderName(event.target.value)}
            placeholder="enter folder name"
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
                setFolderName("");
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

export default CreateFolder;
