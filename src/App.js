import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Search from './components/Search';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={setIsAuthenticated} />} />
        <Route path="/search" element={isAuthenticated ? <Search /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
