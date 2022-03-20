const categories = [
  'DEVELOPMENT',
  'WEB DESIGN',
  'APPLICATION',
  'DESIGN',
  'MOBILE',
];

const data = [
  {
    id: 1,
    date: '2022',
    category: 'DEVELOPMENT',
    title: 'Mi Portafolio',
    image: 'portafolio.png',
    technologies: [
      'React',
      'CSS Modules',
      'Responsive',
      'Neumorphism',
      'Netlify',
      'Markdown',
      'HTML',
      'JS',
      'Formspree',
      'Eslint',
      'Prettier',
    ],
    desc: `Mi sitio web personal estilo Neumorfismo.
     Este proyecto me tomo mucho trabajo solo para poder expresar lo que hago y lo que me gusta hacer. 
     Junto con un pequeño blog usando markdown. Espero que te guste <3.`,
    links: {
      code: 'https://github.com/Tono2007/portafolio',
      page: 'https://antonioayola.netlify.app/',
    },
  },
  {
    id: 2,
    date: '2022',
    category: 'WEB DESIGN',
    title: 'Cars Landing Page',
    image: 'carsLandingPage.png',
    technologies: [
      'Webpack',
      'Yarn',
      'Sass(scss)',
      'Babel',
      'BEM',
      'SwiperJs',
      'Github Pages',
      'Responsive',
      'HTML',
      'CSS',
      'JS',
    ],
    desc: `Este proyecto es una landing page con tematica de carros algo simple, me sirvio principalmente para practicar y entender mejor webpack, antes de pasar a Vite D:
    Tambien para ver como funciona sass junto con la metodologia BEM, implementar un efecto parallax de otra manera y un slider con SwiperJs.
    Esta vez lo subi a Github Pages, usando github actions, creando un pequeño workflow que crea el build y lo mueve a la rama de gh-pages para el deploy.`,
    links: {
      code: 'https://github.com/Tono2007/CarsLandingPage',
      page: 'https://tono2007.github.io/CarsLandingPage/',
    },
  },
  /* {
    id: 2,
    category: 'WEB DESIGN',
    totalLike: '780',
    title: 'Mobile Restaurant App Landing design complete',
    image: 'https://picsum.photos/600/500?random=2',
    desc: 'Landing page made for promoting physical therapist services, this project was made using html, and css',
  },
  {
    id: 3,
    category: 'APPLICATION',
    totalLike: '180',
    title: 'Logo and application design',
    image: 'https://picsum.photos/600/500?random=3',
    desc: 'Single Page Application to list and preview Rick and Morty’s Characters made using vanilla javascript, html and css',
  },
  {
    id: 4,
    category: 'WEB DESIGN',
    totalLike: '120',
    title: 'Dashboard Completed',
    image: 'https://picsum.photos/600/500?random=4',
    desc: 'Este proyecto me tomo mucho trabajo solo para poder experesar lo que hago y lo que me gusta hacer. Espero que te guste <3',
  }, */
];

export default data;
