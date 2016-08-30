var router = require('express').Router();

router.get(['/', 'index', 'index.html'], function(req, res) {
    res.sendFile('index.html', {root: './public'});
});
router.get('/scripts.js', function(req, res) {
    res.sendFile('scripts.js', {root: './public'});
});


module.exports = router;