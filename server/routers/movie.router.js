const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Return back an array of all the movies
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "movies";';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); console.log(result.rows)})
        .catch((err) => {
            console.log('Error completing SELECT movie query', err);
            res.sendStatus(500);
        });
});

// Return the details of the selected movie
router.get('/:id', (req, res) => {
    const queryText = 'SELECT * FROM "movies" WHERE id=$1';
    pool.query(queryText, [req.params.id])
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT movie query', err);
            res.sendStatus(500);
        });
});

module.exports = router;