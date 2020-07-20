// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const secret = 'secret';
const express = require('express');

module.exports = (app) => {
    app.use(cors());

    app.use(express.json())
    app.use(express.urlencoded({
        extended: false
    }))

    app.use(cookieParser(secret));
};