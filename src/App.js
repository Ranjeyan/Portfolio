import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Demo from './Components/Demo';
import FloatingButton from './Components/FloatingButton';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='bg'></div>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} /> 
          <Route path="/demo" element={<Demo />} /> 
        </Routes>
        <FloatingButton/>
      </div>
    </Router>
  );
}

export default App;
