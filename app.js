var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(stockRepository) {
    var app = express();
    var routes = require('./routes')(stockRepository);
    var middleware = require('./middleware');

    app.use(middleware.logIncoming);

    app.use(bodyParser.json());

    app.get('/', function() {res.send("Hello ES6")});
    app.get('/', middleware.authorize);

    app.post('/stock', routes.stockUp);
    app.get('/stock', routes.findAll);
    app.get('/stock/:isbn', routes.getCounter);

    app.use(middleware.clientError);
    app.use(middleware.serverError);

    return app;
};