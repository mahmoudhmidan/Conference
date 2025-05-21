import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import '../css/app.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
  </Router>
);

root.render(<App />);
