import { useEffect, useRef } from 'react';

type Star = { x: number; y: number; z: number; r: number; twinkle: number; phase: number; hue: number };

/** A lightweight multi-depth starfield that reacts to pointer, touch and page scroll. */
export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d', { alpha: true });
    if (!canvas || !context) return;
    const ctx = context;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0, height = 0, raf = 0, scrollY = window.scrollY;
    let pointerX = 0, pointerY = 0, targetX = 0, targetY = 0;
    let lastFrame = 0;
    const frameInterval = 1000 / 30;
    let stars: Star[] = [];
    const resize = () => {
      width = window.innerWidth; height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, width < 700 ? 1.15 : 1.35);
      canvas.width = Math.floor(width * dpr); canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(width < 700 ? 210 : 360, Math.max(width < 700 ? 150 : 220, Math.floor((width * height) / (width < 700 ? 1650 : 1500))));
      stars = Array.from({ length: count }, () => {
        const z = Math.pow(Math.random(), .62);
        return { x: Math.random() * width, y: Math.random() * height, z, r: .32 + z * (1.55 + Math.random() * 3.05), twinkle: .5 + Math.random() * .5, phase: Math.random() * Math.PI * 2, hue: Math.random() };
      });
    };
    const onPointer = (event: PointerEvent) => {
      targetX = (event.clientX / Math.max(width, 1) - .5) * 78;
      targetY = (event.clientY / Math.max(height, 1) - .5) * 62;
    };
    const onScroll = () => { scrollY = window.scrollY; };
    const draw = (time: number) => {
      if (!reduced && time - lastFrame < frameInterval) { raf = requestAnimationFrame(draw); return; }
      lastFrame = time;
      ctx.clearRect(0, 0, width, height);
      pointerX += (targetX - pointerX) * .075; pointerY += (targetY - pointerY) * .075;
      const scrollShift = reduced ? 0 : (scrollY * .086) % (height + 40);
      for (const star of stars) {
        const depth = .18 + star.z * 1.08;
        const x = ((star.x + pointerX * depth) % (width + 12) + (width + 12)) % (width + 12) - 6;
        const y = ((star.y + pointerY * depth + scrollShift * star.z) % (height + 20) + (height + 20)) % (height + 20) - 10;
        const pulse = reduced ? 1 : .72 + Math.sin(time * (.00065 + star.z * .00055) + star.phase) * .25;
        const alpha = Math.min(1, star.twinkle * pulse * (.48 + star.z * .52));
        const radius = star.r * (.72 + star.z * .82);
        if (star.z > .90 && radius > 2.45) { ctx.shadowBlur = 4 + radius * 1.35; ctx.shadowColor = star.hue > .5 ? 'rgba(189,145,255,.72)' : 'rgba(162,178,255,.68)'; }
        else ctx.shadowBlur = 0;
        ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = star.hue > .66 ? `rgba(202,176,255,${alpha})` : star.hue > .33 ? `rgba(189,202,255,${alpha})` : `rgba(238,232,255,${alpha})`;
        ctx.fill(); ctx.shadowBlur = 0;
        if (star.z > .91 && radius > 2.65) {
          ctx.strokeStyle = `rgba(190,160,255,${alpha * .42})`; ctx.lineWidth = .7;
          ctx.beginPath(); ctx.moveTo(x - radius * 2.3, y); ctx.lineTo(x + radius * 2.3, y); ctx.moveTo(x, y - radius * 2.3); ctx.lineTo(x, y + radius * 2.3); ctx.stroke();
        }
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('pointerdown', onPointer, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    if (reduced) draw(0); else raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); window.removeEventListener('pointermove', onPointer); window.removeEventListener('pointerdown', onPointer); window.removeEventListener('scroll', onScroll); };
  }, []);
  return <canvas ref={canvasRef} className="space-background" aria-hidden="true" />;
}
