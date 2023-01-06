const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
// const fs = require('fs');
var fs = require('fs-path');
app.use(cors({
    origin: ['http://127.0.0.1:5501']
}));
// For parsing application/json
app.use(express.json());
  
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.get('/file', (req, res) => {
    
    fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
      if (err) return console.log(err);
      console.log('Hello World > helloworld.txt');
    });
})
app.post('/file', (req, res) => {
  // var data= JSON.parse(req.body);
   // console.log(req.body.data);
    fs.writeFile('../logs/logevents.txt',req.body.data, function (err) {
      if (err) return console.log(err);
      console.log('Hello World post> helloworld.txt');
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})