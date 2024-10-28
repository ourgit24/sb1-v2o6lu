import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { CourseDetail } from './pages/CourseDetail';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course/:id" element={<CourseDetail />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;