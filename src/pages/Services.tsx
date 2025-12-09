import React from 'react';
import { motion } from 'motion/react';
import {
  Lightbulb,
  Users,
  Volume2,
  Video,
  Zap,
  Box,
  UserCheck,
  Grid3x3,
  Radio,
  Headphones,
  Truck,
  Wrench,
  Package,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Lightbulb,
    title: 'Event Consultation & Creative Direction',
    description:
      'Strategic planning and creative vision that transforms your ideas into unforgettable experiences.',
  },
  {
    icon: Users,
    title: 'Full Event Management',
    description:
      'End-to-end event coordination with meticulous attention to every detail from planning to execution.',
  },
  {
    icon: Volume2,
    title: 'Audio Engineering & Sound Systems',
    description:
      'Crystal-clear audio with state-of-the-art sound systems for venues of any size.',
  },
  {
    icon: Video,
    title: 'Video Production & LED Walls',
    description:
      'Stunning visual displays with cutting-edge LED technology and broadcast-quality production.',
  },
  {
    icon: Zap,
    title: 'Lighting Design & Programming',
    description:
      'Dynamic lighting solutions custom-programmed to create the perfect atmosphere.',
  },
  {
    icon: Box,
    title: 'Staging, Scenic & Set Design',
    description:
      'Custom-built stages and scenic elements designed to elevate your event aesthetic.',
  },
  {
    icon: UserCheck,
    title: 'Professional Event Staffing & Crew',
    description:
      'Experienced, reliable technicians and support staff who execute with precision.',
  },
  {
    icon: Grid3x3,
    title: 'Truss, Rigging & Structural Systems',
    description:
      'Safe, certified rigging solutions engineered to meet the highest safety standards.',
  },
  {
    icon: Radio,
    title: 'Technical Direction & Show Calling',
    description:
      'Expert show callers who orchestrate every technical element in perfect synchronization.',
  },
  {
    icon: Headphones,
    title: 'Event Support & Live Operations',
    description:
      'Real-time technical support to ensure seamless event flow and rapid issue resolution.',
  },
  {
    icon: Truck,
    title: 'Logistics & Equipment Transport',
    description:
      'Comprehensive logistics planning and professional equipment transportation.',
  },
  {
    icon: Wrench,
    title: 'Installations (Temporary & Permanent)',
    description:
      'Expert installation services for both temporary events and permanent venues.',
  },
  {
    icon: Package,
    title: 'Equipment Rentals',
    description:
      'Premium equipment rentals with delivery, setup, and technical support included.',
  },
];

export function Services() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1704201234960-567e502e0263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGxpZ2h0aW5nJTIwZGVzaWdufGVufDF8fHx8MTc2NTI1MDIxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Event lighting design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-white tracking-tight">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive event production solutions delivered with precision and expertise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white p-10 hover:bg-black hover:text-white transition-all duration-300 group"
                >
                  <Icon className="w-12 h-12 mb-8 text-gray-400 group-hover:text-white transition-colors" />
                  <h3 className="text-xl mb-4">{service.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl mb-6 tracking-tight">
                Our Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A proven approach to delivering exceptional events
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Consultation',
                description: 'We listen to your vision and understand your needs',
              },
              {
                number: '02',
                title: 'Planning',
                description: 'Detailed planning and design of every element',
              },
              {
                number: '03',
                title: 'Execution',
                description: 'Flawless delivery by our expert team',
              },
              {
                number: '04',
                title: 'Support',
                description: '24/7 support throughout your event',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-light text-gray-200 mb-6">{step.number}</div>
                <h3 className="text-2xl mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl mb-8 tracking-tight">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Every event is unique. Let's discuss your specific needs and create a tailored production plan
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-black px-12 py-5 text-sm uppercase tracking-wider transition-all"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
