const express = require('express');
const consts = require('../consts');
const router = express.Router();


router.route('/fruits')
    .get((req, res) => {
        const baseUrl = 'https://flutter-course.herokuapp.com/images/';
        res.json([
            {
                name: 'בננה',
                'image': baseUrl + 'banana.png',
                price: 0.4
            },
            {
                name: 'מלון',
                'image': baseUrl + 'melon.png',
                price: 0.94
            },
            {
                name: 'תפוח',
                'image': baseUrl + 'apple.png',
                price: 0.6
            },
            {
                name: 'אבוקדו',
                'image': baseUrl + 'avokado.png',
                price: 2.26
            },
            {
                name: 'תמר',
                'image': baseUrl + 'dates.png',
                price: 1.6
            },
            {
                name: 'אפרסק',
                'image': baseUrl + 'peach.png',
                price: 0.78
            },
            {
                name: 'תפוז',
                'image': baseUrl + 'orange.png',
                price: 0.36
            },
            {
                name: 'קלמנטינה',
                'image': baseUrl + 'mandarine.png',
                price: 0.55
            },
            {
                name: 'כרוב',
                'image': baseUrl + 'cabbage.png',
                price: 0.23
            },
            {
                name: 'חציל',
                'image': baseUrl + 'eggplant.png',
                price: 0.9
            },
            {
                name: 'אבטיח',
                'image': baseUrl + 'watermelon.png',
                price: 1.3
            }

        ]);
    });


router.route('/makeOrder')
    .post((req, res) => {
        const items = req.body.items;
        res.send('OK');
    });

module.exports = router;
