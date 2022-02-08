const express = require('express');

const router = express.Router();

router.get('/hello', (req, res) => {
	console.log(req.serverBuild);
	res.send('hello');
});

module.exports = router;
