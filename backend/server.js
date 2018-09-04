const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const db = require('./dbconnection');

var fs = require('fs');
var dir = __dirname + '/public/comics';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// middleware
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));





app.get('/getpages', function (req, res) {
  let getPagesStmt = `SELECT * FROM pages WHERE posted = 1`;

  db.each(getPagesStmt, (err, row) => {
      if (err) { throw err; }
      console.log("Pages got.")
  })

  res.json(req.pages);
});





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

      db.run(`INSERT INTO pages(page_path, author_text, timestamp, posted) VALUES(?, ?, ?, ?)`,
        [`public/comics/${req.body.filename}.${ext}`, `${req.body.text}`, `${req.body.filename}`, `1`], function (err) {
          if (err) {
            return console.log(err.message);
          }
        })
    })
  });
});





// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log('Backend application awake on port ' + PORT);
});

module.exports = app;