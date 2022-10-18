const Course = require('../models/Course')

class HomeController {
    index(req, res) {
        Course.find({}, function(err, courses) {
            if (!err)
                return res.json(courses)
            return res.status(400).json({ err: "ERROR!!!" })
        })

        // res.render('home');
    }

    search(req, res) {
        console.log(req.body);
        res.send('xong!');
    }
}

module.exports = new HomeController();