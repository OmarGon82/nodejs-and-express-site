const express = require('express');
const router = express.Router();
const   { data }   = require('../data/projectData.json');
const  { projects } =  data;


/**
 * route for main page
 */
router.get('/', (req, res) => {
res.render('index', { projects });
});
    
module.exports = router; 