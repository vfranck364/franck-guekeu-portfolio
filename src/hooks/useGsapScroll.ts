import { useLayoutEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Setup<T extends HTMLElement> = (root: T) => void | (() => void);

export function useGsapScroll<T extends HTMLElement>(ref: RefObject<T | null>, setup: Setup<T>, dependencies: unknown[] = []) {
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let customCleanup: void | (() => void);
    const context = gsap.context(() => { customCleanup = setup(root); }, root);
    return () => {
      customCleanup?.();
      context.revert();
    };
    // The caller controls the lifecycle through the supplied dependencies.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
