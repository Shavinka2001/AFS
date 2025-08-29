import React from 'react';
import { motion } from 'framer-motion';
import image3 from '../assets/image3.jpeg';

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute top-0 right-0 w-72 h-72 rounded-full -translate-y-1/2 translate-x-1/2"
          style={{ backgroundColor: '#730007' }}
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full translate-y-1/2 -translate-x-1/2"
          style={{ backgroundColor: '#1a1b4f' }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [360, 180, 0] 
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear" 
          }}
        ></motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{ 
              background: `linear-gradient(to right, #730007, #1a1b4f)` 
            }}
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            whileHover={{ scale: 1.1, rotate: 360 }}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              background: `linear-gradient(to right, #1a1b4f, #730007)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Agile Facilities Solution
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Transforming facility management with innovative solutions and unmatched expertise
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Image Section */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              {/* Decorative background elements */}
              <motion.div 
                className="absolute -inset-4 rounded-3xl blur-lg"
                style={{ 
                  background: `linear-gradient(to right, rgba(115, 0, 7, 0.2), rgba(26, 27, 79, 0.2))` 
                }}
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              ></motion.div>
              <motion.div 
                className="absolute inset-0 rounded-2xl transform rotate-1"
                style={{ 
                  background: `linear-gradient(to bottom right, rgba(115, 0, 7, 0.1), rgba(26, 27, 79, 0.1))` 
                }}
                animate={{ rotate: [1, -1, 1] }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              ></motion.div>
              
              {/* Main image container */}
              <motion.div 
                className="relative bg-white p-1 rounded-2xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <motion.img 
                    src={image3} 
                    alt="Agile Facilities Solution - Professional Facility Management Services" 
                    className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: '50% 15%' }}
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                  {/* Image overlay for professional effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent"
                    style={{ 
                      background: `linear-gradient(to top, rgba(26, 27, 79, 0.3), transparent, transparent)` 
                    }}
                  ></div>
                  
                  {/* Professional badge overlay */}
                  <motion.div 
                    className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ 
                          background: `linear-gradient(to right, #730007, #1a1b4f)` 
                        }}
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 0 0 1.745-.723 3.066 3.066 0 0 1 3.976 0 3.066 3.066 0 0 0 1.745.723 3.066 3.066 0 0 1 2.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 0 1 0 3.976 3.066 3.066 0 0 0-.723 1.745 3.066 3.066 0 0 1-2.812 2.812 3.066 3.066 0 0 0-1.745.723 3.066 3.066 0 0 1-3.976 0 3.066 3.066 0 0 0-1.745-.723 3.066 3.066 0 0 1-2.812-2.812 3.066 3.066 0 0 0-.723-1.745 3.066 3.066 0 0 1 0-3.976 3.066 3.066 0 0 0 .723-1.745 3.066 3.066 0 0 1 2.812-2.812zm7.44 5.252a1 1 0 1 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-bold" style={{ color: '#1a1b4f' }}>8(a) SBA Certified</div>
                        <div className="text-xs text-gray-600">Quality Assured</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Floating achievement card */}
              <motion.div 
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -5, scale: 1.05 }}
                animate={{ 
                  y: [0, -5],
                }}
                style={{
                  transition: 'y 3s ease-in-out infinite'
                }}
              >
                <div className="text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ 
                      background: `linear-gradient(to right, #730007, #1a1b4f)` 
                    }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold mb-1" style={{ color: '#1a1b4f' }}>15+</div>
                  <div className="text-sm text-gray-600 font-medium">Years of Excellence</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="order-1 lg:order-2 space-y-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Company Introduction */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="inline-flex items-center px-4 py-2 rounded-full border"
                style={{ 
                  background: `linear-gradient(to right, rgba(115, 0, 7, 0.1), rgba(26, 27, 79, 0.1))`,
                  borderColor: '#730007'
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-sm font-semibold" style={{ color: '#730007' }}>Leading Facility Management Provider</span>
              </motion.div>
              
              <motion.p 
                className="text-xl text-gray-700 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                With over <span 
                  className="font-bold px-2 py-1 rounded" 
                  style={{ 
                    color: '#730007',
                    backgroundColor: 'rgba(115, 0, 7, 0.1)'
                  }}
                >15 years of distinguished experience</span> in 
                facility management, Agile Facilities Solution has established itself as the premier partner for enterprises 
                seeking comprehensive, innovative facility services.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Our commitment to <span className="font-semibold" style={{ color: '#1a1b4f' }}>operational excellence</span>, 
                cutting-edge technology integration, and unwavering dedication to client success sets us apart 
                in the competitive facility management landscape.
              </motion.p>
            </motion.div>

            {/* Core Competencies */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#1a1b4f' }}>Core Competencies</h3>
              
              <div className="space-y-5">
                {[
                  {
                    title: "Certified Excellence",
                    description: "Industry-certified professionals with specialized expertise in modern facility management protocols and best practices.",
                    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  },
                  {
                    title: "24/7 Enterprise Support",
                    description: "Comprehensive round-the-clock monitoring and rapid response capabilities for mission-critical facility operations.",
                    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  },
                  {
                    title: "Strategic Solutions",
                    description: "Customized facility management strategies designed to optimize operational efficiency and reduce total cost of ownership.",
                    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-5 p-6 rounded-2xl bg-gradient-to-r from-white to-gray-50 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ 
                        background: `linear-gradient(to right, #730007, #1a1b4f)` 
                      }}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2" style={{ color: '#1a1b4f' }}>{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* NAICS Codes Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200 shadow-xl">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
                style={{ 
                  background: `linear-gradient(to right, #730007, #1a1b4f)` 
                }}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                whileHover={{ scale: 1.1, rotate: 360 }}
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#1a1b4f' }}>
                NAICS Classification Codes
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our North American Industry Classification System codes demonstrate our 
                comprehensive service capabilities across multiple facility management sectors
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  code: "541620",
                  title: "Environmental Consulting",
                  subtitle: "Primary Classification",
                  isPrimary: true,
                  description: "Environmental consulting services including industrial hygiene and safety assessments"
                },
                {
                  code: "561210",
                  title: "Facilities Support",
                  subtitle: "Administrative Management",
                  isPrimary: false,
                  description: "Comprehensive facility support services and administrative management solutions"
                },
                {
                  code: "562910",
                  title: "Remediation Services",
                  subtitle: "Environmental Cleanup",
                  isPrimary: false,
                  description: "Environmental remediation and restoration services for contaminated sites"
                },
                {
                  code: "541330",
                  title: "Engineering Services",
                  subtitle: "Technical Consulting",
                  isPrimary: false,
                  description: "Professional engineering services and technical consulting solutions"
                },
                {
                  code: "238220",
                  title: "Plumbing & HVAC",
                  subtitle: "Systems Installation",
                  isPrimary: false,
                  description: "Building systems installation, maintenance, and automation services"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`relative p-6 rounded-2xl border-2 transition-all duration-300 group hover:shadow-lg ${
                    item.isPrimary 
                      ? 'bg-gradient-to-br from-red-50 to-blue-50 border-red-200 hover:border-red-300' 
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {item.isPrimary && (
                    <motion.div 
                      className="absolute -top-3 -right-3 bg-gradient-to-r from-red-600 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      PRIMARY
                    </motion.div>
                  )}
                  
                  <div className="text-center">
                    <motion.div 
                      className={`text-2xl font-bold mb-2 ${
                        item.isPrimary 
                          ? 'bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent' 
                          : 'text-gray-800'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.code}
                    </motion.div>
                    <h4 className={`font-semibold text-sm mb-1 ${
                      item.isPrimary ? 'text-red-700' : 'text-gray-700'
                    }`}>
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 mb-3">{item.subtitle}</p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-4 border">
                <span className="font-semibold" style={{ color: '#1a1b4f' }}>Federal Contracting Ready:</span> 
                Our NAICS classifications enable us to compete for federal contracts across multiple 
                service categories, ensuring comprehensive facility management solutions for government and enterprise clients.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Performance Metrics Section */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.h3 
              className="text-3xl font-bold mb-4"
              style={{ color: '#1a1b4f' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Performance Excellence
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our track record speaks for itself. These metrics demonstrate our commitment to delivering 
              exceptional results and exceeding client expectations consistently.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: "99%",
                label: "Client Satisfaction",
                subtitle: "Based on annual surveys",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                hasProgress: true,
                progress: 99
              },
              {
                value: "500+",
                label: "Projects Completed",
                subtitle: "Across diverse industries",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                hasProgress: false
              },
              {
                value: "15+",
                label: "Years Experience",
                subtitle: "Industry leadership",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                hasProgress: true,
                progress: 100
              },
              {
                value: "<2",
                label: "Hour Response",
                subtitle: "Emergency support",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                hasProgress: false,
                badge: "24/7 Available"
              }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center group transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
              >
                <motion.div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ 
                    background: `linear-gradient(to right, #730007, #1a1b4f)` 
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </motion.div>
                <motion.div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: '#730007' }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index * 0.1) + 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-800 font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600 mb-4">{stat.subtitle}</div>
                {stat.hasProgress && (
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div 
                      className="h-3 rounded-full transition-all duration-1000"
                      style={{ 
                        background: `linear-gradient(to right, #730007, #1a1b4f)`,
                        width: `${stat.progress}%`
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: (index * 0.1) + 0.5 }}
                    ></motion.div>
                  </div>
                )}
                {stat.badge && (
                  <div className="flex justify-center">
                    <div 
                      className="px-3 py-1 text-white text-xs rounded-full font-semibold"
                      style={{ 
                        background: `linear-gradient(to right, #730007, #1a1b4f)` 
                      }}
                    >
                      {stat.badge}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;