const express = require('express');
const router = express.Router()
router.use(express.urlencoded());


router.get('/user', async (request, result) => {
    let json = JSON.stringify(request.body)
    console.log(json.test);
    result.send('GET request to /users');

});


router.post("/create", async (request, result,next) => {
    let json = JSON.stringify(request.body)
    console.log(json.test);
    result.send(request.body);
});


module.exports = router;