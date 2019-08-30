const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

/**
 * DataBase Setup
 */
const uri = "mongodb+srv://DbApiNode:CodeZera2019@cluster0-84qfi.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri,
    {
        useNewUrlParser: true
    }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


app.use(require('./routes'));

app.listen(3000);



