import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Lock } from 'lucide-react';
import { useSite } from '../context/SiteContext';

// Custom Logo Component mimicking the provided image
const OprixLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="oprix-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#2dd4bf" /> {/* Teal-400 */}
        <stop offset="100%" stopColor="#10b981" /> {/* Emerald-500 */}
      </linearGradient>
    </defs>
    
    {/* Central Hub (Stable) */}
    <circle cx="50" cy="50" r="14" stroke="url(#oprix-gradient)" strokeWidth="6" className="opacity-90" />
    <circle cx="50" cy="50" r="6" fill="url(#oprix-gradient)" />
    
    {/* Radiating Nodes - Continuous Spin Animation */}
    <g className="origin-center animate-spin-slow">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 50 50)`}>
          <line x1="68" y1="50" x2="80" y2="50" stroke="url(#oprix-gradient)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="88" cy="50" r="6" fill="url(#oprix-gradient)" />
          {/* Inner connecting nodes */}
          <circle cx="60" cy="50" r="3" fill="url(#oprix-gradient)" className="opacity-70" />
        </g>
      ))}
    </g>
  </svg>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { content } = useSite();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-100 selection:bg-oprix-accent selection:text-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 glass-panel border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative transition-transform duration-300">
                <OprixLogo className="w-10 h-10" />
                <div className="absolute inset-0 bg-oprix-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white group-hover:text-white transition-colors">
                Oprix <span className="text-oprix-accent group-hover:text-white transition-colors">Ai</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-oprix-accent'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/admin" className="ml-4 p-2 text-gray-600 hover:text-oprix-accent transition-colors">
                 <Lock className="w-4 h-4" />
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden glass-panel border-t border-white/5 absolute w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-4 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'bg-oprix-accent/10 text-oprix-accent'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow relative">
          {/* Background Elements */}
          <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-oprix-accent/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-[120px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          </div>
          {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-oprix-dark pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4 group">
                 <OprixLogo className="w-8 h-8" />
                 <span className="font-display font-bold text-xl">Oprix <span className="text-oprix-accent">Ai</span></span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Pioneering the future of enterprise automation. Intelligent solutions for complex SAP ecosystems.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><Link to="/about" className="hover:text-oprix-accent transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-oprix-accent transition-colors">Services</Link></li>
                <li><Link to="/careers" className="hover:text-oprix-accent transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><Link to="/privacy" className="hover:text-oprix-accent transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-oprix-accent transition-colors">Terms of Service</Link></li>
                <li><Link to="/security" className="hover:text-oprix-accent transition-colors">Security</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="flex items-center"><span className="w-20 text-gray-600">Email:</span> {content.contact.email}</li>
                <li className="flex items-start"><span className="w-20 text-gray-600 shrink-0">Address:</span> {content.contact.address}</li>
                <li className="flex items-center"><span className="w-20 text-gray-600">Phone:</span> {content.contact.phone}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Oprix AI Inc. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
               {/* Social placeholders */}
               <div className="w-5 h-5 bg-gray-800 rounded-full hover:bg-oprix-accent transition-colors cursor-pointer"></div>
               <div className="w-5 h-5 bg-gray-800 rounded-full hover:bg-oprix-accent transition-colors cursor-pointer"></div>
               <div className="w-5 h-5 bg-gray-800 rounded-full hover:bg-oprix-accent transition-colors cursor-pointer"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;