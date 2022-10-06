const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const morgan = require('morgan')

const app = express()
const port = 8000

// set url/file static
app.use(express.static(__dirname + '/resources/public'))
    // app.console.log(__dirname)

///http logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set("views", path.join(__dirname, 'resources/views'))

//route
app.get('/', (req, res) => res.send('<h1>Nguyễn Kiêm Lực</h1>'))
app.get('/Home', (req, res) => {
    res.render('home')
})


app.listen(port, () => {
    console.log(`Your app listening on port http://127.0.0.1:${port}`)
})