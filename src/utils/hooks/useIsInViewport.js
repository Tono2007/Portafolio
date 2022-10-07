import { useState, useEffect } from 'react';

export default function useIsInViewport(ref) {
  const [isInViewPort, setIsInViewport] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        //console.log(top);
        //console.log(windowHeight);
        //console.log(windowHeight - top > 20);
        //console.log(ref.current.offsetTop);
        //console.log(window.scrollY);
        //console.log(window.pageYOffset);
        /* console.log(
          bottom > 0 &&
            top < (windowHeight - elementVisible || ref.current.clientHeight),
        ); */
        //console.log(top < windowHeight - elementVisible);
        const getIsInViewPort =
          bottom > 0 &&
          top < (windowHeight - elementVisible || ref.current.clientHeight);

        return setIsInViewport(getIsInViewPort);
      }
      return null;
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, isInViewPort]);

  return isInViewPort;
}
