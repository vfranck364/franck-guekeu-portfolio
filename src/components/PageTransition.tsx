import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';

export function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const reduced = useReducedMotion();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={location.pathname} initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reduced ? undefined : { opacity: 0 }} transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
