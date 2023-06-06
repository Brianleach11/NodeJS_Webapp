var express = require('express');
var router = express.Router();

router.use(express.json());

/* GET home page. */
router.post('/test', function(req, res) {
    const data = req.body;
    console.log(data);

    // Send a response
    res.send('Data received successfully');
  });

module.exports = router;