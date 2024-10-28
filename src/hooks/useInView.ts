import { useEffect, useRef, useState } from 'react';

export function useInView(options = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        // Keep the element visible after animation
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, { 
      threshold: 0.2,
      rootMargin: '50px',
      ...options 
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isInView] as const;
}