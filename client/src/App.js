import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import AuthContainer from './Components/AuthContainer'; // Import the new container component
import './Components/style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthContainer />} /> {/* Use AuthContainer at the root path */}
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
