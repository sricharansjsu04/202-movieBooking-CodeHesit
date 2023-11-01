import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from "./HomePage";
import MovieSchedule  from "./MovieSchedule"
import Register from "./Register";
import Login from "./Login";
import MemberDashboard from "./MemberDashboard";
import AdminMovie from "./AdminMovie";

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} /> {/* Default route */}
         <Route path="/homepage" element={<HomePage />} /> {/* Default route */}
        <Route path="/movie-schedule" element={<MovieSchedule />} /> {/* Route to Movie Schedule */}
          <Route path="/register" element={<Register />} /> {/* Route to Register */}
          <Route path="/login" element={<Login />} /> {/* Route to Register */}
          <Route path="/memberDashboard" element={<MemberDashboard />} /> {/* Route to Register */}
          <Route path="/adminMovie" element={<AdminMovie />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
