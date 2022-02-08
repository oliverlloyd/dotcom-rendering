const express = require('express');

const router = express.Router();

router.get('/hello', (req, res) => {
	console.log(Object.keys(req));
	res.send('hello');
});

module.exports = router;
