import { useEffect } from 'react';

const useCurrentLink = () => {
  const addClassCurrent = () => {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li');
    let current;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    navLi.forEach((li) => {
      li.classList.remove('active');
      if (li.classList.contains(current)) {
        li.classList.add('active');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', addClassCurrent);
    return () => window.removeEventListener('scroll', addClassCurrent);
  }, []);
};

export default useCurrentLink;
