import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddClinicals from "./components/AddClinicals";
import AddPatient from "./components/AppPatient";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clinicals/:patientId" element={<AddClinicals />} />
          <Route path="/addPatient" element={<AddPatient />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/**
 * 
 * 
 * 
 * 
 * // App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddClinicals from './components/AddClinicals';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          {/* Add your navigation links here }
          <Link to="/">Home</Link>
          <Link to="/clinicals">Add Clinicals</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clinicals" element={<AddClinicals />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

 */
