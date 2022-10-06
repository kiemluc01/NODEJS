const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const morgan = require('morgan')

const app = express()
const port = 8000

// set url stat.static(path.join(__dirname, 'public'ic/file static
app.use(express.static(path.join(__dirname, 'public')))

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
app.get('/home', (req, res) => {
    res.render('home')
})


app.listen(port, () => {
    console.log(`Your app listening on port http://127.0.0.1:${port}`)
})