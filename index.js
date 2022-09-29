const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 8080

app.use(morgan('combined'))
    //route
app.get('/', (req, res) => res.send('<h1>Nguyễn Kiêm Lực</h1>'))

app.listen(port, () => {
    console.log(`Your app listening on port http://127.0.0.1:${port}`)
})