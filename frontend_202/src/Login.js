import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';  // You can create a corresponding CSS file for styling

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/auth/login', formData);
            if (response.data.token) {

                 // Store the received JWT token in local storage for further authenticated requests
                 localStorage.setItem('token', response.data.token);
                  localStorage.setItem('role', response.data.user.role);  // Store user role
                setMessage('Login successful!');
            } else {
                setMessage('Login failed.');
            }
        } catch (error) {
            setMessage(`Login error: ${error}`);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" onChange={handleChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" onChange={handleChange} required />
                </div>
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
