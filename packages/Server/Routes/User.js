const express = require('express');
const router = express.Router()



router.get('/user', async (req, res) => {

    res.send('GET request to /users');

});


module.exports = router;