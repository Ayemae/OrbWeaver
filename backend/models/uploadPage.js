const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');

var fs = require('fs');
var dir = __dirname + '/public/comics';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload());

app.post('/upload', (req, res, next) => {
    console.log(req);
    let imageFile = req.files.file;
  
    // if folder for uploads does not exist, make it
    if (!fs.existsSync(dir)) {
      fs.mkdir(dir);
    }
      // grab image extension
      let ext = req.files.file.name.split('.').pop();
  
      // move image file into apropriate folder
      imageFile.mv(`${__dirname}/public/comics/${req.body.filename}.${ext}`, function (err) {
        if (err) {
          return res.status(500).send(err);
        }  
  
      res.json({ file: `public/comics/${req.body.filename}.${ext}` });
  
  
  
      db.serialize(function () {
        db.run("CREATE TABLE IF NOT EXISTS pages (id INTEGER PRIMARY KEY, page_path TEXT, author_text TEXT, timestamp INTEGER, posted INTEGER)");
  
        db.run(`INSERT INTO pages(page_path, author_text, timestamp) VALUES(?, ?, ?)`, 
        [`public/comics/${req.body.filename}.${ext}`, `${req.body.text}`, `${req.body.filename}`, "1"], function (err) {
          if (err) {
            return console.log(err.message);
          }
        })
      })
    });
  });