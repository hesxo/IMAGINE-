import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1709731191876-899e32264420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjUxNzc1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Concert stage with dramatic lighting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-8 text-white tracking-tight">
              Creating Extraordinary
              <br />
              <span className="font-light">Event Experiences</span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Full-service event production delivered with precision, passion, and unparalleled expertise
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-black px-10 py-4 text-sm uppercase tracking-wider transition-all inline-flex items-center gap-2 group"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white hover:bg-white hover:text-black text-white px-10 py-4 text-sm uppercase tracking-wider transition-all"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-8 tracking-tight">
                Your Vision,
                <br />
                <span className="font-light">Our Expertise</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                IMAGINE ENTERTAINMENT is a premium event production company specializing in creating unforgettable experiences for corporate events, concerts, festivals, and private celebrations.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                With our comprehensive in-house capabilities and experienced team, we deliver seamless events from concept to execution—on time, on budget, every time.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-wider hover:gap-4 transition-all group"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px]"
            >
              <img
                src="https://images.unsplash.com/photo-1761618291331-535983ae4296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHByb2R1Y3Rpb24lMjBzdGFnZXxlbnwxfHx8fDE3NjUxNTgwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Event production stage"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight">
                Complete Production
                <br />
                <span className="font-light">Services</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need for a flawless event, all under one roof
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-300">
            {[
              'Audio Engineering',
              'Video Production',
              'Lighting Design',
              'Staging & Rigging',
              'Event Management',
              'Technical Direction',
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 hover:bg-black hover:text-white transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <CheckCircle className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="text-5xl font-light text-gray-200 group-hover:text-white/20 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-2xl mb-2">{service}</h3>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-10 py-4 text-sm uppercase tracking-wider transition-all"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 lg:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { number: '500+', label: 'Events Delivered' },
              { number: '15+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl lg:text-6xl mb-4 font-light">{stat.number}</div>
                <div className="text-sm uppercase tracking-wider text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="py-20 px-6 lg:px-12 bg-white border-y border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Trusted By</h2>
          <p className="text-2xl">Industry-Leading Brands & Organizations</p>
        </div>
        
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Scrolling container */}
          <div className="flex animate-scroll-right">
            {/* First set of logos */}
            <div className="flex gap-20 items-center px-8">
              {[
                { name: 'TechCorp', icon: 'T' },
                { name: 'GlobalNet', icon: 'GN' },
                { name: 'Innovate', icon: 'I' },
                { name: 'Summit', icon: 'S' },
                { name: 'Nexus', icon: 'N' },
                { name: 'Vortex', icon: 'V' },
                { name: 'Quantum', icon: 'Q' },
                { name: 'Fusion', icon: 'F' },
                { name: 'Horizon', icon: 'H' },
                { name: 'Elevate', icon: 'E' },
                { name: 'Pinnacle', icon: 'P' },
                { name: 'Stellar', icon: 'S' },
              ].map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-56 h-32 flex flex-col items-center justify-center gap-4 grayscale hover:grayscale-0 transition-all group"
                >
                  <div className="w-16 h-16 border-2 border-gray-300 group-hover:border-gray-900 flex items-center justify-center transition-colors">
                    <span className="text-3xl font-light text-gray-400 group-hover:text-gray-900 transition-colors">
                      {company.icon}
                    </span>
                  </div>
                  <span className="text-base text-gray-400 group-hover:text-gray-900 transition-colors">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-20 items-center px-8">
              {[
                { name: 'TechCorp', icon: 'T' },
                { name: 'GlobalNet', icon: 'GN' },
                { name: 'Innovate', icon: 'I' },
                { name: 'Summit', icon: 'S' },
                { name: 'Nexus', icon: 'N' },
                { name: 'Vortex', icon: 'V' },
                { name: 'Quantum', icon: 'Q' },
                { name: 'Fusion', icon: 'F' },
                { name: 'Horizon', icon: 'H' },
                { name: 'Elevate', icon: 'E' },
                { name: 'Pinnacle', icon: 'P' },
                { name: 'Stellar', icon: 'S' },
              ].map((company, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex-shrink-0 w-56 h-32 flex flex-col items-center justify-center gap-4 grayscale hover:grayscale-0 transition-all group"
                >
                  <div className="w-16 h-16 border-2 border-gray-300 group-hover:border-gray-900 flex items-center justify-center transition-colors">
                    <span className="text-3xl font-light text-gray-400 group-hover:text-gray-900 transition-colors">
                      {company.icon}
                    </span>
                  </div>
                  <span className="text-base text-gray-400 group-hover:text-gray-900 transition-colors">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-8 tracking-tight">
              Ready to Create Something
              <br />
              <span className="font-light">Extraordinary?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Let's discuss your vision and bring it to life with precision and excellence
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-12 py-5 text-sm uppercase tracking-wider transition-all"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}