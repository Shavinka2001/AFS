import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "FOH Industrial Hygiene Surveys",
      description: "Comprehensive industrial hygiene assessments ensuring workplace safety and compliance with federal occupational health standards.",
      icon: "🔬",
      features: ["Air Quality Testing", "Chemical Exposure Analysis", "Safety Protocol Development"]
    },
    {
      title: "Building Controls Upgrades",
      description: "Advanced building automation and control system installations for enhanced energy efficiency and operational performance.",
      icon: "🏢",
      features: ["HVAC Optimization", "Energy Management", "Smart Building Integration"]
    },
    {
      title: "GSA RMS Safety Audits",
      description: "Government Services Administration Real Property Management Services safety audits ensuring federal compliance standards.",
      icon: "🛡️",
      features: ["Compliance Assessment", "Risk Evaluation", "Safety Documentation"]
    },
    {
      title: "Lead in Water Compliance",
      description: "Comprehensive lead testing and remediation services ensuring safe drinking water standards and regulatory compliance.",
      icon: "💧",
      features: ["Water Testing", "Lead Remediation", "Compliance Reporting"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: '#1a1b4f' }}
          >
            Our Projects
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Delivering excellence across diverse facility management and safety compliance projects 
            with innovative solutions and industry expertise.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Project Icon */}
              <motion.div 
                className="text-4xl mb-6"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {project.icon}
              </motion.div>

              {/* Project Title */}
              <motion.h3 
                className="text-xl font-bold mb-4 group-hover:text-opacity-90 transition-colors"
                style={{ color: '#730007' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                {project.title}
              </motion.h3>

              {/* Project Description */}
              <motion.p 
                className="text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                {project.description}
              </motion.p>

              {/* Features List */}
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                {project.features.map((feature, featureIndex) => (
                  <motion.div 
                    key={featureIndex}
                    className="flex items-center text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.5 + (featureIndex * 0.1),
                      duration: 0.4 
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-2 h-2 rounded-full mr-3"
                      style={{ backgroundColor: '#730007' }}
                      whileHover={{ scale: 1.3 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="rounded-2xl p-8 text-white relative overflow-hidden"
            style={{ 
              background: `linear-gradient(135deg, #730007 0%, #1a1b4f 100%)`
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-white opacity-0 hover:opacity-5 transition-opacity duration-300"
              initial={false}
            />
            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Start Your Next Project?
            </motion.h3>
            <motion.p 
              className="text-gray-200 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              viewport={{ once: true }}
            >
              Let our experienced team deliver professional facility management and safety compliance 
              solutions tailored to your specific requirements.
            </motion.p>
            <motion.button 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Get Your Free Consultation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
