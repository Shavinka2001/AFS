import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white sticky top-0 z-50 border-b border-gray-200 transition-all duration-300 ${
      isScrolled ? 'shadow-lg backdrop-blur-sm bg-white/98' : 'shadow-sm'
    }`}>
      {/* Top accent bar */}
      <div className="h-0.5 bg-[#730007]"></div>
      
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-18'
        }`}>
          {/* Logo Section */}
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="relative">
              <img 
                src="/logo.jpg" 
                alt="AFS Logo" 
                className={`rounded-md shadow-sm border border-gray-200 object-contain bg-white transition-all duration-300 ${
                  isScrolled ? 'h-10' : 'h-12'
                } w-auto`}
              />
            </div>
            <div className="flex flex-col">
              <h1 className={`font-semibold text-[#020324] tracking-tight leading-tight transition-all duration-300 ${
                isScrolled ? 'text-lg' : 'text-xl'
              }`}>
                AGILE FACILITIES SOLUTION
              </h1>
              <p className={`text-gray-600 font-medium text-xs tracking-wide transition-all duration-300 ${
                isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'
              }`}>
                Professional Excellence Since 2010
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center space-x-8 mr-8">
              <a href="#home" className="text-gray-700 font-medium hover:text-[#730007] transition-colors duration-200">
                Home
              </a>
              <a href="#services" className="text-gray-700 font-medium hover:text-[#730007] transition-colors duration-200">
                Services
              </a>
              <a href="#about" className="text-gray-700 font-medium hover:text-[#730007] transition-colors duration-200">
                About
              </a>
              <a href="#projects" className="text-gray-700 font-medium hover:text-[#730007] transition-colors duration-200">
                Projects
              </a>
              <a href="#contact" className="text-gray-700 font-medium hover:text-[#730007] transition-colors duration-200">
                Contact
              </a>
            </nav>
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <a href="tel:+1234567890" className="px-4 py-2 text-gray-600 font-medium hover:text-[#730007] transition-colors duration-200 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span className="hidden xl:inline">Call Now</span>
              </a>
              <a href="#quote" className="px-6 py-2.5 bg-[#730007] text-white font-medium rounded-md hover:bg-[#5a0005] transition-colors duration-200">
                Get Quote
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-[#730007] hover:bg-gray-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#730007]/20"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <span className={`block h-0.5 w-6 bg-current transition-all duration-200 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : 'translate-y-0'
                }`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-200 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-200 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40">
            <div className="max-w-7xl mx-auto">
              <div className="px-6 py-4 space-y-2">
                <a 
                  href="#home" 
                  className="block px-4 py-3 text-gray-700 font-medium hover:text-[#730007] hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#services" 
                  className="block px-4 py-3 text-gray-700 font-medium hover:text-[#730007] hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="#about" 
                  className="block px-4 py-3 text-gray-700 font-medium hover:text-[#730007] hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#projects" 
                  className="block px-4 py-3 text-gray-700 font-medium hover:text-[#730007] hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="block px-4 py-3 text-gray-700 font-medium hover:text-[#730007] hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                
                {/* Mobile CTA Section */}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <a 
                    href="tel:+1234567890" 
                    className="flex items-center justify-center px-4 py-3 text-gray-700 font-medium border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    Call Now
                  </a>
                  <a 
                    href="#quote" 
                    className="block w-full px-4 py-3 bg-[#730007] text-white font-medium text-center rounded-md hover:bg-[#5a0005] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
