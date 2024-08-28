import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Demo from './Components/Demo'; // Import the Demo component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Hero />} /> {/* Home page with Hero component */}
          <Route path="/demo" element={<Demo />} /> {/* Demo page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
