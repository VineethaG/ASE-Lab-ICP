var createError = require('http-errors');
var cors = require('cors')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const student_details = new Schema({
    student_ID: String,
    student_Name: String,
    course_of_study: String,
    major: String,
    minor: String
});
const students_schema = mongoose.model('student_details', student_details);
let db_promise = mongoose.connect('mongodb://<username>:<password>@ds137283.mlab.com:37283/in_class_program_9');
db_promise.then((data)=>{
  console.log('DB connection established !');
}).catch((err)=>{
  console.log(err.message);
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())


app.post('/register/*',(req,res)=>{
    let body = req.query;

    console.log(body);
    let students_data = new students_schema({
        student_ID: body.studentId,
        student_Name: body.studentName,
        course_of_study: body.COS,
        major: body.major,
        minor: body.minor
    });
students_data.save((err,data)=>{
        if(!err) {
    console.log("Data saved !");
            res.status(200).send("Data saved !");
        }
        else{
            console.log(err.message);
            res.status(400).send('bad request');
        }
    });
})

app.get('/getDetails/*',(req,res)=>{
    let query = req.query;
    console.log(query);

    students_schema.find({major: query.major}, function (err, data) {
        if (!err) {
            res.send(data);
            console.log(data)
        }
        else{
            res.status(400).send('bad request');
        }
    });
});
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
