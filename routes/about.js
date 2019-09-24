const express = require('express');
const router = express.Router();

/**
 * route for about page
 */
router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;