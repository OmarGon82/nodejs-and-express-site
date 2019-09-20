const express = require('express');
const bodyParser = require('body-parser');

const app  = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('public'))
app.set('view engine', 'pug');

const routes = require('./routes');
const aboutRouter = require('./routes/about');
const projectsRouter = require('./routes/project');

app.use(routes);
app.use(aboutRouter);
app.use(projectsRouter);
app.use('/', projectsRouter);


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

app.listen(3000, () => {
    console.log("The app is running on localhost: 3000");
});