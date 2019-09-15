const express = require('express');
const router = express.Router();
const  { data } = require('../data/projectData.json');
const  { projects } = data;

router.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    const { project_name } = projects[id];
    const { description } = projects[id];
    const { technologies } = projects[id];
    const { live_link } = projects[id];
    const { github_link } = projects[id];
    const { image_urls } = projects[id];
    
    const templateData = {
        id,
        project_name,
        description,
        technologies,
        live_link,
        github_link,
        image_urls,
        image_urls,
    }
    res.render('project', templateData);
});


module.exports = router;

