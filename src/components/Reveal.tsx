import { useRef, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export function Reveal({ children, className = '', delay = 0, y = 24 }: { children: ReactNode; className?: string; delay?: number; y?: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y, x: 18, filter: 'blur(5px)' }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.14, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.82, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

export function MagneticLink({ children, href, className = '' }: { children: ReactNode; href: string; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  return <a ref={ref} href={href} className={className}>{children}</a>;
}
