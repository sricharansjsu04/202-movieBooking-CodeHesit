import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminMovie.css';

function AdminDashboard() {
    const [movies, setMovies] = useState([]);
    const [newMovie, setNewMovie] = useState({ title: '', description: '', duration: '', release_date: '' });
    const [theaters, setTheaters] = useState([]);
    const [showtimes, setShowtimes] = useState([]);
    const [newAssignment, setNewAssignment] = useState({ movie_id: '', theater_id: '', showtime: '' });

    // Fetch movies, theaters, and showtimes on component mount
    useEffect(() => {
        async function fetchData() {
            try {
                const moviesResponse = await axios.get('http://localhost:5001/admin/movies');
                setMovies(moviesResponse.data.movies);

                const theatersResponse = await axios.get('http://localhost:5001/admin/theaters');
                setTheaters(theatersResponse.data.theaters);

                const showtimesResponse = await axios.get('http://localhost:5001/admin/showtimes');
                setShowtimes(showtimesResponse.data.showtimes);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    // ... other functions like handleInputChange, handleAddMovie, etc.
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
};

    const handleAddMovie = async () => {
    try {
        await axios.post('http://localhost:5001/admin/add-movie', newMovie);
        const moviesResponse = await axios.get('http://localhost:5001/admin/movies');
        setMovies(moviesResponse.data.movies);
    } catch (error) {
        console.error('Error adding movie:', error);
    }
};

    const handleAssignmentChange = (e) => {
    const { name, value } = e.target;
    setNewAssignment((prevAssignment) => ({ ...prevAssignment, [name]: value }));
};

    const handleAddAssignment = async () => {
    try {
        await axios.post('http://localhost:5001/admin/add-showtime', newAssignment);
        const showtimesResponse = await axios.get('http://localhost:5001/admin/showtimes');
        setShowtimes(showtimesResponse.data.showtimes);
    } catch (error) {
        console.error('Error adding showtime assignment:', error);
    }
};



    return (
        <div className="admin-dashboard">
            <h2>Movie Management</h2>
            <div className="section">
                {/* Display a form to add a new movie */}
                <div>
                    <input type="text" name="title" placeholder="Movie Title" onChange={handleInputChange} />
                    <textarea name="description" placeholder="Movie Description" onChange={handleInputChange}></textarea>
                    <input type="number" name="duration" placeholder="Duration (in mins)" onChange={handleInputChange} />
                    <input type="date" name="release_date" onChange={handleInputChange} />
                    <button onClick={handleAddMovie}>Add Movie</button>
                </div>

                <h3>List of Movies</h3>
                {/* Display a list of movies */}
                {movies.map(movie => (
                    <div key={movie.id}>
                        <h4>{movie.title}</h4>
                        <p>{movie.description}</p>
                    </div>
                ))}
            </div>

            <div className="section">
                <h3>Assign Movie to Theater</h3>
                <div>
                    <select name="movie_id" onChange={handleAssignmentChange}>
                        {movies.map(movie => (
                            <option key={movie.id} value={movie.id}>{movie.title}</option>
                        ))}
                    </select>
                    <select name="theater_id" onChange={handleAssignmentChange}>
                        {theaters.map(theater => (
                            <option key={theater.id} value={theater.id}>{theater.name}</option>
                        ))}
                    </select>
                    <input type="time" name="showtime" onChange={handleAssignmentChange} />
                    <button onClick={handleAddAssignment}>Assign Showtime</button>
                </div>

                <h3>List of Assigned Showtimes</h3>
                {/* Display a list of showtime assignments */}
                {showtimes.map(showtime => (
                    <div key={showtime.id}>
                        <h4>{showtime.movie.title} at {showtime.theater.name}</h4>
                        <p>Showtime: {showtime.showtime}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminDashboard;
