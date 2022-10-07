import { useState, useEffect } from 'react';

export default function useIsInViewportOnce(ref) {
  const [isInViewPort, setIsInViewport] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (ref.current && isInViewPort !== true) {
        const { top } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        return setIsInViewport(top < windowHeight - elementVisible);
      }
      return null;
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, isInViewPort]);

  return isInViewPort;
}
