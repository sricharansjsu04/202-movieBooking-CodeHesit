import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MemberDashboard() {
    const [bookings, setBookings] = useState([]);
    const [rewardsPoints, setRewardsPoints] = useState(0);
    const [moviesWatched, setMoviesWatched] = useState([]);

    // On component mount, fetch the user's bookings, reward points, and watched movies
    useEffect(() => {
        async function fetchData() {
            try {
                const token = localStorage.getItem('token');
                const config = {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                };

                // Fetch user bookings (assuming an endpoint exists on the backend)
                const bookingResponse = await axios.get('http://localhost:5001/user/bookings', config);
                setBookings(bookingResponse.data);

                // Fetch user reward points (assuming an endpoint exists on the backend)
                const rewardResponse = await axios.get('http://localhost:5001/user/rewards', config);
                setRewardsPoints(rewardResponse.data.points);

                // Fetch movies watched in the past 30 days (assuming an endpoint exists on the backend)
                const moviesResponse = await axios.get('http://localhost:5001/user/watched-movies', config);
                setMoviesWatched(moviesResponse.data.movies);


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h2>Your Bookings</h2>
            {/* Display a list of bookings */}

            <h2>Reward Points: {rewardsPoints}</h2>

            <h2>Movies Watched in the Past 30 Days</h2>
            {/* Display a list of watched movies */}
        </div>
    );
}

export default MemberDashboard;