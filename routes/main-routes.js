const express = require('express');
const consts = require('../consts');
const router = express.Router();

router.route('/login')
    .post((req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        if (username !== 'flutter' || password !== '1234') {
            res.status(402).send('Username or password is incorrect');
            return;
        }

        res.json({token: consts.TOKEN});
    });

router.route('/fruits')
    .get((req, res) => {
        res.json([
            'Banana', 'Melon'
        ]);
    });

module.exports = router;
