var createError = require('http-errors');
var cors = require('cors')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const drugs =new Schema({}, { strict: false });
const drug_model  = mongoose.model('drugs', drugs);
// const product_model  = mongoose.model('products', product_schema);
let db_promise = mongoose.connect('mongodb://Vineetha:vineetha9@ds163758.mlab.com:63758/ice10');
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

app.get('/drug/search',(req,res)=>{
    let search_text = req.query;
    console.log(search_text)
    drug_model.find({name:search_text.searchtext}, function(err, drug)
    {
        if (!err) {
            res.send({
                result: "Success",
                data: drug
            });
        } else {
            res.status(400).send({
                result: "Failure",
                message: "Error in fetching drug list",
                error: err.message
            });
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