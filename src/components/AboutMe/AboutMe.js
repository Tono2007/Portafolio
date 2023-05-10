import { useState } from 'react';
import hero from '../../assets/me.webp';
import styles from './AboutMe.module.css';
import { constants } from '../../utils/constants';

const skills = [
  {
    name: 'CSS',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
    href: 'https://www.w3schools.com/css/',
  },
  {
    name: 'Git',
    img: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    href: 'https://git-scm.com/',
  },
  {
    name: 'HTML',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
    href: 'https://www.w3.org/html/',
  },
  {
    name: 'Javascript',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'MySQL',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
    href: 'https://www.mysql.com/',
  },
  {
    name: 'NodeJS',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
    href: 'https://nodejs.org',
  },
  {
    name: 'Postman',
    img: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
    href: 'https://postman.com',
  },
  {
    name: 'Python',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    href: 'https://www.python.org',
  },
  {
    name: 'React',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    href: 'https://reactjs.org/',
  },
  {
    name: 'Bootstrap',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
    href: 'https://getbootstrap.com',
  },
  {
    name: 'Java',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
    href: 'https://www.java.com',
  },
  {
    name: 'Materialize',
    img: 'https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg',
    href: 'https://materializecss.com/',
  },
  {
    name: 'React Native',
    img: 'https://reactnative.dev/img/header_logo.svg',
    href: 'https://reactnative.dev/',
  },
  {
    name: 'Redux',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
    href: 'https://redux.js.org',
  },
  {
    name: 'Webpack',
    img: 'https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg',
    href: 'https://webpack.js.org',
  },
];
function About() {
  return (
    <div className={styles.me}>
      <h2>Quien soy y más sobre mi</h2>
      <p>
        Me llamo Antonio Ayola soy un desarrollador de Software de México con
        gran afición al mundo Tecnológico, autodidacta y apasionado por aprender
        más todos los días sobre nuevas tecnologias. <br />
        <br />A lo largo de mi aventura en el mundo del desarrollo web, me
        involucre en el desarrollo de varios proyectos, proponiéndome retos, los
        cuales me enseñaron a corregir mis propios errores al desarrollar
        software.
      </p>
      <h2>Trayectoria</h2>
      <p>
        Experiencia en dirección de equipos pequeños y en la participación de
        todo proceso de una aplicación (desde el planteamiento inicial,
        extracción de funcionalidades necesarias, desarrollo, pruebas y
        evolución).
        <br /> <br />
        Busco ampliar mis conocimientos en la programación y obtener experiencia
        formando parte de un productivo y exitoso equipo. Tengo habilidad para
        adaptarme rapido a otras tecnologias. Estoy buscando un proyecto
        adecuado a mis habilidades que me permita desarrollarme, que me ponga
        nuevos retos y nuevos aprendizajes.
        <br /> <br />I have a basic level of english, knowing the necessary for
        communication, as well as consume documentation content in this
        language.
      </p>
      <h2>Intereses y Hobbies</h2>
      <p>
        Interesado en aprender más sobre testing, principios de clean code,
        mejorar mi ingles y escalabilidad en general.
        <br /> En mi tiempo suelo tocar la guitarra 🎸, armar cubos rubik{' '}
        <img
          src="https://img.icons8.com/ios/20/000000/rubiks-cube.png"
          alt="rubik"
        />{' '}
        , hacer{' '}
        <a href={constants.profilesUrls.instagram} title="Instagram Profile">
          origami
        </a>{' '}
        🪁 y jugar videojuegos 🎮.
      </p>
    </div>
  );
}

function Skills() {
  return (
    <>
      <h2>Habilidades – Tecnologías - Herramientas</h2>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <a
            key={index}
            className={styles.a}
            href={skill.href}
            title={`${skill.name} Site`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={skill.img} alt="css3" width="40" height="40" />
            {skill.name}
          </a>
        ))}
      </div>
    </>
  );
}

function Education() {
  return (
    <div className={styles.educationSection}>
      <h2>Ingeniería en Software (2015-2019) (Titulado)</h2>
      <h4>Universidad Politécnica de Pachuca</h4>
      <span>
        Universidad Politécnica de Pachuca - Carretera Pachuca – Ciudad Sahagún
        Km. 20, Ex-Hacienda de Santa Bárbara, 43830
      </span>
      <p>
        Durante mis estudios en la UPP obtuve capacidad de responsabilidad,
        esfuerzo y sacrificio, forme parte de equipos de trabajo y trabaje en
        proyectos de IA.
      </p>
    </div>
  );
}

function Studies() {
  return (
    <>
      <h2>Certificados y cursos</h2>
      <ul className={styles.studiesContainer}>
        <li>
          <a
            title="Certificado Ingles"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.inglesB1}
          >
            • Ingles B1 MCER - CENLEX IPN - 11 de Enero 2022
          </a>
        </li>
        <li>
          <a
            title="Titulo Ing. en Software"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.ingSoftware}
          >
            • Titulo Ing. en Software - UPP - 17 de Enero 2020
          </a>
        </li>
        <li>
          <a
            title="Platzi Profile"
            target="_blank"
            rel="noreferrer noopener"
            href="https://platzi.com/p/AntonioAyola/"
          >
            • Perfil Platzi
          </a>
        </li>
        <li>
          <a
            title="Certificado Ingles"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.inglesC1}
          >
            • EF SET English Certificate 70/100 (C1 Advanced) - EF Standard
            English Test (EF SET) - 06 de Octubre 2022
          </a>
        </li>
        <li>
          <a
            title="Certificado SCRUM"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.scrumStudy}
          >
            • Scrum Fundamentals Certified - SCRUMstudy - 29 de Enero 2023
          </a>
        </li>
        <li>
          <a
            title="Certificado NoCountry"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.noCountry}
          >
            • No Country - Seleccionado7 - 1 de Mayo 2023
          </a>
        </li>
        <li>
          <a
            title="Certificado Frontend"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.frontendDeveloper}
          >
            • Curso de Frontend Developer - Platzi
          </a>
        </li>
        <li>
          <a
            title="Certificado SCRUM"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.scrum}
          >
            • Curso de SCRUM - Linkedin
          </a>
        </li>

        <li>
          <a
            title="Certificado Fundamentos ing."
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.ingDeSoftware}
          >
            • Curso de Fundamentos de Ingeniería de Software - Platzi
          </a>
        </li>
        <li>
          <a
            title="Certificado Algoritmos"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.algoritmosPensamientoLogico}
          >
            • Algoritmos y Pensamiento Lógico - Platzi
          </a>
        </li>
        <li>
          <a
            title="Certificado Computación"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.computacionBasica}
          >
            • Curso de Computación Básica - Platzi
          </a>
        </li>
        <li>
          <a
            title="Certificado API REST"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.introduccionAPIRest}
          >
            • Curso de Introducción a API REST - EDTeam
          </a>
        </li>
        <li>
          <a
            title="Certificado GIT"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.git}
          >
            • Curso de GIT - Udemy
          </a>
        </li>
        {/*  <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.IntroduccionAPIRest}
          >
            • Escuela Js - Platzi - 20%
          </a>
        </li> */}
      </ul>
    </>
  );
}
function CV() {
  return (
    <>
      <h2>CV Privado</h2>
      <p>Dirigete a la sección de contacto.</p>
      <button type="button" className="boxShadow" disabled>
        DESCARGA CV
      </button>
    </>
  );
}
function Experience() {
  return (
    <>
      <h2>Privado</h2>
      <p>Dirigete a la sección de contacto.</p>
      <button type="button" className="boxShadow" disabled>
        Timeline...
      </button>
    </>
  );
}

function AboutMe() {
  const [activeSection, setActiveSection] = useState(0);
  return (
    <section className={styles.aboutMe} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.AboutLeft}>
          <span>Actualizado el 5 de Marzo, 2022</span>
          <div className={styles.leftImg}>
            <img
              src={hero}
              alt="antonio Ayola Profile"
              className={styles.img}
            />
            <h1>{'<Antonio Ayola/>'}</h1>
            <a
              title="Buy me a coffe"
              className={styles.supportBtn}
              href={constants.profilesUrls.buymeacoffee}
              target="_blank"
              rel="noreferrer noopener"
            >
              APOYAME
            </a>
            {/* <button className={styles.supportBtn} type="button">
              APOYAME
            </button> */}
            <p>Desarrollo software con ❤️ y ☕️</p>
            <p> &#x1F1F2;&#x1F1FD;</p>
          </div>
        </div>
        <div className={styles.AboutRight}>
          <div>
            {/* <span>Actualizado el 5 de Marzo, 2022</span> */}
            <ul className={styles.tabs}>
              <li className={activeSection === 0 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(0)}
                  className={styles.tabBtn}
                  aria-label="about"
                >
                  about
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 1 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(1)}
                  className={styles.tabBtn}
                  aria-label="skills"
                >
                  skills
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 2 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(2)}
                  className={styles.tabBtn}
                  aria-label="formación"
                >
                  formación
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 3 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(3)}
                  className={styles.tabBtn}
                  aria-label="certificados"
                >
                  Certificados
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 4 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(4)}
                  className={styles.tabBtn}
                  aria-label="experiencia"
                >
                  Experiencia
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 5 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(5)}
                  className={styles.tabBtn}
                  aria-label="cv"
                >
                  CV
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              {/* <li>
                <span>Actualizado el 5 de Marzo, 2022</span>
              </li> */}
            </ul>
            <hr />
          </div>
          <div className={styles.tabContent}>
            {activeSection === 0 && <About />}
            {activeSection === 1 && <Skills />}
            {activeSection === 2 && <Education />}
            {activeSection === 3 && <Studies />}
            {activeSection === 4 && <Experience />}
            {activeSection === 5 && <CV />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
