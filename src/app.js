const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = 8000 || process.env.PORT;

// To set view engine as handlebars
app.set('view engine', 'hbs');
//set static path to serve HTML, CSS & JS files
app.use(express.static(path.join(__dirname, '../public')));


//set templates path
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
//set handlebars
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);



// routes
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/weather', (req, res) => {
    res.render('weather');
})

app.get('*', (req, res) => {
    res.render('404');
})


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})