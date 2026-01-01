import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import FloatingWidgets from './components/FloatingWidgets';
import Home from './pages/Home';
import RecentWorksPage from './pages/RecentWorksPage';
import GalleryPage from './pages/GalleryPage';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
        <Navbar onOpenConsultation={openModal} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenConsultation={openModal} />} />
            <Route path="/recent-works" element={<RecentWorksPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWidgets />
        <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </Router>
  );
}

export default App;
