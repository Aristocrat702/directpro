export const createParticles = (x, y, count = 2) => {
  const particles = [];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 3 + 1;
    particles.push({
      x: x + (Math.random() - 0.5) * 10,
      y: y + (Math.random() - 0.5) * 10,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: Math.random() * 6 + 2,
      opacity: 0.8,
      blur: Math.random() * 4 + 2,
      color: `rgba(200,166,77,${Math.random() * 0.6 + 0.2})`,
      life: 1,
    });
  }
  return particles;
};

export const updateParticles = (particles) => {
  const updated = particles.map(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.vx *= 0.98;
    p.vy *= 0.98;
    p.life -= 0.02;
    p.opacity = Math.max(0, p.life * 0.8);
    p.size *= 0.995;
    p.blur += 0.02;
    return p;
  });
  return updated;
};