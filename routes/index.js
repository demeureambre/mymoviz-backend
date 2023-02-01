var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const TMDB_API_KEY = '0711df9d457841c565651cfb92bf41c4'

router.get('/movies', (req, res) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`)
				.then(response => response.json())
				.then(apiData => {
                    res.json({movies: apiData.results})
                 });

});


module.exports = router;
