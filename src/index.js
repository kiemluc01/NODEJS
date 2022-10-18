const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars');
const morgan = require('morgan')
const db = require('./config/DB')

//connect
db.connect()

const app = express()
const port = 8000
const host = "127.0.0.1"

const routes = require('./routes')

//middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// set url/file static
app.use(express.static(__dirname + '/resources/public'));
// app.console.log(__dirname)

///http logger
app.use(morgan('combined'));

//template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//ROUTE
routes(app);

app.listen(port, () => {
    console.log(`Your app listening on port http://${host}:${port}`);
});