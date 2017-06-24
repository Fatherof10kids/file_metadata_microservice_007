const express = require('express');
const multer = require('multer');

var app = express();
var upload = multer({ dest: __dirname + '/uploads' });

var port = process.env.PORT || 5000;

app.use(express.static(__dirname+'/public'));

/*app.get('/*',(req,res)=>{
  res.end('hello');
});*/

app.post('/get-file-size',upload.single('file_thats_uploaded'),(req,res)=>{
    res.json({'size': req.file.size});
});

app.listen(port,console.log("Server is listening to port "+port));
