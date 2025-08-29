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

        {/* Professional Business Certifications */}
        <motion.div 
          className="pb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          <div className="text-center mb-16">
            <motion.h3 
              className="text-3xl font-bold mb-6 relative inline-block"
              style={{ color: '#1a1b4f' }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.9 }}
            >
              Certified Business Excellence
              <motion.div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full"
                style={{ backgroundColor: '#730007' }}
                initial={{ width: 0 }}
                animate={{ width: "96px" }}
                transition={{ duration: 1, delay: 3.2 }}
              />
            </motion.h3>
            <motion.p 
              className="text-lg text-slate-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.0 }}
            >
              Recognized by federal and state authorities for our commitment to excellence
            </motion.p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  name: "8(a) SBA Certified Small Business", 
                  description: "Small Business Administration certification for federal contracting opportunities",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                  delay: 3.0,
                  badge: "Federal"
                },
                { 
                  name: "Maryland Small Business Reserve Program", 
                  description: "State-certified small business for Maryland government contracts",
                  icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                  delay: 3.1,
                  badge: "State"
                }
              ].map((cert, index) => (
                <motion.div 
                  key={index}
                  className="group relative bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: cert.delay 
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 16px 32px rgba(0, 0, 0, 0.1)",
                    borderColor: "#64748b"
                  }}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div className="w-full h-full bg-slate-200 rounded-full blur-2xl" />
                  </div>
                  
                  {/* Badge */}
                  <motion.div 
                    className="absolute top-4 right-4 px-3 py-1 text-white text-xs font-medium rounded-full"
                    style={{ backgroundColor: '#730007' }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: cert.delay + 0.3 }}
                  >
                    {cert.badge}
                  </motion.div>

                  {/* Icon */}
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

                  {/* Content */}
                  <motion.h4 
                    className="text-xl font-bold mb-3 leading-tight"
                    style={{ color: '#1a1b4f' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: cert.delay + 0.2 }}
                  >
                    {cert.name}
                  </motion.h4>
                  
                  <motion.p 
                    className="text-slate-600 leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: cert.delay + 0.3 }}
                  >
                    {cert.description}
                  </motion.p>

                  {/* Animated Border */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: '#730007' }}
                  />
                  
                  {/* Verification Icon */}
                  <motion.div 
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.2 }}
                  >
                    <svg className="w-6 h-6 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
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
