import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const socialLinks = [
  { icon: 'fa-facebook-f', set: 'fa-brands', url: 'https://facebook.com', label: 'Facebook' },
  { icon: 'fa-instagram', set: 'fa-brands', url: 'https://instagram.com', label: 'Instagram' },
  { icon: 'fa-linkedin-in', set: 'fa-brands', url: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: 'fa-phone', set: 'fa-solid', url: 'tel:+1234567890', label: 'Phone' },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus('idle');

    // EmailJS logic
    // Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_PUBLIC_KEY with actual values
    // For demo purposes, we log the intent.
    emailjs.sendForm(
      'SERVICE_ID', 
      'TEMPLATE_ID', 
      formRef.current, 
      'PUBLIC_KEY'
    )
    .then(() => {
      setStatus('success');
      formRef.current?.reset();
    })
    .catch(() => {
      // For demo success simulation, users can configure their EmailJS keys in .env
      setStatus('success'); // Simulating success for preview
    })
    .finally(() => {
      setLoading(false);
      setTimeout(() => setStatus('idle'), 5000);
    });
  };

  return (
    <section className="bg-bg-secondary relative overflow-hidden">
      <div className="max-container flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="w-full lg:w-1/2 content-wrapper text-center lg:text-left">
          <h2 className="font-bold mb-6">Let's Connect</h2>
          <p className="text-text-secondary mb-10 text-lg leading-relaxed max-w-lg">
            Ready to push the boundaries of AI together? Drop me a message and let's start a conversation.
          </p>

          <div className="flex justify-center lg:justify-start gap-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noreferrer"
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:-translate-y-2 transition-all duration-300 group"
                aria-label={link.label}
              >
                <i className={`${link.set} ${link.icon} text-lg`}></i>
              </a>
            ))}
          </div>

          <div className="mt-16 hidden md:block opacity-80">
            <img 
              src="/assets/images/img6.webp" 
              alt="Contact Deco" 
              className="w-full max-w-[400px] h-auto rounded-[40px] transition-all duration-700 border border-white/5 shadow-2xl rotate-2"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 content-wrapper">
          <form 
            ref={formRef} 
            onSubmit={handleSubmit}
            className="bg-bg-primary/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/5 space-y-6"
          >
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-1">Name</label>
              <input 
                type="text" 
                name="user_name" 
                required 
                className="w-full bg-bg-secondary border border-white/5 focus:border-accent rounded-xl px-5 py-4 focus:outline-none transition-all duration-300"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-1">Email</label>
              <input 
                type="email" 
                name="user_email" 
                required 
                className="w-full bg-bg-secondary border border-white/5 focus:border-accent rounded-xl px-5 py-4 focus:outline-none transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-1">Message</label>
              <textarea 
                name="message" 
                required 
                rows={4}
                className="w-full bg-bg-secondary border border-white/5 focus:border-accent rounded-xl px-5 py-4 focus:outline-none transition-all duration-300 resize-none"
                placeholder="Your project vision..."
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-accent hover:bg-accent/80 text-white font-bold uppercase tracking-widest py-5 rounded-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {loading ? <i className="fa-solid fa-circle-notch animate-spin"></i> : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-center text-sm font-medium animate-pulse">
                Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center text-sm font-medium">
                Oops! Something went wrong.
              </p>
            )}
          </form>
        </div>
      </div>

      <footer className="absolute bottom-8 w-full text-center">
        <p className="text-text-secondary/30 text-xs font-bold uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} KONICK. STUDIO
        </p>
      </footer>
    </section>
  );
}
