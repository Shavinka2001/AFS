import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Enhanced Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0, rotateY: -15 },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0, y: 30 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      scale: 1.03,
      y: -10,
      boxShadow: "0 25px 50px rgba(2, 3, 36, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <>
      {/* Custom CSS for gradient animation */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(115, 0, 7, 0.3); }
          50% { box-shadow: 0 0 30px rgba(26, 27, 79, 0.4); }
        }
        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        .typewriter {
          overflow: hidden;
          white-space: nowrap;
          animation: typewriter 3s steps(40, end);
        }
      `}</style>
      
      <motion.section 
        id="home" 
        className="bg-gradient-to-br from-white via-slate-50 to-gray-100 relative overflow-hidden min-h-screen"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
      {/* Professional Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, #1e293b 0.5px, transparent 0.5px),
            radial-gradient(circle at 80% 70%, #64748b 0.5px, transparent 0.5px),
            linear-gradient(45deg, #1e293b 0.2px, transparent 0.2px),
            linear-gradient(-45deg, #64748b 0.2px, transparent 0.2px)
          `,
          backgroundSize: '100px 100px, 140px 140px, 50px 50px, 70px 70px'
        }} />
      </div>

      {/* Animated Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-red-200 to-blue-200 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              x: [-10, 10],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Subtle Corporate Geometric Elements */}
      <motion.div 
        className="absolute top-16 right-16 w-40 h-40 border border-slate-200 rounded-xl"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.01]
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-28 h-28 border-2 border-slate-300 rounded-full"
        animate={{ 
          rotate: [360, 0],
          y: [-5, 5]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      {/* Additional Animated Geometric Shapes */}
      <motion.div 
        className="absolute top-1/3 left-10 w-16 h-16 border border-red-200 rounded-lg opacity-20"
        animate={{ 
          rotate: [0, 180, 360],
          scale: [0.8, 1.1, 0.8]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-blue-100 rounded-full opacity-15"
        animate={{ 
          y: [-15, 15],
          x: [-8, 8],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
      />
      
      {/* Professional Accent Elements */}
      <motion.div 
        className="absolute top-20 right-20 w-80 h-80 bg-gradient-radial from-slate-200/20 to-transparent rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.03],
          opacity: [0.1, 0.15],
          x: [-10, 10],
          y: [-5, 5]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-radial from-slate-300/15 to-transparent rounded-full blur-3xl"
        animate={{ 
          scale: [0.97, 1.03],
          opacity: [0.08, 0.12],
          x: [10, -10],
          y: [5, -5]
        }}
        transition={{ 
          duration: 28, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <motion.div 
            className="lg:col-span-3 space-y-10 px-4 lg:px-0"
            variants={slideInLeft}
          >
            {/* Main Heading - Corporate Professional */}
            <motion.div variants={itemVariants}>
              <motion.h1 
                className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.08] mb-8 tracking-tight"
                style={{color: '#1a1b4f'}}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.span 
                  className="block font-normal text-slate-600 text-xl lg:text-2xl mb-3 tracking-wide uppercase letter-spacing-wider"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  style={{ letterSpacing: '0.15em' }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.1 }}
                  >P</motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.1 }}
                  >r</motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0, duration: 0.1 }}
                  >o</motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.1 }}
                  >f</motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.1 }}
                  >e</motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.1 }}
                  >s</motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.1 }}
                  >s</motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.1 }}
                  >i</motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.1 }}
                  >o</motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7, duration: 0.1 }}
                  >n</motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.1 }}
                  >a</motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.9, duration: 0.1 }}
                  >l</motion.span>
                </motion.span>
                <motion.span 
                  className="block font-bold leading-tight relative"
                  style={{ color: '#1a1b4f' }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-30"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ 
                      duration: 2, 
                      delay: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                  Facility Management
                </motion.span>
                <motion.span 
                  className="block font-normal text-2xl lg:text-3xl mt-2 leading-tight relative"
                  style={{ color: '#730007' }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-red-100 to-transparent opacity-30"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ 
                      duration: 2, 
                      delay: 2.5,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                  & Environmental Solutions
                </motion.span>
              </motion.h1>

              <motion.p 
                className="text-lg lg:text-xl max-w-2xl font-normal text-slate-600 mb-8 leading-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                We deliver comprehensive facility management services with proven expertise in 
                <motion.span 
                  className="font-semibold"
                  style={{ color: '#1a1b4f' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7 }}
                > environmental compliance</motion.span>, 
                <motion.span 
                  className="font-semibold"
                  style={{ color: '#730007' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.9 }}
                > operational excellence</motion.span>, and sustainable infrastructure management for enterprise clients.
              </motion.p>
            </motion.div>

            {/* Enhanced Professional Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.a 
                href="#contact"
                className="group relative px-8 py-4 text-white font-semibold rounded-lg shadow-lg overflow-hidden transition-all duration-300"
                style={{ backgroundColor: '#730007' }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 12px 24px rgba(115, 0, 7, 0.25)",
                  y: -2,
                  backgroundColor: '#8a0009'
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Pulse Ring Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-red-300 rounded-lg opacity-0 group-hover:opacity-100"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <span className="relative z-10 flex items-center text-sm">
                  Schedule Consultation
                  <motion.svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
              </motion.a>
              
              <motion.a 
                href="#services"
                className="group px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 relative overflow-hidden"
                style={{ 
                  borderColor: '#1a1b4f', 
                  color: '#1a1b4f' 
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 16px rgba(26, 27, 79, 0.15)",
                  y: -2,
                  backgroundColor: '#1a1b4f',
                  color: '#ffffff'
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Sliding Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                />
                
                <span className="relative z-10 flex items-center text-sm">
                  View Our Services
                  <motion.svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </span>
              </motion.a>
            </motion.div>

            {/* Enhanced Service Capabilities */}
            <motion.div 
              variants={itemVariants}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.h3 
                className="text-2xl font-bold mb-10 relative"
                style={{ color: '#1a1b4f' }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                Core Competencies
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 rounded-full"
                  style={{ backgroundColor: '#730007' }}
                  initial={{ width: 0 }}
                  animate={{ width: "60px" }}
                  transition={{ duration: 1, delay: 1.8 }}
                />
              </motion.h3>
              
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                    title: "Facility Operations",
                    description: "Comprehensive maintenance, HVAC systems, and operational optimization",
                    delay: 1.6
                  },
                  {
                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                    title: "Compliance Management",
                    description: "Environmental regulations, safety standards, and regulatory compliance",
                    delay: 1.7
                  },
                  {
                    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                    title: "Building Systems",
                    description: "Advanced automation, energy management, and smart building controls",
                    delay: 1.8
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="group flex items-center space-x-6 p-7 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: item.delay }}
                    whileHover={{ 
                      scale: 1.01, 
                      y: -2,
                      boxShadow: "0 16px 32px rgba(0, 0, 0, 0.08)"
                    }}
                  >
                    {/* Animated Background Glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-50 to-red-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    />
                    
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />

                    <motion.div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center bg-slate-100 border border-slate-200 relative z-10"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "#730007",
                        rotate: 5
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Icon Pulse Ring */}
                      <motion.div
                        className="absolute inset-0 border-2 border-red-300 rounded-xl opacity-0"
                        whileHover={{ 
                          opacity: [0, 0.5, 0],
                          scale: [1, 1.2, 1.4]
                        }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                      
                      <svg className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors duration-300 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d={item.icon} clipRule="evenodd" />
                      </svg>
                    </motion.div>
                    <div className="flex-1 relative z-10">
                      <motion.div 
                        className="font-semibold text-lg mb-2"
                        style={{ color: '#1a1b4f' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: item.delay + 0.2 }}
                        whileHover={{ x: 5 }}
                      >
                        {item.title}
                      </motion.div>
                      <motion.div 
                        className="text-slate-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: item.delay + 0.3 }}
                        whileHover={{ x: 5 }}
                      >
                        {item.description}
                      </motion.div>
                    </div>
                    <motion.div 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10"
                      whileHover={{ x: 5, scale: 1.1 }}
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                    >
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Right Content - Professional Image */}
          <motion.div 
            className="lg:col-span-2 relative mt-16 lg:-mt-80 ml-0 lg:-ml-25"
            variants={slideInRight}
          >
            <motion.div 
              className="relative"
              animate={{
                y: [-5, 5],
                rotateY: [0, 2, 0]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              {/* Professional Image Container with Enhanced Design */}
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-xl bg-white border border-slate-200"
                whileHover={{ 
                  scale: 1.01,
                  boxShadow: "0 24px 48px rgba(0, 0, 0, 0.12)",
                  rotateY: 0.5
                }}
                transition={{ duration: 0.6 }}
                style={{ 
                  transformStyle: "preserve-3d",
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
                }}
              >
                {/* Enhanced Border Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-40 border border-slate-300"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    borderColor: ['#cbd5e1', '#94a3b8', '#cbd5e1']
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Animated Corner Highlights */}
                <motion.div
                  className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-200 to-transparent opacity-20 rounded-tl-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-red-200 to-transparent opacity-20 rounded-br-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                />

                {/* Professional Frame Border */}
                <div className="absolute inset-2 rounded-xl border border-white/60 pointer-events-none z-20" />
                
                <motion.img 
                  src="/pexels-pixabay-269077.jpg" 
                  alt="Professional Facility Management Excellence" 
                  className="relative z-10 w-full h-64 sm:h-80 lg:h-[450px] object-cover object-top"
                  style={{
                    filter: 'brightness(1.01) contrast(1.05) saturate(1.02)',
                    objectPosition: 'center top'
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    filter: 'brightness(1.03) contrast(1.08) saturate(1.05)'
                  }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Enhanced Professional Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-slate-600/5" />
                
                {/* Professional Corner Decorations with Animation */}
                <motion.div 
                  className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-slate-400 rounded-tl-2xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.5, duration: 0.8 }}
                  whileHover={{ scale: 1.1, borderColor: '#730007' }}
                />
                <motion.div 
                  className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-slate-400 rounded-br-2xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.7, duration: 0.8 }}
                  whileHover={{ scale: 1.1, borderColor: '#1a1b4f' }}
                />
                
                {/* Subtle Grid Pattern Overlay */}
                <div 
                  className="absolute inset-0 opacity-[0.02] pointer-events-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(100, 116, 139, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(100, 116, 139, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '16px 16px'
                  }}
                />
              </motion.div>

              {/* Enhanced Professional Credential Cards */}
              <motion.div 
                className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 bg-white backdrop-blur-xl p-3 lg:p-6 rounded-xl lg:rounded-xl shadow-lg border border-slate-200"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 2.0 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  rotate: 2,
                  boxShadow: "0 16px 32px rgba(0, 0, 0, 0.12)"
                }}
              >
                {/* Animated Badge Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-50 to-blue-50 rounded-xl opacity-0 group-hover:opacity-100"
                  whileHover={{ opacity: 0.3 }}
                />
                
                <div className="text-center relative z-10">
                  <motion.div 
                    className="text-xl lg:text-2xl font-black mb-1 lg:mb-2"
                    style={{ color: '#730007' }}
                    animate={{ 
                      scale: [1, 1.03, 1],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                  >
                    8(a)
                  </motion.div>
                  <div className="text-xs lg:text-sm font-semibold text-slate-600">SBA Certified</div>
                  <motion.div 
                    className="w-6 lg:w-8 h-1 rounded-full mx-auto mt-1 lg:mt-2"
                    style={{ backgroundColor: '#1a1b4f' }}
                    initial={{ width: 0 }}
                    animate={{ width: "24px" }}
                    transition={{ delay: 2.3, duration: 0.8 }}
                  />
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -left-4 lg:-bottom-8 lg:-left-8 bg-white backdrop-blur-xl p-3 lg:p-6 rounded-xl lg:rounded-xl shadow-lg border border-slate-200"
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  rotate: -2,
                  boxShadow: "0 16px 32px rgba(0, 0, 0, 0.12)"
                }}
              >
                <div className="flex items-center space-x-2 lg:space-x-4 relative z-10">
                  <motion.div 
                    className="w-3 h-3 lg:w-4 lg:h-4 rounded-full relative"
                    style={{ backgroundColor: '#730007' }}
                  >
                    {/* Pulse Ring Effect */}
                    <motion.div
                      className="absolute inset-0 border-2 border-red-300 rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 2],
                        opacity: [0.8, 0.3, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2], 
                        rotate: [0, 360]
                      }}
                      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                    />
                  </motion.div>
                  <div>
                    <div className="font-bold text-xs lg:text-sm" style={{ color: '#1a1b4f' }}>Licensed & Insured</div>
                    <div className="text-xs font-medium text-slate-600">Full Coverage</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute top-1/2 -left-6 lg:-left-12 transform -translate-y-1/2 bg-white backdrop-blur-xl p-3 lg:p-6 rounded-xl lg:rounded-xl shadow-lg border border-slate-200"
                initial={{ opacity: 0, scale: 0.8, x: -30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 2.4 }}
                whileHover={{ 
                  scale: 1.1, 
                  x: 5,
                  boxShadow: "0 16px 32px rgba(0, 0, 0, 0.12)"
                }}
              >
                <div className="text-center relative z-10">
                  <motion.div 
                    className="text-2xl lg:text-3xl font-black mb-1 lg:mb-2"
                    style={{ color: '#1a1b4f' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.7 }}
                  >
                    <motion.span
                      animate={{ 
                        textShadow: [
                          '0px 0px 0px rgba(26, 27, 79, 0)',
                          '0px 0px 8px rgba(26, 27, 79, 0.3)',
                          '0px 0px 0px rgba(26, 27, 79, 0)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      15+
                    </motion.span>
                  </motion.div>
                  <div className="text-xs lg:text-sm font-semibold text-slate-600">Years Experience</div>
                  <motion.div 
                    className="w-8 lg:w-10 h-1 rounded-full mx-auto mt-1 lg:mt-2"
                    style={{ backgroundColor: '#730007' }}
                    initial={{ width: 0 }}
                    animate={{ width: "32px" }}
                    transition={{ delay: 2.9, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Professional Performance Metrics */}
        <motion.div 
          className="border-t border-slate-200 py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { number: "500+", label: "Enterprise Clients", delay: 2.4 },
              { number: "99.8%", label: "Client Satisfaction", delay: 2.5 },
              { number: "50+", label: "Certified Professionals", delay: 2.6 },
              { number: "24/7", label: "Support Coverage", delay: 2.7 }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="relative text-3xl lg:text-4xl font-bold mb-3" 
                  style={{ color: '#730007' }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    delay: stat.delay + 0.1,
                    duration: 0.6
                  }}
                  whileHover={{
                    scale: 1.1
                  }}
                >
                  {stat.number}
                </motion.div>
                <motion.div 
                  className="font-medium tracking-wide"
                  style={{ color: '#1a1b4f' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: stat.delay + 0.3 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Professional Business Certifications */}
        <motion.div 
          className="pb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          {/* Enhanced Professional Header Section */}
          <div className="text-center mb-24 relative">
            {/* Professional Background Elements */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-slate-50/40 via-white/60 to-slate-50/40 rounded-3xl border border-slate-200/50 shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 2.8 }}
            />
            
            {/* Decorative Top Border */}
            <motion.div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full"
              style={{ 
                background: 'linear-gradient(90deg, #730007 0%, #1a1b4f 50%, #730007 100%)',
                backgroundSize: '200% 100%'
              }}
              initial={{ width: 0 }}
              animate={{ 
                width: "128px",
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                width: { duration: 1, delay: 3.0 },
                backgroundPosition: { duration: 4, repeat: Infinity }
              }}
            />

            {/* Enhanced Professional Badge */}
            <motion.div 
              className="inline-flex items-center px-8 py-4 bg-white border-2 border-slate-200 rounded-2xl mb-10 shadow-lg relative z-10"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.9, type: "spring", stiffness: 120 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                borderColor: "#94a3b8"
              }}
            >
              {/* Badge Background Glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30"
                style={{ 
                  background: 'linear-gradient(135deg, #730007/10, #1a1b4f/10)'
                }}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Official Seal Icon */}
              <motion.div 
                className="w-8 h-8 mr-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#730007' }}
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 3.1, type: "spring", stiffness: 200 }}
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812z" clipRule="evenodd" />
                </svg>
              </motion.div>
              
              {/* Badge Text */}
              <div className="relative z-10">
                <motion.span 
                  className="text-sm font-bold tracking-wider uppercase"
                  style={{ color: '#1a1b4f' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3.2, duration: 0.6 }}
                >
                  Government Certified Business
                </motion.span>
                <motion.div 
                  className="text-xs text-slate-500 font-medium mt-1 tracking-wide"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3.3, duration: 0.6 }}
                >
                  Federal & State Authorizations
                </motion.div>
              </div>

              {/* Verification Check */}
              <motion.div 
                className="ml-4 w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#1a1b4f' }}
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 3.4, type: "spring", stiffness: 200 }}
              >
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Enhanced Main Title */}
            <motion.h3 
              className="text-5xl lg:text-6xl font-black mb-8 relative tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.0 }}
            >
              {/* Professional Typography Treatment */}
              <motion.div
                className="relative inline-block"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="block text-4xl lg:text-5xl font-bold mb-2"
                  style={{ color: '#1a1b4f' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 3.1 }}
                >
                  Certified Business
                </motion.span>
                
                <motion.span 
                  className="block text-5xl lg:text-6xl font-black relative"
                  style={{ color: '#730007' }}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 3.2 }}
                >
                  Excellence
                  
                  {/* Enhanced Dynamic Underline */}
                  <motion.div 
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-3 rounded-full"
                    style={{ 
                      background: 'linear-gradient(90deg, #730007 0%, #1a1b4f 25%, #730007 50%, #1a1b4f 75%, #730007 100%)',
                      backgroundSize: '400% 100%'
                    }}
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ 
                      width: "160px",
                      opacity: 1,
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{ 
                      width: { duration: 1.2, delay: 3.4 },
                      opacity: { duration: 0.6, delay: 3.4 },
                      backgroundPosition: { duration: 5, repeat: Infinity }
                    }}
                  />
                </motion.span>
              </motion.div>
            </motion.h3>
            
            {/* Enhanced Professional Description */}
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.3 }}
            >
              <motion.p 
                className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-medium mb-6"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                Officially recognized by{' '}
                <motion.span 
                  className="font-bold"
                  style={{ color: '#1a1b4f' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  federal and state authorities
                </motion.span>{' '}
                for our unwavering commitment to{' '}
                <motion.span 
                  className="font-bold"
                  style={{ color: '#730007' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  operational excellence
                </motion.span>{' '}
                and regulatory compliance in facility management services
              </motion.p>
              
              {/* Professional Credentials Strip */}
              <motion.div 
                className="flex items-center justify-center space-x-8 text-sm font-semibold text-slate-500"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.5 }}
              >
                <motion.div 
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05, color: '#730007' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>SBA 8(a) Certified</span>
                </motion.div>
                <div className="w-px h-4 bg-slate-300"></div>
                <motion.div 
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05, color: '#1a1b4f' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>State Certified</span>
                </motion.div>
                <div className="w-px h-4 bg-slate-300"></div>
                <motion.div 
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05, color: '#059669' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span>Fully Compliant</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Professional Decorative Elements */}
            <motion.div 
              className="flex items-center justify-center mt-10 space-x-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.6 }}
            >
              <motion.div 
                className="w-24 h-px bg-gradient-to-r from-transparent via-slate-300 to-slate-300"
                initial={{ width: 0 }}
                animate={{ width: "96px" }}
                transition={{ duration: 1, delay: 3.7 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full border-2 border-slate-300 bg-white"
                animate={{ 
                  scale: [1, 1.2, 1],
                  borderColor: ['#cbd5e1', '#730007', '#1a1b4f', '#cbd5e1']
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div 
                className="w-24 h-px bg-gradient-to-l from-transparent via-slate-300 to-slate-300"
                initial={{ width: 0 }}
                animate={{ width: "96px" }}
                transition={{ duration: 1, delay: 3.7 }}
              />
            </motion.div>

            {/* Bottom Decorative Border */}
            <motion.div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-1 rounded-full"
              style={{ 
                background: 'linear-gradient(90deg, transparent 0%, #730007 25%, #1a1b4f 50%, #730007 75%, transparent 100%)',
                backgroundSize: '200% 100%'
              }}
              initial={{ width: 0, opacity: 0 }}
              animate={{ 
                width: "160px",
                opacity: 1,
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                width: { duration: 1.2, delay: 3.8 },
                opacity: { duration: 0.6, delay: 3.8 },
                backgroundPosition: { duration: 6, repeat: Infinity }
              }}
            />
          </div>
          {/* Enhanced Professional Certification Cards Container */}
          <div className="max-w-6xl mx-auto relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.015]">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, #1e293b 1px, transparent 1px),
                  radial-gradient(circle at 75% 75%, #64748b 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
              }} />
            </div>

            {/* Enhanced Professional Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
              {[
                { 
                  name: "8(a) SBA Certified Small Business", 
                  description: "Prestigious Small Business Administration certification enabling access to exclusive federal contracting opportunities and specialized government procurement programs",
                  longDescription: "This elite federal certification validates our designation as a qualified small disadvantaged business enterprise, granting privileged access to set-aside federal contracts and demonstrating our unwavering commitment to operational excellence in public sector facility management services.",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                  delay: 3.0,
                  badge: "Federal Certification",
                  image: "/image003.jpg",
                  hasImage: true,
                  certificationNumber: "SBA-8A-2024-FM",
                  issuedBy: "U.S. Small Business Administration",
                  validUntil: "2029",
                  priority: "Priority 1",
                  sector: "Facility Management Services",
                  naicsCode: "561210"
                },
                { 
                  name: "Maryland Small Business Reserve Program", 
                  description: "Official state certification for Maryland's Small Business Reserve Program, providing privileged access to state government contracts and procurement opportunities",
                  longDescription: "Distinguished state-level certification recognizing our exceptional qualifications for Maryland's competitive Small Business Reserve Program, ensuring priority consideration for state government facility management contracts and preferred vendor status for local procurement initiatives.",
                  icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                  delay: 3.2,
                  badge: "State Certification",
                  hasImage: false,
                  certificationNumber: "MD-SBR-2024-FM",
                  issuedBy: "State of Maryland Department of General Services",
                  validUntil: "2028",
                  priority: "Tier 1",
                  sector: "Government Facility Services",
                  registryNumber: "MD-001547"
                }
              ].map((cert, index) => (
                <motion.div 
                  key={index}
                  className="group relative bg-gradient-to-br from-white via-slate-50/30 to-white rounded-3xl border-2 border-slate-200/60 p-10 shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden backdrop-blur-sm"
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1
                  }}
                  transition={{ 
                    duration: 1, 
                    delay: cert.delay,
                    type: "spring",
                    stiffness: 80
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -12,
                    boxShadow: "0 30px 60px rgba(0, 0, 0, 0.18)",
                    borderColor: index === 0 ? "#730007" : "#1a1b4f"
                  }}
                >
                  {/* Enhanced Professional Background Effects */}
                  <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        radial-gradient(circle at 20% 30%, ${index === 0 ? '#730007' : '#1a1b4f'} 1px, transparent 1px),
                        radial-gradient(circle at 80% 70%, ${index === 0 ? '#1a1b4f' : '#730007'} 1px, transparent 1px)
                      `,
                      backgroundSize: '60px 60px, 80px 80px'
                    }} />
                  </div>
                  
                  {/* Premium Gradient Overlay */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: index === 0 
                        ? 'linear-gradient(135deg, rgba(115, 0, 7, 0.03) 0%, rgba(26, 27, 79, 0.03) 100%)'
                        : 'linear-gradient(135deg, rgba(26, 27, 79, 0.03) 0%, rgba(115, 0, 7, 0.03) 100%)'
                    }}
                  />
                  
                  {/* Enhanced Professional Badge with Animation - Reduced Size */}
                  <motion.div 
                    className="absolute top-4 right-4 px-3 py-1.5 text-white text-xs font-bold rounded-xl shadow-lg border border-white/40 z-20 backdrop-blur-md"
                    style={{ 
                      background: index === 0 
                        ? 'linear-gradient(135deg, #730007 0%, #8b0009 100%)' 
                        : 'linear-gradient(135deg, #1a1b4f 0%, #252663 100%)'
                    }}
                    initial={{ opacity: 0, scale: 0, rotate: -15, x: 20 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
                    transition={{ delay: cert.delay + 0.4, type: "spring", stiffness: 150 }}
                    whileHover={{ scale: 1.05, rotate: 2, y: -1 }}
                  >
                    <div className="flex items-center space-x-1.5">
                      <motion.div
                        className="w-3 h-3 rounded-full bg-white/30 flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <svg className="w-1.5 h-1.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                      <span className="tracking-wider font-extrabold whitespace-nowrap">{cert.badge}</span>
                    </div>
                    
                    {/* Animated Badge Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0"
                      style={{
                        background: index === 0
                          ? 'linear-gradient(135deg, rgba(115, 0, 7, 0.4) 0%, rgba(139, 0, 9, 0.4) 100%)'
                          : 'linear-gradient(135deg, rgba(26, 27, 79, 0.4) 0%, rgba(37, 38, 99, 0.4) 100%)'
                      }}
                      whileHover={{ 
                        opacity: [0, 0.3, 0],
                        scale: [1, 1.1, 1.2]
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Enhanced Professional Header Section */}
                  <motion.div 
                    className="mb-10 pr-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: cert.delay + 0.1 }}
                  >
                    <div className="flex items-start space-x-6 mb-6">
                      {/* Enhanced Premium Icon */}
                      <motion.div 
                        className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-white to-slate-100 border-3 border-slate-200 flex items-center justify-center shadow-lg overflow-hidden"
                        initial={{ scale: 0, rotate: -270, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 150, 
                          delay: cert.delay + 0.2,
                          duration: 1
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          backgroundColor: index === 0 ? "#730007" : "#1a1b4f",
                          borderColor: index === 0 ? "#730007" : "#1a1b4f",
                          rotate: 8,
                          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                        }}
                      >
                        {/* Icon Background Animation */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl opacity-0"
                          style={{
                            background: index === 0
                              ? 'radial-gradient(circle, rgba(115, 0, 7, 0.1) 0%, transparent 70%)'
                              : 'radial-gradient(circle, rgba(26, 27, 79, 0.1) 0%, transparent 70%)'
                          }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        <svg className="w-10 h-10 text-slate-600 group-hover:text-white transition-all duration-500 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d={cert.icon} clipRule="evenodd" />
                        </svg>
                        
                        {/* Animated Ring Effect */}
                        <motion.div
                          className="absolute inset-0 border-3 rounded-2xl opacity-0"
                          style={{ borderColor: index === 0 ? '#730007' : '#1a1b4f' }}
                          whileHover={{ 
                            opacity: [0, 0.7, 0],
                            scale: [1, 1.1, 1.2]
                          }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </motion.div>
                      
                      {/* Enhanced Certification Details */}
                      <div className="flex-1 space-y-3">
                        <motion.div 
                          className="text-sm font-bold text-slate-500 tracking-wider uppercase mb-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: cert.delay + 0.3 }}
                        >
                          {cert.issuedBy}
                        </motion.div>
                        
                        {/* Professional Credential Tags */}
                        <div className="flex flex-wrap gap-2">
                          <motion.div 
                            className="px-3 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 text-green-800 rounded-lg text-xs font-bold tracking-wide"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: cert.delay + 0.4 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            ✓ Valid until {cert.validUntil}
                          </motion.div>
                          
                          <motion.div 
                            className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 text-blue-800 rounded-lg text-xs font-bold tracking-wide"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: cert.delay + 0.5 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {cert.priority} Status
                          </motion.div>
                        </div>
                        
                        {/* Professional Sector Tag */}
                        <motion.div 
                          className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-semibold tracking-wide border-2"
                          style={{
                            backgroundColor: index === 0 ? 'rgba(115, 0, 7, 0.05)' : 'rgba(26, 27, 79, 0.05)',
                            borderColor: index === 0 ? 'rgba(115, 0, 7, 0.2)' : 'rgba(26, 27, 79, 0.2)',
                            color: index === 0 ? '#730007' : '#1a1b4f'
                          }}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: cert.delay + 0.6 }}
                          whileHover={{ scale: 1.05, x: 5 }}
                        >
                          <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: index === 0 ? '#730007' : '#1a1b4f' }}></span>
                          {cert.sector}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Enhanced Professional Image Section for 8(a) SBA */}
                  {cert.hasImage && (
                    <motion.div 
                      className="mb-8 relative"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: cert.delay + 0.1, duration: 0.8 }}
                    >
                      <div className="relative rounded-2xl overflow-hidden border-2 border-slate-300 bg-white shadow-lg">
                        {/* Enhanced Professional Image Container */}
                        <motion.div 
                          className="relative h-52 overflow-hidden bg-gradient-to-br from-slate-50 to-white"
                          whileHover={{ scale: 1.01 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img 
                            src={cert.image} 
                            alt="8(a) SBA Certification Documentation"
                            className="w-full h-full object-contain object-center p-6"
                            style={{
                              objectFit: 'contain',
                              filter: 'brightness(1.1) contrast(1.15) saturate(1.05) drop-shadow(0 4px 12px rgba(0,0,0,0.1))'
                            }}
                          />
                          
                          {/* Enhanced Professional Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/5 pointer-events-none" />
                          
                          {/* Professional Corner Frame with Brand Colors */}
                          <motion.div 
                            className="absolute top-4 left-4 w-14 h-14 border-l-4 border-t-4 rounded-tl-xl"
                            style={{ borderColor: '#730007' }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: cert.delay + 0.4, type: "spring" }}
                          />
                          <motion.div 
                            className="absolute bottom-4 right-4 w-14 h-14 border-r-4 border-b-4 rounded-br-xl"
                            style={{ borderColor: '#1a1b4f' }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: cert.delay + 0.5, type: "spring" }}
                          />
                          
                          {/* Enhanced Certification Badge - Reduced Size */}
                          <motion.div 
                            className="absolute bottom-3 left-3 bg-white border border-green-500 px-2.5 py-1.5 rounded-lg shadow-md"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: cert.delay + 0.6, type: "spring" }}
                            whileHover={{ scale: 1.03 }}
                          >
                            <div className="flex items-center space-x-1.5">
                              <motion.div 
                                className="w-2 h-2 bg-green-500 rounded-full"
                                animate={{ 
                                  scale: [1, 1.1, 1],
                                  opacity: [1, 0.8, 1]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                              <span className="text-xs font-bold text-green-700 tracking-wide">CERTIFIED</span>
                            </div>
                          </motion.div>
                          
                          {/* Document Authenticity Seal - Reduced Size */}
                          <motion.div 
                            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-md"
                            style={{ backgroundColor: '#730007' }}
                            initial={{ opacity: 0, rotate: -180 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            transition={{ delay: cert.delay + 0.7, type: "spring", stiffness: 200 }}
                            whileHover={{ rotate: 8, scale: 1.05 }}
                          >
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </motion.div>
                        </motion.div>
                        
                        {/* Enhanced Professional Frame Border */}
                        <div className="absolute inset-3 rounded-xl border-2 border-white/60 pointer-events-none shadow-inner" />
                        
                        {/* Subtle Shimmer Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"
                          initial={{ x: '-100%', opacity: 0 }}
                          animate={{ x: '100%', opacity: [0, 1, 0] }}
                          transition={{ 
                            duration: 2, 
                            delay: cert.delay + 1,
                            repeat: Infinity,
                            repeatDelay: 6
                          }}
                        />
                      </div>
                      
                      {/* Professional Image Caption */}
                      <motion.div 
                        className="mt-4 text-center px-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: cert.delay + 0.8 }}
                      >
                        <div className="text-sm font-semibold text-slate-700 tracking-wide border-t border-slate-200 pt-4 mb-2">
                          Official SBA 8(a) Business Development Program Certification
                        </div>
                        <div className="text-xs text-slate-500">
                          U.S. Small Business Administration • Federal Certification Document
                        </div>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Icon - Only show if no image */}
                  {!cert.hasImage && (
                    <motion.div 
                      className="w-16 h-16 mb-6 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        delay: cert.delay + 0.1 
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "#1a1b4f",
                        borderColor: "#1a1b4f"
                      }}
                    >
                      <svg className="w-8 h-8 text-slate-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d={cert.icon} clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  )}

                  {/* Enhanced Compact Icon for Image Cards */}
                  {cert.hasImage && (
                    <motion.div 
                      className="absolute top-8 left-8 w-14 h-14 rounded-xl bg-white/95 backdrop-blur-sm border-2 border-slate-200 flex items-center justify-center shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        delay: cert.delay + 0.3 
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "#1a1b4f",
                        borderColor: "#1a1b4f",
                        rotate: 5
                      }}
                    >
                      {/* Icon Background Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-100 to-red-100 opacity-0"
                        whileHover={{ opacity: 0.3 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <svg className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors duration-300 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d={cert.icon} clipRule="evenodd" />
                      </svg>
                      
                      {/* Small animated ring */}
                      <motion.div
                        className="absolute inset-0 border-2 border-blue-300 rounded-xl opacity-0"
                        whileHover={{ 
                          opacity: [0, 0.6, 0],
                          scale: [1, 1.1, 1.2]
                        }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      />
                    </motion.div>
                  )}

                  {/* Enhanced Content Section with Professional Typography */}
                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: cert.delay + 0.5 }}
                  >
                    {/* Enhanced Certification Title */}
                    <motion.h4 
                      className="text-2xl lg:text-3xl font-black leading-tight tracking-tight mb-4"
                      style={{ color: '#1a1b4f' }}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: cert.delay + 0.6, type: "spring", stiffness: 100 }}
                      whileHover={{ x: 8, scale: 1.01 }}
                    >
                      {cert.name}
                      
                      {/* Professional Title Underline */}
                      <motion.div 
                        className="h-1 rounded-full mt-2"
                        style={{ backgroundColor: index === 0 ? '#730007' : '#1a1b4f' }}
                        initial={{ width: 0 }}
                        animate={{ width: "60px" }}
                        transition={{ delay: cert.delay + 0.8, duration: 0.8 }}
                        whileHover={{ width: "80px" }}
                      />
                    </motion.h4>
                    
                    {/* Enhanced Certification Details Grid */}
                    <motion.div 
                      className="grid grid-cols-2 gap-4 mb-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: cert.delay + 0.7 }}
                    >
                      <div className="space-y-1">
                        <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Certification ID</div>
                        <div className="font-mono font-bold text-sm" style={{ color: index === 0 ? '#730007' : '#1a1b4f' }}>
                          {cert.certificationNumber}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                          {cert.naicsCode ? 'NAICS Code' : 'Registry Number'}
                        </div>
                        <div className="font-mono font-bold text-sm text-slate-700">
                          {cert.naicsCode || cert.registryNumber}
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Enhanced Description */}
                    <motion.p 
                      className="text-slate-600 leading-relaxed font-medium text-lg mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: cert.delay + 0.8 }}
                      whileHover={{ x: 8 }}
                    >
                      {cert.description}
                    </motion.p>
                    
                    {/* Enhanced Detailed Description with Professional Styling */}
                    <motion.div 
                      className="relative pl-6 py-4 rounded-xl bg-gradient-to-r from-slate-50 to-white border-l-4 border-r border-t border-b border-slate-200"
                      style={{ borderLeftColor: index === 0 ? '#730007' : '#1a1b4f' }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: cert.delay + 0.9 }}
                      whileHover={{ x: 5, backgroundColor: 'rgba(248, 250, 252, 0.8)' }}
                    >
                      {/* Quote Icon */}
                      <motion.div 
                        className="absolute -left-2 top-4 w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: index === 0 ? '#730007' : '#1a1b4f' }}
                        whileHover={{ scale: 1.2 }}
                      >
                        <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                      
                      <p className="text-slate-600 leading-relaxed font-medium italic">
                        {cert.longDescription}
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Professional Footer with Stats */}
                  <motion.div 
                    className="mt-10 pt-8 border-t-2 border-slate-100"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: cert.delay + 1.0 }}
                  >
                    {/* Enhanced Verification Status Bar */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <motion.div 
                          className="relative w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            boxShadow: [
                              '0 0 0 0 rgba(34, 197, 94, 0.7)',
                              '0 0 0 10px rgba(34, 197, 94, 0)',
                              '0 0 0 0 rgba(34, 197, 94, 0)'
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                        <div>
                          <div className="text-sm font-bold text-green-700">Verified Active Status</div>
                          <div className="text-xs text-slate-500">Last verified 24 hours ago</div>
                        </div>
                      </div>
                      
                      {/* Enhanced Professional Seal */}
                      <motion.div 
                        className="relative opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.3, rotate: 15 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-300 flex items-center justify-center shadow-lg">
                          <svg className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        
                        {/* Rotating Ring Effect */}
                        <motion.div
                          className="absolute inset-0 border-2 border-blue-200 rounded-full opacity-0"
                          whileHover={{ 
                            opacity: [0, 0.5, 0],
                            rotate: [0, 360],
                            scale: [1, 1.2, 1.4]
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </motion.div>
                    </div>
                    
                    {/* Professional Achievement Metrics */}
                    <motion.div 
                      className="grid grid-cols-3 gap-4 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: cert.delay + 1.1 }}
                    >
                      <div className="space-y-1">
                        <div className="text-lg font-black" style={{ color: index === 0 ? '#730007' : '#1a1b4f' }}>
                          {index === 0 ? '9+' : '7+'}
                        </div>
                        <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Years Certified
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-lg font-black" style={{ color: index === 0 ? '#730007' : '#1a1b4f' }}>
                          {index === 0 ? '150+' : '85+'}
                        </div>
                        <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Projects Completed
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-lg font-black text-green-600">
                          100%
                        </div>
                        <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Compliance Rate
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Animated Border */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-2 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                    style={{ 
                      background: index === 0 
                        ? 'linear-gradient(90deg, #730007, #8b0009)' 
                        : 'linear-gradient(90deg, #1a1b4f, #252663)' 
                    }}
                  />
                  
                  {/* Professional Hover Glow Effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                    style={{ 
                      background: index === 0 
                        ? 'radial-gradient(circle at center, #730007, transparent)' 
                        : 'radial-gradient(circle at center, #1a1b4f, transparent)' 
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
    </>
  );
};

export default Hero;
