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
    image: 'portafolio.webp',
    technologies: [
      'PWA',
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
     Este portafolio es una PWA, asi que puedes instalar la aplicacion en tu dispositivo.
    
     Ademas viene con un pequeño blog usando markdown. Espero que te guste <3.`,
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
    image: 'carsLandingPage.webp',
    technologies: [
      'Webpack',
      'Yarn',
      'Sass(scss)',
      'Babel',
      'BEM',
      'SwiperJs',
      'Github Pages',
      'Github Actions',
      'Responsive',
      'HTML',
      'CSS',
      'JS',
    ],
    desc: `Este proyecto es una landing page con tematica de carros algo simple, me sirvio principalmente para practicar y entender mejor webpack, antes de pasar a esbuild con Vite D:
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
    image: 'movieApp.webp',
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
    Fue un proyecto complicado, por el manejo de los datos, principalmente la seccion del buscador; ademas de que el diseño fue completamente pensado por mi.
    Falta terminar la pestaña de actores y series que seria muy parecida a la de peliculas.
    El despliegue del sitio esta en vercel, se guarda la clave de la api en variables de ambiente.
    Me gustaria aprender y mejorar el rendimiento en este proyecto
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
    image: 'lolApp.webp',
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
      //page: 'https://lol-app.netlify.app/',
      page: 'https://master--lol-app.netlify.app/',
    },
  },
  {
    id: 5,
    year: '2022',
    date: '05/11/2022',
    category: 'WEB DESIGN',
    title: 'Pokedex',
    image: 'pokedex.webp',
    technologies: [
      'NextJs',
      'ReactJs',
      'Tailwind',
      'HTML',
      'CSS',
      'JS',
      'PropTypes',
      'Pokeapi',
      'Vercel',
      'Responsive',
      'Axios',
    ],
    desc: `La típica aplicación pokedex que todos hacen, principalmente para practicar nextjs y tener mi primer acercamiento con tailwind y testing.
    Simplemente muestra, busca y guarda tus pokemones ademas de secciones como generaciones y tipos.
    Puedes encontrar imagenes, nombres y detalles de cada pokemon.
    Me senti muy comodo con tailwind, el diseño fue totalmente creado por mi.
    Ante la duda de agregar typescript ocupé proptypes para verificar los tipos de datos.
    El despliegue del sitio esta en Vercel.`,
    links: {
      code: 'https://github.com/Tono2007/pokedex',
      page: 'https://pokedex-tono2007.vercel.app/',
    },
  },
  {
    id: 6,
    year: '2022',
    date: '11/11/2022',
    category: 'APPLICATION',
    title: 'React-Libs',
    image: 'reactLibs.webp',
    technologies: ['ReactJs', 'JS', 'Docusaurus ', 'Vercel', 'Responsive'],
    desc: `Para este proyecto queria intentar generar una documentación, me encontre con varias herramientas que ya se encargan de un desarrollo rapido para centrarnos en el contenido.
    Se elijio Docusaurus 2, un moderno generador de sitios estaticos, especializado en documentación ademas de estar construido con React.
    
    Utilizando el preset(classic) de Docusaurus fue muy sencillo generar la estructura de documentación. Se puede personalizar el diseño, crear tus componentes y seguir ocupando React, ademas que el contenido se escribe en mdx.

    El tema que se escogio fue generar una base de datos con información util, consejos, guias en el uso de React.
    Este proyecto fue muy sencillo, el proposito solo fue agregar una herramienta mas a mis conocimientos que en algun momento puede ser util.
    `,
    links: {
      code: 'https://github.com/Tono2007/React-Libs',
      page: 'https://react-libs.vercel.app/',
    },
  },
];

export default data;
