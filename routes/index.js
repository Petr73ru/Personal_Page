var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.headers.host === 'api.i-ptr.com')
	res.send('Hello')
    if(req.headers.host === 'i-ptr.com')
	res.render('index', { title: 'Peter Web Page!' });
});

module.exports = router;
