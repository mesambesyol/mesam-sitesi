
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import ServiceDetailPage from './pages/ServiceDetailPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import BlogPage from './pages/BlogPage.tsx';
import BlogPostPage from './pages/BlogPostPage.tsx';
import DoctorsPage from './pages/DoctorsPage.tsx';
import DoctorDetailPage from './pages/DoctorDetailPage.tsx';
import AppointmentPage from './pages/AppointmentPage.tsx'; 
import QuizPage from './pages/QuizPage.tsx';
import { useLanguage } from './contexts/LanguageContext.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import AiChatbot from './components/AiChatbot.tsx';
import KVKKPage from './pages/KVKKPage.tsx';
import FormSuccessPage from './pages/FormSuccessPage.tsx';

const App: React.FC = () => {
  const { isFading } = useLanguage();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-stone-100 text-gray-800">
        <TopBar />
        <Navbar />
        <main className={`flex-grow content-fade ${isFading ? 'content-fading-out' : ''}`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hakkimizda" element={<AboutPage />} />
            <Route path="/kurumsal/kvkk" element={<KVKKPage />} />
            <Route path="/hizmetlerimiz" element={<ServicesPage />} />
            <Route path="/hizmetlerimiz/:slug" element={<ServiceDetailPage />} />
            <Route path="/hekimlerimiz" element={<DoctorsPage />} />
            <Route path="/hekimlerimiz/:slug" element={<DoctorDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/test" element={<QuizPage />} />
            <Route path="/iletisim" element={<ContactPage />} />
            <Route path="/randevu" element={<AppointmentPage />} /> 
            <Route path="/form-basarili" element={<FormSuccessPage />} />
          </Routes>
        </main>
        <Footer />
        <AiChatbot />
      </div>
    </BrowserRouter>
  );
};

export default App;
