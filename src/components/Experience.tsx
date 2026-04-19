import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const experiences = [
  {
    role: 'Lead Prompt Engineer',
    company: 'NeuralFlow AI',
    period: '2023 - PRESENT',
    desc: 'Orchestrating complex prompt workflows for generative AI pipelines.',
  },
  {
    role: 'AI Implementation Strategist',
    company: 'Nexus Tech',
    period: '2021 - 2023',
    desc: 'Designed enterprise-grade AI integration roadmaps for Fortune 500 clients.',
  },
  {
    role: 'NLP Researcher',
    company: 'Synthetix Research',
    period: '2019 - 2021',
    desc: 'Explored semantic boundaries and zero-shot learning capabilities.',
  },
];

const experienceImages = [
  "/assets/images/exp1.webp",
  "/assets/images/exp2.webp",
  "/assets/images/exp3.webp",
  "/assets/images/exp4.webp",
  "/assets/images/exp5.webp"
];

export default function Experience() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % experienceImages.length);
    }, 4000); // Slightly faster than projects for variety
    return () => clearInterval(timer);
  }, [imageIndex]); // Re-run effect to reset timer on manual interaction

  const nextSlide = () => {
    setImageIndex((prev) => (prev + 1) % experienceImages.length);
  };

  const prevSlide = () => {
    setImageIndex((prev) => (prev - 1 + experienceImages.length) % experienceImages.length);
  };

  return (
    <section className="bg-bg-primary py-24 min-h-screen flex items-center">
      <div className="max-container">
        <div className="content-wrapper grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="font-mono text-accent text-xs uppercase tracking-[0.3em] mb-4 block">Professional Timeline</span>
            <h2 className="font-bold mb-12 leading-tight text-5xl">
              A Journey Through <br />
              <span className="italic-serif text-accent">Intelligence</span>
            </h2>
            
            <div className="space-y-12 relative">
              <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-accent/50 via-accent/10 to-transparent ml-3" />
              
              {experiences.map((exp, index) => (
                <div key={index} className="pl-12 relative group">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-bg-primary border-2 border-accent/30 group-hover:border-accent group-hover:scale-125 transition-all duration-300 z-10" />
                  <span className="font-mono text-accent text-[10px] font-bold tracking-[0.2em]">{exp.period}</span>
                  <h3 className="text-2xl font-bold mt-1 text-white group-hover:text-accent transition-colors">{exp.role}</h3>
                  <p className="text-text-secondary text-sm mt-1 font-medium">{exp.company}</p>
                  <p className="text-text-secondary/60 mt-4 leading-relaxed max-w-md text-base">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative content-wrapper mt-12 lg:mt-0">
             <div className="absolute -inset-20 bg-accent/5 blur-[100px] rounded-full opacity-50" />
             
             <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] rotate-3 isolate fix-rounded-overflow">
               <AnimatePresence mode="wait">
                 <motion.img 
                  key={imageIndex}
                  src={experienceImages[imageIndex]} 
                  alt="Experience Journey" 
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-700 rounded-[40px]"
                  referrerPolicy="no-referrer"
                />
               </AnimatePresence>

               {/* Manual Controls */}
               <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
                 <button 
                   onClick={prevSlide}
                   className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white pointer-events-auto hover:bg-accent transition-colors"
                 >
                   <i className="fa-solid fa-chevron-left text-sm"></i>
                 </button>
                 <button 
                   onClick={nextSlide}
                   className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white pointer-events-auto hover:bg-accent transition-colors"
                 >
                   <i className="fa-solid fa-chevron-right text-sm"></i>
                 </button>
               </div>

               <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                 {experienceImages.map((_, i) => (
                   <div 
                    key={i} 
                    className={`h-1 rounded-full transition-all duration-500 ${i === imageIndex ? 'w-8 bg-accent' : 'w-2 bg-white/20'}`}
                   />
                 ))}
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
