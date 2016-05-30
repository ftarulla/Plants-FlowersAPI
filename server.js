var express    = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var responses = require("./responses.js");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use('/api', router); // routes will be /api/whatever
app.use('/', router);

router.get('/', function(req, res) {
    res.json({ message: 'Welcome to Plants & Flowers!' });
});

router.route('/api-search/by-url')

    .get(function(req, res) {
        console.log(req.query);
        res.json(responses.random());
    });

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server started at port ' + port);
});
