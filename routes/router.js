var router = require('express').Router();

router.get(['/', 'index', 'index.html'], function(req, res) {
    res.sendFile('index.html', {root: './public'});
});

module.exports = router;