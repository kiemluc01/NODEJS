const homeRoute = require('./home');

function routes(app) {
  //route
  app.get('/', (req, res) => res.send('<h1>Nguyễn Kiêm Lực</h1>'));
  app.use('/Home', homeRoute);
}

module.exports = routes;
