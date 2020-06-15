const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//POST feedback data
router.post('/', (req, res) => {
    console.log('in results POST with', req.body);
    const feedback = req.body;
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`
    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then((result) => {
            res.sendStatus(200)
        }).catch((err) => {
            res.sendStatus(500)
        });
});

module.exports = router;