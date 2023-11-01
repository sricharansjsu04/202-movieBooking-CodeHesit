import React, { useState, useEffect } from "react";
import './MovieSchedule.css'; // Add your CSS file here
import { useNavigate } from "react-router-dom";


const MovieSchedule = () => {
    // State variables
    const [movieSchedule, setMovieSchedule] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    // You can use Axios for API calls as shown in your previous code
    // Replace the API endpoint with the actual endpoint for movie schedules
    // Example:
    // const Axios = axios.create({baseURL: 'https://your-movie-api.com'});

    const navigate = useNavigate();

    // Function to load movie schedules based on the selected date
    const loadMovieSchedule = () => {
        // Use Axios to fetch movie schedules based on the selectedDate
        // Replace this with your API call
        // Example:
        // Axios.get(`/movie-schedules?date=${selectedDate}`)
        //   .then((response) => {
        //     setMovieSchedule(response.data);
        //   })
        //   .catch(err => {
        //     console.error(err);
        //   });

        // For this example, let's use dummy data
        const dummyData = [
            { movie: "Movie 1", time: "10:00 AM" },
            { movie: "Movie 2", time: "1:00 PM" },
            { movie: "Movie 3", time: "4:00 PM" },
            // Add more movie schedules here
        ];

        setMovieSchedule(dummyData);
    };

    useEffect(() => {
        loadMovieSchedule();
    }, [selectedDate]);

    // Handle date selection
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    return (
        <div>

            <button style={{ margin: '20px' }} type="button" className="btn btn-primary" onClick={() => navigate('/homepage')}>Back to Home</button>
            <div style={{ width: '90vw', margin: 'auto', marginTop: '10vh' }}>
                <label style={{ textAlign: 'center', fontSize: '20px', marginBottom: '10px' }}>Movie Schedule</label>
                <div className="date-selector">
                    <label>Select Date:</label>
                    <input type="date" value={selectedDate} onChange={handleDateChange} />
                </div>
                <table className="table table-hover table-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th>Movie</th>
                            <th>Showtime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movieSchedule.map((schedule, index) => (
                            <tr key={index}>
                                <td>{schedule.movie}</td>
                                <td>{schedule.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MovieSchedule;
