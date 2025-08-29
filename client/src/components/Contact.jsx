import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #730007 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, #1a1b4f 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#730007] to-[#1a1b4f] bg-clip-text text-transparent mb-6 relative">
              Get In Touch
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#730007] to-[#1a1b4f] rounded-full"></div>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your facility management? Contact us today for a free consultation 
            and discover how we can help optimize your operations with cutting-edge solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-[#1a1b4f] mb-8 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-[#730007] to-[#1a1b4f] rounded-lg mr-3 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#730007] to-[#1a1b4f] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1b4f] text-lg">Office Address</h4>
                    <p className="text-gray-600 mt-1">123 Business District, Suite 456<br />Professional Plaza, City, State 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#730007] to-[#1a1b4f] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1b4f] text-lg">Phone</h4>
                    <p className="text-gray-600 mt-1 text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#730007] to-[#1a1b4f] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1b4f] text-lg">Email</h4>
                    <p className="text-gray-600 mt-1 text-lg">info@agilefacilities.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#730007] to-[#1a1b4f] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1b4f] text-lg">Business Hours</h4>
                    <p className="text-gray-600 mt-1">Monday - Friday: 8:00 AM - 6:00 PM<br />24/7 Emergency Service Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#730007] to-[#8b0009] p-6 rounded-2xl text-center text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="mb-4">
                  <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2">Emergency Line</h4>
                <p className="text-gray-100">+1 (555) 911-HELP</p>
              </div>
              <div className="bg-gradient-to-br from-[#1a1b4f] to-[#252665] p-6 rounded-2xl text-center text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="mb-4">
                  <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2">Live Chat</h4>
                <p className="text-gray-100">Available 24/7</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden">
              {/* Form Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className="w-full h-full bg-gradient-to-br from-[#730007] to-[#1a1b4f] rounded-full transform translate-x-16 -translate-y-16"></div>
              </div>
              
              <h3 className="text-3xl font-bold text-[#1a1b4f] mb-8 relative">
                Send us a Message
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-[#730007] to-[#1a1b4f] rounded-full"></div>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-[#1a1b4f] mb-3 group-focus-within:text-[#730007] transition-colors duration-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#730007] focus:border-[#730007] transition-all duration-300 hover:border-gray-300 bg-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-[#1a1b4f] mb-3 group-focus-within:text-[#730007] transition-colors duration-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#730007] focus:border-[#730007] transition-all duration-300 hover:border-gray-300 bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#1a1b4f] mb-3 group-focus-within:text-[#730007] transition-colors duration-300">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#730007] focus:border-[#730007] transition-all duration-300 hover:border-gray-300 bg-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="company" className="block text-sm font-semibold text-[#1a1b4f] mb-3 group-focus-within:text-[#730007] transition-colors duration-300">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#730007] focus:border-[#730007] transition-all duration-300 hover:border-gray-300 bg-white"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="service" className="block text-sm font-semibold text-[#1a1b4f] mb-3 group-focus-within:text-[#730007] transition-colors duration-300">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#730007] focus:border-[#730007] transition-all duration-300 hover:border-gray-300 bg-white"
                  >
                    <option value="">Select a Service</option>
                    <option value="facility-maintenance">Facility Maintenance</option>
                    <option value="security-services">Security Services</option>
                    <option value="cleaning-services">Cleaning Services</option>
                    <option value="property-management">Property Management</option>
                    <option value="energy-management">Energy Management</option>
                    <option value="emergency-response">Emergency Response</option>
                    <option value="consultation">Free Consultation</option>
                  </select>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-[#1a1b4f] mb-3 group-focus-within:text-[#730007] transition-colors duration-300">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#730007] focus:border-[#730007] transition-all duration-300 hover:border-gray-300 bg-white resize-none"
                    placeholder="Tell us about your facility management needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#730007] to-[#1a1b4f] text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-[#8b0009] hover:to-[#252665] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
