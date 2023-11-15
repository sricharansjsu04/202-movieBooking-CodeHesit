const express = require('express');
const router = express.Router();
const authenticateJWT = require('./authMiddleware');


const { Pool } = require('pg');

const db = new Pool({
  connectionString: 'postgresql://charan:9046@127.0.0.1/movieBookingDB'
});

// Fetching user bookings
router.get('/bookings',authenticateJWT, async (req, res) => {
     const userId = req.user.user_id;

  try {
    const bookings = await db.query('SELECT * FROM bookings WHERE user_id = $1', [userId]);
    console.log('backend data')
    console.log(bookings);
    res.json(bookings.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Fetching user reward points
router.get('/rewards', authenticateJWT,  async (req, res) => {
   const userId = req.user.user_id;

  try {
    const rewards = await db.query('SELECT rewards_points FROM users WHERE user_id = $1', [userId]);
    res.json(rewards.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Fetching movies watched in the past 30 days
router.get('/watched-movies',authenticateJWT, async (req, res) => {
    const userId = req.user.user_id;

  try {
    // You will need to adjust this query based on your database structure
    const movies = await db.query('SELECT * FROM movies');
    res.json(movies.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
