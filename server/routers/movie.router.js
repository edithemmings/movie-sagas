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
    const queryText = `SELECT "movies".id, "movies".title, "movies".poster, "movies".description, "genres".name
    FROM "movies"
    JOIN "movie_genre" on "movies".id = "movie_genre".movies_id
    JOIN "genres" on "movie_genre".genres_id = "genres".id
    WHERE "movies".id = $1;`;
    pool.query(queryText, [req.params.id])
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT movie query', err);
            res.sendStatus(500);
        });
});
// router.post('/', (req, res) => {
//     let queryText = `INSERT INTO "movie_genre"("movies_id", "genres_id" VALUES($1, $2);`
//     pool.query(queryText, [req.body.movieId, req.body.genreId])
//         .then(result => {
//             res.sendStatus(201);
//         }).catch(error => {
//             console.log('error adding a genre', error)
//             res.sendStatus(500)
//         })
// })

//UPDATERRR
router.put('/:id', (req, res) => {
    console.log('puts are talking! & sent back', req.params.id)
    let queryText = `UPDATE "movies" SET "title" = $1, "description" = $2 WHERE "id" = $3;`;
    pool.query(queryText, [req.body.title, req.body.description, req.params.id])
        .then((result) => {
            console.log("PUT result", result);
            res.sendStatus(201);
        }).catch((error) => {
            console.log('error making query', error);
            res.sendStatus(500)
        })
})// END PUT ROUTE


module.exports = router;