const express = require('express');
const route = express.Router();

app.get('/about', (req, res) => {
    res.render('about');
});

module.exports = route;