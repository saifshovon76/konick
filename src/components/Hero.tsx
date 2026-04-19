import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useGSAP(() => {
    // Initial Reveal animation
    const tl = gsap.timeline();
    tl.fromTo(
      heroRef.current,
      { filter: 'blur(20px) brightness(0)' },
      { filter: 'blur(0px) brightness(1)', duration: 2, ease: 'power4.out' }
    )
    .fromTo(
      '.hero-title',
      { y: 100, opacity: 0, skewY: 10 },
      { y: 0, opacity: 1, skewY: 0, duration: 1.5, ease: 'power4.out' },
      '-=1'
    )
    .fromTo(
      '.hero-subtitle',
      { y: 40, opacity: 0, letterSpacing: '1em' },
      { y: 0, opacity: 1, letterSpacing: '0.4em', duration: 1.2, ease: 'power3.out' },
      '-=1'
    )
    .fromTo(
      '.central-figure',
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'expo.out' },
      '-=1'
    );

    // Combined Scroll controlled timeline - optimized for 60fps
    const heroScrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      }
    });

    heroScrollTl
      .to('.hero-title', { y: -150, scale: 0.9, ease: 'none' }, 0)
      .to('.hero-title', { opacity: 0, ease: 'none' }, 0.4) // Start fade at 40% of scroll
      .to('.hero-subtitle', { y: -100, ease: 'none' }, 0)
      .to('.hero-subtitle', { opacity: 0, ease: 'none' }, 0.3)
      .to('.central-figure', { y: 100, rotateX: 10, scale: 1.2, ease: 'none' }, 0)
      .to('.central-figure', { opacity: 0, ease: 'none' }, 0.5)
      .to('.hero-video-container', { scale: 1.2, filter: 'brightness(0.2) blur(10px)', ease: 'none' }, 0);

    // Scroll controlled video scrub
    if (videoRef.current) {
      const video = videoRef.current;
      const onLoadedMetadata = () => {
        gsap.to(video, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
          currentTime: video.duration || 5,
          ease: 'none'
        });
      };

      if (video.readyState >= 2) {
        onLoadedMetadata();
      } else {
        video.addEventListener('loadedmetadata', onLoadedMetadata);
      }
    }
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="hero min-h-screen">
      <div className="vignette" />
      <div className="gradient-overlay" />
      
      {/* Fallback pattern for video */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b0f] to-[#1a1a2e] -z-10" />
      
      <div className="hero-video-container absolute inset-0 -z-10 overflow-hidden">
        {!videoError ? (
          <video
            ref={videoRef}
            src="/assets/video/hero-bg.mp4"
            muted
            loop
            autoPlay
            playsInline
            className="hero-video w-full h-full object-cover opacity-40"
            onError={() => {
              setVideoError(true);
            }}
          />
        ) : (
          <img 
            src="/assets/video/hero-bg.webp" 
            alt="Hero Animation Baseline" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        )}
      </div>

      <div className="max-container relative z-10 flex flex-col items-center text-center">
        <div className="content-wrapper flex flex-col items-center">
          <h1 className="hero-title font-extrabold tracking-tighter uppercase mb-4 gradient-text">
            KONICK
          </h1>
          <p className="hero-subtitle subtitle-spaced">
            AI Prompt Specialist
          </p>

          <div className="central-figure w-full max-w-[1000px] h-[450px] mt-12 flex items-center justify-center rounded-[40px] overflow-hidden fade-mask fix-rounded-overflow">
            <img 
              src="/public/assets/images/img1.webp" 
              alt="Konick Profile" 
              className="w-full h-full object-cover opacity-90 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <i className="fa-solid fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
}
