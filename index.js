var express = require('express'); 
const multer = require('multer'); 
var app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) { 
    cb(null, file.originalname)
  }
})

const upload = multer({
  storage: storage
})
 
app.post('/api/fileanalyse',upload.single('upfile'), (req,res,next) => { 
  console.log(req.file); 
  res.json({
    name: req.file.originalname, 
    type: req.file.mimetype, 
    size: req.file.size
  })
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
