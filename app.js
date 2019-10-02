/**
 * Dependencies used in this project.
 */
const express = require('express');
const app  = express();
const port = process.env.Port || 3000;
/**
 *middleware set up.
 */
app.use('/static', express.static('public'))
app.set('view engine', 'pug');

/**
 * variables for routes
 */
const routes = require('./routes');
const aboutRouter = require('./routes/about');
const projectsRouter = require('./routes/project');

/**
 * routes and redirects
 */
app.use(routes);
app.use(aboutRouter);
app.use(projectsRouter);
app.use('/', projectsRouter);

/**
 * error handling. Throws 404 error if URL not found
 */
app.use((req, res, next) => {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err)
    console.log(res.locals.error);
});

/**
 * starting the local server on port 3000.
 */
app.listen(port, () => {
    console.log("The app is running on localhost: 3000");
});