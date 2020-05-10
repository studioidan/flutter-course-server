const express = require('express');
const consts = require('../consts');
const router = express.Router();


router.route('/fruits')
    .get((req, res) => {
        const baseUrl = '';
        res.json([
            {
                name: 'בננה',
                'image': '',
                price: 0.4
            },
            {
                name: 'מלון',
                'image': '',
                price: 0.2
            },
            {
                name: 'תפוח',
                'image': '',
                price: 0.6
            },
            {
                name: 'אבוקדו',
                'image': '',
                price: 0.6
            },
            {
                name: 'תמר',
                'image': '',
                price: 0.6
            },
            {
                name: 'אפרסק',
                'image': '',
                price: 0.6
            },
            {
                name: 'תפוז',
                'image': '',
                price: 0.6
            },
            {
                name: 'קלמנטינה',
                'image': '',
                price: 0.6
            },
            {
                name: 'כרוב',
                'image': '',
                price: 0.6
            },
            {
                name: 'חציל',
                'image': '',
                price: 0.6
            },
            {
                name: 'אבטיח',
                'image': '',
                price: 0.6
            }

        ]);
    });


router.route('/makeOrder')
    .post((req, res) => {
        const items = req.body.items;
        res.send('OK');
    });

module.exports = router;
