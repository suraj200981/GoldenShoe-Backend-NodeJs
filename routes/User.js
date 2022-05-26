const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Suraj Sharma");
})

//export
module.exports = router;
