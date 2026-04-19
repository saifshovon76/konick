import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const projectImages = [
  "https://picsum.photos/seed/p1/1200/800",
  "https://picsum.photos/seed/p2/1200/800",
  "https://picsum.photos/seed/p3/1200/800",
  "https://picsum.photos/seed/p4/1200/800",
  "https://picsum.photos/seed/p5/1200/800"
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]); // Re-run effect when index changes to reset timer

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <section className="bg-bg-secondary min-h-screen py-24">
      <div className="max-container relative z-10">
        <div className="content-wrapper flex flex-col items-center">
          
          <div className="w-full max-w-[900px] mb-16 relative group">
            <div className="absolute -inset-4 bg-accent/10 blur-3xl rounded-full opacity-50 pointer-events-none" />
            
            <div className="relative aspect-[16/9] overflow-hidden rounded-[40px] border border-white/10 shadow-2xl bg-black rotate-1 isolate fix-rounded-overflow">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={projectImages[currentIndex]}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="w-full h-full object-cover rounded-[40px] opacity-90"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white pointer-events-auto hover:bg-accent/40 transition-colors"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white pointer-events-auto hover:bg-accent/40 transition-colors"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>

              {/* Progress Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {projectImages.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 transition-all duration-300 rounded-full ${i === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-white/20'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center max-w-2xl">
            <h2 className="font-bold mb-6 italic-serif text-accent text-3xl">Project Spotlight</h2>
            <div className="inline-block px-12 py-6 bg-bg-primary border border-accent/20 rounded-2xl mb-8">
              <span className="text-2xl md:text-4xl font-black tracking-tighter text-white uppercase italic">
                Advanced AI Workflows
              </span>
            </div>
            <p className="text-text-secondary leading-relaxed text-lg">
              Showcasing a curated gallery of high-precision prompt orchestration, 
              automated context retrieval systems, and cross-model performance benchmarks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
