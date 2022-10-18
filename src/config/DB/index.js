const mongoose = require('mongoose')

async function connect() {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/NODE_F8_dev", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('success')
    } catch (error) {
        console.log(error, 'error')
    }

}

module.exports = { connect }