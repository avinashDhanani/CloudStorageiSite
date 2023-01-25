const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const Folder = require("./crud");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
 });


app.get("/createFolder", async (req,res)=>{
  console.log(req.headers);
  console.log(req.body)
  console.log(req.query)
  const folderName= "drive/" + req.query.folderName;
  try{
    const createFolder = await Folder.createFolder(folderName).then((res)=>{console.log(res)}).catch((err)=>console.log(err));
    
  res.status(200).send({createFolder});
  }catch(err){
    res.status(400).send(err);
  }
});

app.get("/createFile", async (req,res)=>{
  console.log(req.headers);
  console.log(req.body)
  console.log(req.query)
  const folderName= "drive/" + req.query.folderName;
  try{
    const createFolder = await Folder.createFile(folderName,'').then((res)=>{console.log(res)}).catch((err)=>console.log(err));
    
  res.status(200).send({createFolder});
  }catch(err){
    res.status(400).send(err);
  }
});


app.get("/listOfFileAndFolder",async(req,res)=>{
  console.log(req.query.path);

  let dir = "drive/" ;
  if(req.query.path)
    dir = "drive/" + req.query.path
    try{
      const data = await Folder.allFileinDir(dir);
      console.log(data);
      res.status(200).send({data})
    }catch(err){
      console.log(err);
      res.status(400).send(err);
    }
 
})

app.get("/deleteFolder",async(req,res)=>{
  console.log(req.query.path);

  let dir = "drive" ;
  if(req.query.path)
    dir = "drive" + req.query.path
  console.log(dir)
    try{
      const data = await Folder.deleteFolder(dir);
      console.log(data);
      res.status(200).send({data})
    }catch(err){
      console.log(err);
      res.status(400).send(err);
    }
})

app.get('/deleteFile',async(req,res)=>{
  console.log(req.query.path);

  let dir = "drive" ;
  if(req.query.path)
    dir = "drive" + req.query.path
  console.log(dir)
    try{
      const data = await Folder.deleteFile(dir);
      console.log(data);
      res.status(200).send({data})
    }catch(err){
      console.log(err);
      res.status(400).send(err);
    }
})
app.get('/readfile',async(req,res)=>{
 
  console.log(req.query.path);

  let dir = "drive" ;
  if(req.query.path)
    dir = "drive" + req.query.path
  console.log(dir)
    try{
      const data = await Folder.readFile(dir);
      console.log(data);
      res.status(200).send({data})
    }catch(err){
      console.log(err);
      res.status(400).send(err);
    }
})
app.get("/updatefile",async (req,res)=>{
  console.log(req.query)
  const folderName= "drive" + req.query.folderName;
  const data = req.query.data+"";
  console.log("foldername : ",folderName);
  console.log("filedata : ",data );
  try{
    const createFolder = await Folder.updateFile(folderName,data).then((res)=>{console.log(res)}).catch((err)=>console.log(err));
    
  res.status(200).send({createFolder});
  }catch(err){
    res.status(400).send(err);
  }
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
