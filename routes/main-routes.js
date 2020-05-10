const express = require('express');
const router = express.Router();


router.route('/login')
    .post((req, res) => {
        res.json({name: 'idan'});
    });

router.route('/fruits')
    .get((req, res) => {
        res.json([
            'Banana', 'Melon'
        ]);
    });


module.exports = router;
