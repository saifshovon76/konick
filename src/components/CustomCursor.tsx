import { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.custom-cursor-follower');

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 1.5,
        ease: 'power3.out',
      });
    };

    const onMouseDown = () => {
      gsap.to([cursor, follower], { scale: 0.8, duration: 0.2 });
    };

    const onMouseUp = () => {
      gsap.to([cursor, follower], { scale: 1, duration: 0.2 });
    };

    const addHoverEffect = () => {
      setHovering(true);
      gsap.to(follower, {
        scale: 2,
        backgroundColor: 'rgba(127, 90, 240, 0.2)',
        borderColor: '#7f5af0',
        duration: 0.3,
      });
    };

    const removeHoverEffect = () => {
      setHovering(false);
      gsap.to(follower, {
        scale: 1,
        backgroundColor: 'transparent',
        borderColor: 'rgba(255, 255, 255, 0.3)',
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const hoverTagNames = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'I'];
    const interactables = document.querySelectorAll('a, button, input, textarea, i, .hover-target');
    
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', addHoverEffect);
      el.addEventListener('mouseleave', removeHoverEffect);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', addHoverEffect);
        el.removeEventListener('mouseleave', removeHoverEffect);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" />
      <div className="custom-cursor-follower">
        <div className="cursor-dot" />
      </div>
    </>
  );
}
