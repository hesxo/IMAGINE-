import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const portfolioItems = [
  {
    images: [
      'https://images.unsplash.com/photo-1762765685348-4bced247d12c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGdhbGF8ZW58MXx8fHwxNzY1MjUwMjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1762765684665-6b6855bb6fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHZlbnVlfGVufDF8fHx8MTc2NTI1ODI1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1763706320063-b210731b37a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwaGFsbCUyMGxpZ2h0aW5nfGVufDF8fHx8MTc2NTI1ODI1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    title: 'Corporate Gala 2024',
    caption: 'Full technical production for annual corporate gala',
    category: 'Corporate',
    description: 'Complete audio, video, and lighting production for a 1,000+ guest corporate gala. Featured custom LED wall displays, wireless audio systems, and dynamic lighting programming.',
    details: {
      client: 'Fortune 500 Company',
      venue: 'Grand Convention Center',
      attendance: '1,200 guests',
      services: ['Audio Engineering', 'LED Walls', 'Lighting Design', 'Stage Design'],
    },
  },
  {
    images: [
      'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwY3Jvd2R8ZW58MXx8fHwxNzY1MjIzMjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1611810293387-c8afe03cd7dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMHN0YWdlJTIwY3Jvd2R8ZW58MXx8fHwxNzY1MjU4MjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1673701121685-8f617d696dc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwZmVzdGl2YWwlMjBzdGFnZXxlbnwxfHx8fDE3NjUyNDk3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    title: 'Summer Music Festival',
    caption: 'Multi-day festival with complete audio, lighting & staging',
    category: 'Festival',
    description: '3-day outdoor music festival featuring multiple stages, full production infrastructure, and 24/7 technical support for over 50 artists.',
    details: {
      client: 'Music Festival Promoters',
      venue: 'Outdoor Festival Grounds',
      attendance: '15,000+ per day',
      services: ['Multi-Stage Setup', 'Weather Protection', 'Audio Systems', 'Rigging'],
    },
  },
  {
    images: [
      'https://images.unsplash.com/photo-1761618291331-535983ae4296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHByb2R1Y3Rpb24lMjBzdGFnZXxlbnwxfHx8fDE3NjUxNTgwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1675171155224-e70a5eeb27c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHN0YWdlJTIwc2V0dXB8ZW58MXx8fHwxNzY1MjU4MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1747792942012-a81ba2b11de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwYmFja3N0YWdlJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2NTI1ODI1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    title: 'Arena Concert Production',
    caption: 'Arena concert with advanced LED walls and lighting design',
    category: 'Concert',
    description: 'Full-scale arena concert production featuring state-of-the-art LED video walls, complex lighting programming, and premium audio systems.',
    details: {
      client: 'Major Recording Artist',
      venue: 'Sports Arena',
      attendance: '18,000 guests',
      services: ['LED Video Walls', 'Concert Lighting', 'Audio Engineering', 'Rigging'],
    },
  },
  {
    images: [
      'https://images.unsplash.com/photo-1695233744051-d1d64f567082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjB3YWxsJTIwY29uY2VydHxlbnwxfHx8fDE3NjUyNTAyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1704201234960-567e502e0263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGxpZ2h0aW5nJTIwZGVzaWdufGVufDF8fHx8MTc2NTI1MDIxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1709731191876-899e32264420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjUxNzc1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    title: 'Brand Activation Experience',
    caption: 'Immersive LED wall installation for brand activation event',
    category: 'Corporate',
    description: 'Interactive brand activation featuring immersive LED displays, custom content programming, and integrated audio-visual experiences.',
    details: {
      client: 'Global Tech Brand',
      venue: 'Convention Center',
      attendance: '5,000+ visitors',
      services: ['LED Installations', 'Interactive Content', 'Audio Systems', 'Technical Direction'],
    },
  },
  {
    images: [
      'https://images.unsplash.com/photo-1704201234960-567e502e0263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGxpZ2h0aW5nJTIwZGVzaWdufGVufDF8fHx8MTc2NTI1MDIxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1709731191876-899e32264420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjUxNzc1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1677768062274-fdd45caac233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZGVjb3J8ZW58MXx8fHwxNzY1MjU4MjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    title: 'Theatrical Performance',
    caption: 'Custom lighting programming for theatrical performance',
    category: 'Theater',
    description: 'Complex lighting design and programming for theatrical production featuring dynamic scene changes and synchronized audio.',
    details: {
      client: 'Theater Company',
      venue: 'Performing Arts Center',
      attendance: '800 per show',
      services: ['Lighting Programming', 'Show Control', 'Audio Design', 'Technical Direction'],
    },
  },
  {
    images: [
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwbGF1bmNoJTIwZXZlbnR8ZW58MXx8fHwxNzY1MTc2Njc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1762765685348-4bced247d12c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGdhbGF8ZW58MXx8fHwxNzY1MjUwMjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1764471444363-e6dc0f9773bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwZXZlbnQlMjBzZXR1cHxlbnwxfHx8fDE3NjUyNTAyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    title: 'Product Launch Event',
    caption: 'High-profile product launch with integrated AV solutions',
    category: 'Corporate',
    description: 'Premium product launch event featuring keynote presentations, interactive displays, and broadcast-quality video production.',
    details: {
      client: 'Technology Company',
      venue: 'Innovation Hub',
      attendance: '500 VIP guests',
      services: ['Video Production', 'Audio Systems', 'Presentation Tech', 'Live Streaming'],
    },
  },
];

const categories = ['All', 'Corporate', 'Festival', 'Concert', 'Theater'];

export function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItem !== null) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? portfolioItems[selectedItem].images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItem !== null) {
      setCurrentImageIndex((prev) =>
        prev === portfolioItems[selectedItem].images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const openLightbox = (index: number) => {
    setSelectedItem(index);
    setCurrentImageIndex(0);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwY3Jvd2R8ZW58MXx8fHwxNzY1MjIzMjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Music festival crowd"
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
              Our Portfolio
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A showcase of exceptional events delivered with precision and creativity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6 lg:px-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 text-sm uppercase tracking-wider transition-all ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'border border-gray-300 text-gray-600 hover:border-black'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                const originalIndex = portfolioItems.indexOf(item);
                return (
                  <motion.div
                    key={item.title}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="group relative overflow-hidden bg-white cursor-pointer aspect-square"
                    onClick={() => openLightbox(originalIndex)}
                  >
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Image count badge */}
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 text-xs">
                      {item.images.length} Photos
                    </div>
                    
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center">
                      <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">
                        {item.category}
                      </div>
                      <h3 className="text-2xl text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{item.caption}</p>
                      <p className="text-xs text-gray-400">Click to view gallery</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 overflow-y-auto"
            onClick={() => setSelectedItem(null)}
          >
            <div className="min-h-screen p-6 lg:p-12">
              <button
                className="fixed top-8 right-8 w-12 h-12 border border-white/30 hover:border-white hover:bg-white hover:text-black flex items-center justify-center transition-all text-white z-50"
                onClick={() => setSelectedItem(null)}
              >
                <X className="w-5 h-5" />
              </button>
              
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-7xl mx-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Main Image Carousel */}
                <div className="relative mb-8">
                  <img
                    src={portfolioItems[selectedItem].images[currentImageIndex]}
                    alt={`${portfolioItems[selectedItem].title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                  />
                  
                  {/* Navigation arrows */}
                  {portfolioItems[selectedItem].images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black border border-white/30 hover:border-white text-white flex items-center justify-center transition-all"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black border border-white/30 hover:border-white text-white flex items-center justify-center transition-all"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                  
                  {/* Image counter */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 text-sm">
                    {currentImageIndex + 1} / {portfolioItems[selectedItem].images.length}
                  </div>
                </div>

                {/* Thumbnail navigation */}
                {portfolioItems[selectedItem].images.length > 1 && (
                  <div className="flex gap-2 justify-center mb-8 overflow-x-auto pb-2">
                    {portfolioItems[selectedItem].images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                        }}
                        className={`flex-shrink-0 w-20 h-20 border-2 transition-all ${
                          idx === currentImageIndex
                            ? 'border-white'
                            : 'border-transparent opacity-50 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Project Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">
                      {portfolioItems[selectedItem].category}
                    </div>
                    <h2 className="text-4xl mb-6">
                      {portfolioItems[selectedItem].title}
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg mb-8">
                      {portfolioItems[selectedItem].description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="border-l-2 border-white pl-6">
                      <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                        Client
                      </h3>
                      <p className="text-lg">{portfolioItems[selectedItem].details.client}</p>
                    </div>
                    <div className="border-l-2 border-white pl-6">
                      <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                        Venue
                      </h3>
                      <p className="text-lg">{portfolioItems[selectedItem].details.venue}</p>
                    </div>
                    <div className="border-l-2 border-white pl-6">
                      <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                        Attendance
                      </h3>
                      <p className="text-lg">{portfolioItems[selectedItem].details.attendance}</p>
                    </div>
                    <div className="border-l-2 border-white pl-6">
                      <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                        Services Provided
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {portfolioItems[selectedItem].details.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="border border-white/30 px-3 py-1 text-sm"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
