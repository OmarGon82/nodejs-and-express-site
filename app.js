const express = require('express');
const app  = express();

// const bodyParser = require('body-parser');

app.use('/static', express.static('public'))
app.set('view engine', 'pug');

const routes = require('./routes');
const aboutRouter = require('./routes/about');
const projectsRouter = require('./routes/project');

app.use(routes);
app.use(aboutRouter);
app.use(projectsRouter);


// app.get('/about', (req, res) => {
//     res.render('about');
// });

// app.get('/', (req, res) => {
//     res.send("This is working");
// });

app.listen(3000, () => {
    console.log("The app is running on localhost: 3000");
});