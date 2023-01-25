const fs = require("fs");

const createFolder = (folderName) => {
  return new Promise((resolve, reject) => {
    try {
      if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
        resolve("user created");
      } else {
        reject("user not created");
      }
    } catch (err) {
      reject(err);
    }
  });
};
const allFileinDir = (dirPath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        reject(err);
      }
      resolve(files);
    });
  });
};

const deleteFolder = (dirPath) => {
  // return ne
  return new Promise((resolve, reject) => {
    try {
      fs.rmSync(dirPath, { recursive: true });
      resolve("done");
    } catch (err) {
      reject("error in folder delete")
    }
  });
};
const createFile = (path,data)=>{
  return new Promise((resolve, reject) => {
    try {
      fs.appendFile(path, data, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
      resolve("done");
    } catch (err) {
      reject("error in folder delete")
    }
  });
}
const readFile = (path) =>{
  return new Promise((resolve, reject) => {
    try{
      fs.readFile(path, function(err, data) {
        if(err){
          reject(err);
          return;
        }
        resolve(data.toString());
      });
    }catch(err){
      reject(err);
    }
  });
 
}
const updateFile = (path,data)=>{
  return new Promise((resolve, reject) => {
    try{
      fs.writeFile(path, data, function (err) {
        if (err) reject(err);
        resolve("updated")
        console.log('Saved!');
      });
    }catch(error){
      reject(error);
    }
  })
  
}
const deleteFile = (path) =>{
  return new Promise((resolve, reject) => {
    try {
      fs.unlink(path, function (err) {
        if (err) {
          reject(err);
        };
        console.log('File deleted!');
      });
      resolve("File deleted!");
    } catch (err) {
      reject("error in folder delete")
    }
  });
}
// allFileinDir("drive/");
module.exports = { createFolder, allFileinDir, deleteFolder ,createFile,deleteFile,readFile,updateFile};
