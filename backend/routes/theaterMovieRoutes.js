const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const pool = new Pool(); // Initialize with your database config

// Fetch all theaters
router.get('/theaters', async (req, res) => {
    try {
        const query = 'SELECT * FROM theaters';
        const { rows } = await pool.query(query);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Fetch all current movies with schedules for a selected theater
router.get('/theaters/:theater_id/current-movies', async (req, res) => {
    try {
        const { theater_id } = req.params;
        const query = `
            SELECT m.title, s.schedule_id, s.showtime
            FROM movies m
            JOIN schedules s ON m.movie_id = s.movie_id
            WHERE s.theater_id = $1 AND m.release_date <= CURRENT_DATE AND s.showtime >= CURRENT_TIMESTAMP
            ORDER BY s.showtime;
        `;
        const { rows } = await pool.query(query, [theater_id]);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Fetch all upcoming movies for a selected theater
router.get('/theaters/:theater_id/upcoming-movies', async (req, res) => {
    try {
        const { theater_id } = req.params;
        const query = `
            SELECT m.title, s.schedule_id, s.showtime
            FROM movies m
            JOIN schedules s ON m.movie_id = s.movie_id
            WHERE s.theater_id = $1 AND m.release_date > CURRENT_DATE
            ORDER BY m.release_date;
        `;
        const { rows } = await pool.query(query, [theater_id]);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Book a movie for a user by schedule and theater of that movie
router.post('/bookings', async (req, res) => {
    try {
        const { user_id, schedule_id, number_of_tickets } = req.body;
        const serviceFee = 1.50; // Service fee per ticket
        const query = `
            INSERT INTO bookings (user_id, schedule_id, number_of_tickets, total_price, booking_date)
            SELECT $1, $2, $3, (s.price * $3 + $3 * $4), CURRENT_DATE
            FROM schedules s
            WHERE s.schedule_id = $2
            RETURNING *;
        `;
        const { rows } = await pool.query(query, [user_id, schedule_id, number_of_tickets, serviceFee]);
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
