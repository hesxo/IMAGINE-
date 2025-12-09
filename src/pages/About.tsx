import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1761618291331-535983ae4296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHByb2R1Y3Rpb24lMjBzdGFnZXxlbnwxfHx8fDE3NjUxNTgwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Event production stage"
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
              About
              <br />
              <span className="font-light">IMAGINE ENTERTAINMENT</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Delivering exceptional event experiences through technical excellence and creative vision
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl mb-8 tracking-tight">
                Who We Are
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  IMAGINE ENTERTAINMENT is a premium full-service event production company with over 15 years of experience delivering world-class events across the United States.
                </p>
                <p>
                  Our team of seasoned professionals brings deep technical expertise and creative vision to every project, ensuring that each event we produce is executed flawlessly from concept to completion.
                </p>
                <p>
                  We pride ourselves on our collaborative approach, working closely with clients to understand their vision and transform it into extraordinary reality—on time, on budget, every time.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px]"
            >
              <img
                src="https://images.unsplash.com/photo-1704201234960-567e502e0263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGxpZ2h0aW5nJTIwZGVzaWdufGVufDF8fHx8MTc2NTI1MDIxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Event lighting design"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-300">
            {[
              {
                icon: Target,
                title: 'Precision',
                description: 'Meticulous attention to every detail',
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'Working closely with our clients',
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'Uncompromising quality standards',
              },
              {
                icon: TrendingUp,
                title: 'Innovation',
                description: 'Cutting-edge technology and techniques',
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-12 hover:bg-black hover:text-white transition-all duration-300 group"
                >
                  <Icon className="w-12 h-12 mb-8 text-gray-400 group-hover:text-white transition-colors" />
                  <h3 className="text-2xl mb-4">{value.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1709731191876-899e32264420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjUxNzc1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Concert stage lighting"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl sm:text-5xl mb-8 tracking-tight">
                Why Choose Us
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Full In-House Capabilities',
                    description:
                      'Audio, video, lighting, staging, and logistics—all managed seamlessly under one roof.',
                  },
                  {
                    title: 'Experienced Team',
                    description:
                      'Seasoned professionals with decades of combined experience in event production.',
                  },
                  {
                    title: 'On-Time, On-Budget',
                    description:
                      'Proven track record of delivering exactly what we promise, when we promise it.',
                  },
                  {
                    title: 'Premium Equipment',
                    description:
                      'State-of-the-art technology and equipment for every production.',
                  },
                ].map((item, index) => (
                  <div key={index} className="border-l-2 border-black pl-6">
                    <h3 className="text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 lg:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl mb-6 tracking-tight">
                Client Testimonials
              </h2>
              <p className="text-lg text-gray-400">
                Trusted by industry leaders for exceptional results
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  'IMAGINE ENTERTAINMENT transformed our annual conference into an extraordinary experience. Their technical expertise and seamless execution exceeded all expectations.',
                name: 'Sarah Mitchell',
                position: 'VP of Events, TechCorp Global',
              },
              {
                quote:
                  'The professionalism and quality of their work made them the perfect partner for our product launch. Everything was delivered on time and on budget.',
                name: 'Marcus Chen',
                position: 'Marketing Director, Innovate Industries',
              },
              {
                quote:
                  'Their one-stop solution meant we had a single point of contact for everything. The result was a stress-free planning process and spectacular event.',
                name: 'Jennifer Torres',
                position: 'Festival Director',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-gray-800 p-8"
              >
                <p className="text-gray-300 mb-8 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-800 pt-6">
                  <p className="mb-1">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
