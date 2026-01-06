import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SiteProvider } from './context/SiteContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import { AIChatWidget } from './components/AIChatWidget';

const App: React.FC = () => {
  return (
    <SiteProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
        <AIChatWidget />
      </HashRouter>
    </SiteProvider>
  );
};

export default App;
