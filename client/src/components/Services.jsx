import React, { useState, useEffect } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('services');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: "Environmental Safety & Health",
      description: "Comprehensive environmental safety programs, health risk assessments, workplace safety protocols, and regulatory compliance to ensure a safe working environment for all personnel.",
      features: ["Risk Assessment", "Safety Training", "Emergency Protocols", "Health Monitoring"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
        </svg>
      ),
      title: "Environmental Compliance",
      description: "Expert guidance on environmental regulations, permit management, audit support, and sustainability initiatives to maintain full regulatory compliance.",
      features: ["Regulatory Updates", "Permit Management", "Audit Support", "Sustainability Planning"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Building Controls",
      description: "Advanced building automation systems, HVAC optimization, energy management solutions, and smart facility controls for maximum efficiency and comfort.",
      features: ["Automation Systems", "Energy Optimization", "Smart Controls", "Performance Monitoring"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364" />
        </svg>
      ),
      title: "Facilities Support",
      description: "Complete facility management support including maintenance coordination, vendor management, space planning, and operational excellence to keep your facilities running smoothly.",
      features: ["Maintenance Support", "Vendor Management", "Space Planning", "Operational Excellence"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{backgroundColor: '#020324'}}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1000" style={{backgroundColor: '#730007'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 text-white text-sm font-semibold rounded-full" style={{backgroundColor: '#020324'}}>
              Professional Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{color: '#020324'}}>
            Our <span className="text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(to right, #020324, #730007)'}}>Expert</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We deliver comprehensive environmental and facility management solutions with cutting-edge expertise. 
            Our dedicated team ensures optimal performance, regulatory compliance, and operational excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(135deg, rgba(2,3,36,0.03), rgba(115,0,7,0.03))'}}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{background: 'linear-gradient(135deg, #020324, #730007)'}}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:transition-colors duration-300" style={{color: '#020324'}}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide" style={{color: '#020324'}}>Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{background: 'linear-gradient(to right, #020324, #730007)'}}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex items-center justify-between">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    style={{background: 'linear-gradient(to right, #020324, #730007)'}}
                    onMouseEnter={(e) => e.target.style.background = 'linear-gradient(to right, #730007, #020324)'}
                    onMouseLeave={(e) => e.target.style.background = 'linear-gradient(to right, #020324, #730007)'}
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  {/* Animated Indicator */}
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    hoveredCard === index ? 'scale-150 shadow-lg' : 'scale-100'
                  }`} style={{background: 'linear-gradient(to right, #020324, #730007)'}}></div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300" style={{background: 'linear-gradient(135deg, rgba(2,3,36,0.2), rgba(115,0,7,0.2))'}}></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300" style={{background: 'linear-gradient(135deg, rgba(115,0,7,0.2), rgba(2,3,36,0.2))'}}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="rounded-2xl p-8 text-white shadow-2xl" style={{background: 'linear-gradient(135deg, #020324, #730007)'}}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Optimize Your Facility?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto opacity-95 text-lg">
              Contact our expert team today to discover how we can enhance your environmental compliance, 
              safety standards, and operational efficiency.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-white font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{color: '#020324'}}
            >
              Get Started Today
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
