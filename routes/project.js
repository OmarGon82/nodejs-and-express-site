const express = require('express');
const router = express.Router();
const  { data } = require('../data/projectData.json');
const  { projects } = data;

router.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    
        if (!projects[id]) {
            const err = new Error("It looks like the page you are looking for doesn't exist");
            err.status = 404;
            res.locals.error = err;
            console.log(res.locals.error);
            res.render('error')
        }  else {
            const { project_name,
                    description,
                    technologies,
                    live_link,
                    github_link,
                    image_urls } = projects[id];
            const templateData = {
                id,
                project_name,
                description,
                technologies,
                live_link,
                github_link,
                image_urls,
            } 
            res.render('project', templateData);
        }
            


});


module.exports = router;

