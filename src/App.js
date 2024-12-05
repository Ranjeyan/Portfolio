import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Demo from './Components/Demo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Ranjeyan from '../src/assets/R.png';

// Custom Loader Component
function Loader() {
  return (
    <div className="loader">
      <img src={Ranjeyan} alt="Loading..." className="logo-loader" />
      {/* You can add a spinner or animation here if you like */}
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (3 seconds or adjust based on actual needs)
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Background element */}
        <div className='bg'></div>

        {/* Show custom loader while loading */}
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/demo" element={<Demo />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
