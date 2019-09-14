const express = require('express');
const router = express.Router();
const data   = require('../data/projectData.json');

router.get('/', (req, res) => {
    res.render('index', data.projects );
});

module.exports = router;