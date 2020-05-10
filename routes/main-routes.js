const express = require('express');
const router = express.Router();


router.route('/login')
    .post((req, res) => {
        res.json({name: 'idan'});
    });


module.exports = router;
