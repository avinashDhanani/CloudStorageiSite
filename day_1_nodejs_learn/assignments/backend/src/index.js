const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// assignment 1
app.get("/getprimenumbers", (req, res) => {
  const numberRange = req.query.number;
  const arr = [];
  for (let i = 0; i <= numberRange; i++) {
    arr.push(true);
  } 
  arr[0] = false;
  arr[1] = false;
  for (let i = 0; i <= numberRange; i++) {
    if (arr[i]) {
      for (let j = i + i; j <= numberRange; j = j + i) {
        arr[j] = false;
      }
    }
  }
  const ans = [];
  for (let i = 0; i <= numberRange; i++) {
    if (arr[i]) {
      ans.push(i);
    }
  }
  res.status(200).send({ans});
});
// assignment 2
app.get('/getpower',(req,res)=>{
  const number = req.query.number;
  const pow = req.query.pow;
  const ans = Math.pow(number,pow);
  res.status(200).send({ans});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
