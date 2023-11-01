const express = require('express');
const router = express.Router();
const authenticateJWT = require('./authMiddleware');


const { Pool } = require('pg');

const db = new Pool({
  connectionString: 'postgresql://charan:9046@127.0.0.1/movieBookingDB'
});

// Fetching user bookings
router.get('/bookings',authenticateJWT, async (req, res) => {
    try {
        console.log('user id is');
        const userId = req.user.user_id;
        console.log(userId);
        const bookings = await db.query('SELECT * FROM bookings WHERE user_id = $1', [userId]);
        res.json(bookings.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Fetching user reward points
router.get('/rewards', async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await db.query('SELECT rewards_points FROM users WHERE user_id = $1', [userId]);
        res.json({ points: user.rows[0].rewards_points });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Fetching movies watched in the past 30 days
router.get('/watched-movies', async (req, res) => {
    try {
        const userId = req.user.id;
        const thirtyDaysAgo = new Date(Date.now() - 30*24*60*60*1000);
        const watchedMovies = await db.query('SELECT movies.* FROM watched_movies JOIN movies ON watched_movies.movie_id = movies.movie_id WHERE user_id = $1 AND watched_date > $2', [userId, thirtyDaysAgo]);
        res.json(watchedMovies.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
