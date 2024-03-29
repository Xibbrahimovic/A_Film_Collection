const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get(`/`, (req, res) => {
  const query = `
  SELECT genres.name FROM movies
            JOIN movies_genres ON movies.id = movies_genres.movie_id
            JOIN genres ON genres.id = movies_genres.genre_id
                WHERE movies.id = $1`; 
  pool.query(query, [req.query.id])
    .then( result => {
      res.send(result.rows);})
    .catch(err => {
      console.log('ERROR: Get details', err);
      res.sendStatus(500)
    })

});


router.get('/all', (req,res) => {
  const query = `SELECT * FROM genres;`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })
})
module.exports = router;