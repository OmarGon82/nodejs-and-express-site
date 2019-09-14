const express = require('express');
const router = express.Router();
const  { data } = require('../data/projectData.json');
const  { projects } = data;

router.get('/projects/:id', (req, res) => {
    res.render('projects', {
       projects: projects[req.params.id]
    });
});

module.exports = router;