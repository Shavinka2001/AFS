import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1a1b4f] via-[#730007] to-[#1a1b4f] text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6 group hover:transform hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col sm:flex-row sm:items-center lg:flex-col lg:items-start group-hover:animate-pulse">
              <div className="relative mb-4 sm:mb-0 sm:mr-4 lg:mb-4 lg:mr-0">
                <img 
                  src="/logo.jpg" 
                  alt="AFS Logo" 
                  className="h-16 sm:h-12 lg:h-12 w-auto rounded-lg shadow-lg border-2 border-white/20 hover:border-white/40 transition-all duration-300"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-[#730007] to-[#1a1b4f] rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              </div>
              <div className="text-center sm:text-left lg:text-left">
                <h3 className="text-xl sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  Agile Facilities Solution
                </h3>
                <p className="text-sm text-gray-200/80 font-medium">Professional Facility Management</p>
              </div>
            </div>
            <p className="text-gray-200/90 text-sm leading-relaxed hover:text-white transition-colors duration-300 text-center sm:text-left lg:text-left">
              Established in 2010, AFS provides comprehensive facility management, safety compliance, 
              and industrial hygiene services. We ensure your workplace meets all federal standards 
              while maintaining operational excellence.
            </p>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start lg:justify-start">
              <a href="https://linkedin.com/company/agile-facilities-solution" target="_blank" rel="noopener noreferrer" className="text-gray-200/70 hover:text-white hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-white/10">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:info@agilefacilities.com" className="text-gray-200/70 hover:text-white hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-white/10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="tel:+15551234567" className="text-gray-200/70 hover:text-white hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-white/10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="group hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-white border-b-2 border-[#730007] pb-2 group-hover:border-white transition-colors duration-300 text-center sm:text-left">
              Our Services
            </h3>
            <ul className="space-y-3 text-gray-200/80 text-sm">
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group/item justify-center sm:justify-start">
                  <span className="w-2 h-2 bg-[#730007] rounded-full mr-3 group-hover/item:bg-white transition-colors duration-300 flex-shrink-0"></span>
                  <span className="text-center sm:text-left">Industrial Hygiene Surveys</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group/item justify-center sm:justify-start">
                  <span className="w-2 h-2 bg-[#730007] rounded-full mr-3 group-hover/item:bg-white transition-colors duration-300 flex-shrink-0"></span>
                  <span className="text-center sm:text-left">Building Controls & Automation</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group/item justify-center sm:justify-start">
                  <span className="w-2 h-2 bg-[#730007] rounded-full mr-3 group-hover/item:bg-white transition-colors duration-300 flex-shrink-0"></span>
                  <span className="text-center sm:text-left">GSA Safety Audits</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group/item justify-center sm:justify-start">
                  <span className="w-2 h-2 bg-[#730007] rounded-full mr-3 group-hover/item:bg-white transition-colors duration-300 flex-shrink-0"></span>
                  <span className="text-center sm:text-left">Lead in Water Testing</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group/item justify-center sm:justify-start">
                  <span className="w-2 h-2 bg-[#730007] rounded-full mr-3 group-hover/item:bg-white transition-colors duration-300 flex-shrink-0"></span>
                  <span className="text-center sm:text-left">Environmental Compliance</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group/item justify-center sm:justify-start">
                  <span className="w-2 h-2 bg-[#730007] rounded-full mr-3 group-hover/item:bg-white transition-colors duration-300 flex-shrink-0"></span>
                  <span className="text-center sm:text-left">24/7 Emergency Response</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="group hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-white border-b-2 border-[#730007] pb-2 group-hover:border-white transition-colors duration-300 text-center sm:text-left">
              Company
            </h3>
            <ul className="space-y-3 text-gray-200/80 text-sm">
              <li>
                <a href="#home" className="hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group/item justify-center sm:justify-start">
                  <span className="w-2 h-2 bg-[#730007] rounded-full mr-3 group-hover/item:bg-white transition-colors duration-300 flex-shrink-0"></span>
                  <span className="text-center sm:text-left">Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group/item justify-center sm:justify-start">
                  <span className="w-2 h-2 bg-[#730007] rounded-full mr-3 group-hover/item:bg-white transition-colors duration-300 flex-shrink-0"></span>
                  <span className="text-center sm:text-left">About Us</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group/item justify-center sm:justify-start">
                  <span className="w-2 h-2 bg-[#730007] rounded-full mr-3 group-hover/item:bg-white transition-colors duration-300 flex-shrink-0"></span>
                  <span className="text-center sm:text-left">Our Projects</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group/item justify-center sm:justify-start">
                  <span className="w-2 h-2 bg-[#730007] rounded-full mr-3 group-hover/item:bg-white transition-colors duration-300 flex-shrink-0"></span>
                  <span className="text-center sm:text-left">Get Quote</span>
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group/item justify-center sm:justify-start">
                  <span className="w-2 h-2 bg-[#730007] rounded-full mr-3 group-hover/item:bg-white transition-colors duration-300 flex-shrink-0"></span>
                  <span className="text-center sm:text-left">Careers</span>
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group/item justify-center sm:justify-start">
                  <span className="w-2 h-2 bg-[#730007] rounded-full mr-3 group-hover/item:bg-white transition-colors duration-300 flex-shrink-0"></span>
                  <span className="text-center sm:text-left">Safety Standards</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="group hover:transform hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6 text-white border-b-2 border-[#730007] pb-2 group-hover:border-white transition-colors duration-300 text-center sm:text-left">
              Contact Us
            </h3>
            <div className="space-y-4 text-gray-200/80 text-sm">
              <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-3 hover:text-white transition-colors duration-300 group/item">
                <div className="p-2 bg-[#730007]/20 rounded-lg group-hover/item:bg-[#730007] transition-colors duration-300 flex-shrink-0 mx-auto sm:mx-0 w-fit">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="leading-relaxed text-center sm:text-left">
                  <div className="font-medium">Headquarters</div>
                  <div>Washington, DC Metro Area</div>
                  <div>Serving Federal Facilities Nationwide</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 hover:text-white transition-colors duration-300 group/item">
                <div className="p-2 bg-[#730007]/20 rounded-lg group-hover/item:bg-[#730007] transition-colors duration-300 mx-auto sm:mx-0 w-fit">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-medium">Phone</div>
                  <a href="tel:+15551234567" className="hover:underline">+1 (555) 123-4567</a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 hover:text-white transition-colors duration-300 group/item">
                <div className="p-2 bg-[#730007]/20 rounded-lg group-hover/item:bg-[#730007] transition-colors duration-300 mx-auto sm:mx-0 w-fit">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-medium">Email</div>
                  <a href="mailto:info@agilefacilities.com" className="hover:underline break-all">info@agilefacilities.com</a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 hover:text-white transition-colors duration-300 group/item">
                <div className="p-2 bg-[#730007]/20 rounded-lg group-hover/item:bg-[#730007] transition-colors duration-300 mx-auto sm:mx-0 w-fit">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-medium">Business Hours</div>
                  <div>24/7 Emergency Services</div>
                  <div className="text-xs">Mon-Fri: 8AM-6PM EST</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NAICS Codes Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div className="text-center lg:text-left">
                <h4 className="text-lg font-semibold text-white mb-2 flex items-center justify-center lg:justify-start">
                  <svg className="w-5 h-5 mr-2 text-[#730007]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  NAICS Classification Codes
                </h4>
                <p className="text-gray-200/80 text-sm">
                  North American Industry Classification System - Federal Contracting & Service Classifications
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-center lg:text-right">
                <div className="bg-[#730007]/20 rounded-lg p-3 hover:bg-[#730007]/30 transition-colors duration-300">
                  <div className="text-white font-bold text-sm">541620</div>
                  <div className="text-gray-200/70 text-xs">Primary</div>
                </div>
                <div className="bg-[#1a1b4f]/20 rounded-lg p-3 hover:bg-[#1a1b4f]/30 transition-colors duration-300">
                  <div className="text-white font-bold text-sm">561210</div>
                  <div className="text-gray-200/70 text-xs">Facilities</div>
                </div>
                <div className="bg-[#730007]/20 rounded-lg p-3 hover:bg-[#730007]/30 transition-colors duration-300">
                  <div className="text-white font-bold text-sm">562910</div>
                  <div className="text-gray-200/70 text-xs">Remediation</div>
                </div>
                <div className="bg-[#1a1b4f]/20 rounded-lg p-3 hover:bg-[#1a1b4f]/30 transition-colors duration-300">
                  <div className="text-white font-bold text-sm">541330</div>
                  <div className="text-gray-200/70 text-xs">Engineering</div>
                </div>
                <div className="bg-[#730007]/20 rounded-lg p-3 hover:bg-[#730007]/30 transition-colors duration-300">
                  <div className="text-white font-bold text-sm">238220</div>
                  <div className="text-gray-200/70 text-xs">Systems</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 animate-fade-in-up">
          <p className="text-gray-200/80 text-sm hover:text-white transition-colors duration-300 text-center md:text-left">
            © 2025 Agile Facilities Solution. All rights reserved. | Established 2010
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-6">
            <a href="#privacy" className="text-gray-200/70 hover:text-white text-sm transition-all duration-300 hover:scale-105 hover:underline underline-offset-4">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-200/70 hover:text-white text-sm transition-all duration-300 hover:scale-105 hover:underline underline-offset-4">
              Terms of Service
            </a>
            <a href="#compliance" className="text-gray-200/70 hover:text-white text-sm transition-all duration-300 hover:scale-105 hover:underline underline-offset-4">
              Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
