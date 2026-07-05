import React, { useEffect, useRef } from 'react';
import { createParticles, updateParticles } from '../../utils/particles';
import styles from './Cursor.module.css';

const Cursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const frameRef = useRef();

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
      // Create particles on move
      if (particlesRef.current.length < 25) {
        const newParticles = createParticles(e.clientX, e.clientY, 2);
        particlesRef.current = [...particlesRef.current, ...newParticles];
      }
    };

    const animate = () => {
      // Ring with inertia
      ringPos.current.x += (mouseRef.current.x - ringPos.current.x) * 0.08;
      ringPos.current.y += (mouseRef.current.y - ringPos.current.y) * 0.08;
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + 'px';
        ringRef.current.style.top = ringPos.current.y + 'px';
      }

      // Update particles
      particlesRef.current = updateParticles(particlesRef.current);
      // Remove dead particles
      particlesRef.current = particlesRef.current.filter(p => p.life > 0);
      // Render particles to DOM (using a canvas or divs)
      // We'll use a container for particles
      const container = document.getElementById('cursor-particles');
      if (container) {
        // We'll render each particle as a div
        container.innerHTML = '';
        particlesRef.current.forEach(p => {
          const el = document.createElement('div');
          el.style.cssText = `
            position: fixed;
            left: ${p.x}px;
            top: ${p.y}px;
            width: ${p.size}px;
            height: ${p.size}px;
            background: radial-gradient(circle, ${p.color}, transparent);
            border-radius: 50%;
            pointer-events: none;
            opacity: ${p.opacity};
            filter: blur(${p.blur}px);
            transform: translate(-50%, -50%);
            z-index: 99998;
          `;
          container.appendChild(el);
        });
      }

      // Hover effects (handled via CSS classes)
      frameRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      // Clear particles container
      const container = document.getElementById('cursor-particles');
      if (container) container.innerHTML = '';
    };
  }, []);

  // Hover effects on interactive elements
  useEffect(() => {
    const elements = document.querySelectorAll('a, button, .btn, .glass, .value-item, .process-item, .advantage-item, .test-card, .faq-item');
    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '48px';
        ringRef.current.style.height = '48px';
        ringRef.current.style.borderColor = 'var(--gold)';
        ringRef.current.style.boxShadow = '0 0 40px var(--gold-glow)';
      }
      if (cursorRef.current) {
        cursorRef.current.style.width = '12px';
        cursorRef.current.style.height = '12px';
        cursorRef.current.style.background = 'var(--gold)';
      }
    };
    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '30px';
        ringRef.current.style.height = '30px';
        ringRef.current.style.borderColor = 'rgba(255,255,255,0.3)';
        ringRef.current.style.boxShadow = 'none';
      }
      if (cursorRef.current) {
        cursorRef.current.style.width = '8px';
        cursorRef.current.style.height = '8px';
        cursorRef.current.style.background = 'var(--gold)';
      }
    };
    elements.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    return () => {
      elements.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor-particles" className={styles.particlesContainer}></div>
      <div ref={ringRef} className={styles.ring}></div>
      <div ref={cursorRef} className={styles.cursor}></div>
    </>
  );
};

export default Cursor;