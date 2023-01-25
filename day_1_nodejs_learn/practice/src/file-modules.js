const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const fs = require('fs');
const { rejects } = require("assert");
const { resolve } = require("path");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/readfile",async (req,res)=>{
  console.log("in read file function");
  let ans=10;
  readFile().then((res)=>console.log(res)).catch((error)=>console.log("error",error));

  console.log(ans)
  res.status(200).send({ans});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const readFile = () =>{
  return new Promise((resolve,rejects)=>{
    fs.readFile('./src/file.txt', function(err, data) {
      if(err){
        rejects(err);
      }
      resolve(data);
    });
  })
}


