const express = require('express');
const router = express.Router();
const  { data } = require('../data/projectData.json');
const  { projects } = data;

//redirects for wrong urls for example if just 'projects' or 'projects/' without an id are input
router.get('/projects', (req, res) => {
    res.redirect('/projects/0');
});

router.get('/project', (req, res) => {
    res.redirect('/projects/0');
});

//this get request will through an error if the id parameter is wrong. 
router.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    //if the id.length is greater than data.projects.length throw the error
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
            console.log(templateData)
            res.render('project', templateData  );
        }
});


module.exports = router;

