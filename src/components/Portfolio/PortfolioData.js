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
    year: '2022',
    date: '16/3/2022',
    category: 'WEB DESIGN',
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
      'react-transition-group',
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
    year: '2022',
    date: '21/3/2022',
    category: 'DEVELOPMENT',
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
  {
    id: 3,
    year: '2022',
    date: '10/4/2022',
    category: 'APPLICATION',
    title: 'MoviesApp',
    image: 'movieApp.jpeg',
    technologies: [
      'ReactJs',
      'Material-ui (MUI)',
      'HTML',
      'CSS',
      'JS',
      'SwiperJs',
      'Vercel',
      'Responsive',
      'TMBD',
      'Axios',
      'Moment',
      'react-router-dom',
    ],
    desc: `Este proyecto es un sitio web para navegar entre peliculas y ver detalles de cada una. 
    Ayudandonos de material-ui(mui) para el diseño y la API de TheMovieDataBase TMDB para obtener información de las peliculas.
    Fue un proyecto complicado, por el manejo de los datos, principalmente la seccion del buscador.
    Falta terminar la pestaña de actores y series que seria muy parecida a la de peliculas.
    El despliegue del sitio esta en vercel, se guarda la clave de la api en variables de ambiente.
    `,
    links: {
      code: 'https://github.com/Tono2007/Movies-App',
      page: 'https://movies-app-tono2007.vercel.app',
    },
  },

  {
    id: 4,
    year: '2022',
    date: '04/5/2022',
    category: 'WEB DESIGN',
    title: 'LOL-APP',
    image: 'lolApp.png',
    technologies: [
      'ReactJs',
      'Styled-Components',
      'HTML',
      'CSS',
      'JS',
      'GSAP',
      'Netlify',
      'Responsive',
      'Riot API',
      'Axios',
    ],
    desc: `Este proyecto es una aplicación para consultar jugadores y detalles de los campeones del juego.
    Ocupando Styled Components para el diseño y la API de RIOT para obtener información de los jugadores.
    Este proyecto fue práctica para aprender Styled Components y la biblioteca GSAP para las animaciones.
    La clave que tengo para acceder a la api de riot es limitada, en cuanto numero de peticiones y el tiempo que estara activa, puede presentar errores antes que genere otra.
    El despliegue del sitio esta en Netlify.
    `,
    links: {
      code: null,
      page: 'https://lol-app.netlify.app/',
    },
  },
  {
    id: 5,
    year: '-',
    date: '-',
    category: '-',
    title: 'Proximo Proyecto',
    image: 'portafolioBlack.png',
    technologies: ['-'],
    desc: `Siguiente proyecto proximamente
    `,
    links: {
      code: null,
      page: null,
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
