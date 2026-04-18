/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Components
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>('section');
    
    // Smooth transitions for sections (skipping hero for initial fade-in)
    sections.forEach((section, index) => {
      const contentElements = section.querySelectorAll('.content-wrapper');
      
      if (index === 0) {
        // Only track active index for hero
        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: 'bottom 50%',
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
        return;
      }

      if (contentElements.length > 0) {
        gsap.fromTo(
          contentElements,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 20%',
              scrub: 1,
              onEnter: () => setActiveIndex(index),
              onEnterBack: () => setActiveIndex(index),
            },
          }
        );
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative selection:bg-accent selection:text-white">
      {/* Background Utilities */}
      <div className="grain-overlay" />
      <div className="vignette" />
      <div className="glow-effect" />
      <CustomCursor />

      {/* Navigation Rail */}
      <nav className="fixed left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 z-50">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`nav-dot ${i === activeIndex ? 'active' : ''}`} />
        ))}
      </nav>

      {/* Scroll Indicator */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-50 opacity-50 pointer-events-none">
        <span className="scroll-text">
          {activeIndex === 5 ? 'Back to top' : `Next: ${['About', 'Skills', 'Projects', 'Experience', 'Contact'][activeIndex] || 'Scroll'}`}
        </span>
        <div className="scroll-line" />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Global CSS enhancements */}
      <style>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0b0b0f;
        }
        ::-webkit-scrollbar-thumb {
          background: #1f1f2a;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #7f5af0;
        }
      `}</style>
    </div>
  );
}
