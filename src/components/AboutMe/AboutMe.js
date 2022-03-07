import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import hero from '../../assets/me.jpg';
import styles from './AboutMe.module.css';
import { constants } from '../../utils/constants';

function About() {
  return (
    <div className={styles.me}>
      <h2>Quien soy y mas sobre mi</h2>
      <p>
        Me llamo Antonio Ayola soy un desarrollador de Software con gran afición
        al mundo Tecnológico, autodidacta y apasionado por aprender más todos
        los días sobre nuevas tecnologias. <br />
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
        , hacer <a href={constants.profilesUrls.instagram}> origami</a> 🪁 y
        jugar videojuegos 🎮.
      </p>
    </div>
  );
}

function Skills() {
  return (
    <>
      <h2>Habilidades – Tecnologías - Herramientas</h2>
      <div className={styles.skillsContainer}>
        <a
          className={styles.a}
          href="https://www.w3schools.com/css/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3"
            width="40"
            height="40"
          />
          CSS
        </a>
        <a
          href="https://git-scm.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
            width="40"
            height="40"
          />
          Git
        </a>
        <a
          href="https://www.w3.org/html/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
            width="40"
            height="40"
          />
          HTML
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            width="40"
            height="40"
          />
          javascript
        </a>
        <a
          href="https://www.mysql.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
            alt="mysql"
            width="40"
            height="40"
          />
          MySQL
        </a>
        <a href="https://nodejs.org" target="_blank" rel="noreferrer noopener">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="nodejs"
            width="40"
            height="40"
          />
          NodeJS
        </a>
        <a href="https://postman.com" target="_blank" rel="noreferrer noopener">
          <img
            src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
            alt="postman"
            width="40"
            height="40"
          />
          Postman
        </a>
        <a
          href="https://www.python.org"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            alt="python"
            width="40"
            height="40"
          />
          Python
        </a>
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            width="40"
            height="40"
          />
          React
        </a>
        <a
          href="https://getbootstrap.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
            alt="bootstrap"
            width="40"
            height="40"
          />
          Bootstrap
        </a>
        <a
          href="https://www.java.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
            alt="java"
            width="40"
            height="40"
          />
          Java
        </a>
        <a
          href="https://materializecss.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg"
            alt="materialize"
            width="40"
            height="40"
          />
          materialize
        </a>
        <a
          href="https://reactnative.dev/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://reactnative.dev/img/header_logo.svg"
            alt="reactnative"
            width="40"
            height="40"
          />
          React Native
        </a>
        <a
          href="https://redux.js.org"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            alt="redux"
            width="40"
            height="40"
          />
          Redux
        </a>
        <a
          href="https://webpack.js.org"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
            alt="webpack"
            width="40"
            height="40"
          />
          Webpack
        </a>
      </div>
    </>
  );
}

function Education() {
  return (
    <>
      <h2>Ingeniería en Software (2015-2019) (Titulado)</h2>
      <h4>Universidad Politécnica de Pachuca</h4>
      <p>
        Universidad Politécnica de Pachuca - Carretera Pachuca – Ciudad Sahagún
        Km. 20, Ex-Hacienda de Santa Bárbara, 43830
      </p>
      <p>
        Durante mis estudios en la UPP obtuve capacidad de responsabilida,
        esfuerzo y sacrificio, forme parte de equipos de trabajo y trabaje en
        proyectos de IA.
      </p>
    </>
  );
}

function Studies() {
  return (
    <>
      <h2>Certificados y cursos</h2>
      <ul className={styles.studiesContainer}>
        <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.inglesB1}
          >
            • Ingles B1 MCER - CENLEX IPN - 11 de Enero 2022
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.ingSoftware}
          >
            • Titulo Ing. en Software - UPP - 1 de Enero 2020
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.frontendDeveloper}
          >
            • Curso de Frontend Developer - Platzi
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.ingDeSoftware}
          >
            • Curso de Fundamentos de Ingeniería de Software - Platzi
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.algoritmosPensamientoLogico}
          >
            • Algoritmos y Pensamiento Lógico - Platzi
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.computacionBasica}
          >
            • Curso de Computación Básica - Platzi
          </a>
        </li>
      </ul>
    </>
  );
}
function CV() {
  return (
    <>
      <h2>Por ahora CV Privado</h2>
      <p>Dirigete a la sección de contacto.</p>
      <button type="button" className="boxShadow" disabled>
        DESCARGA CV
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
          <div className={styles.leftImg}>
            <img src={hero} alt="hero" className={styles.img} />
            <h1>{'<Antonio Ayola/>'}</h1>
            <button className={styles.supportBtn} type="button">
              APOYAME
            </button>
            <p>Desarrollo software con ❤️ y ☕️</p>
            <p> &#x1F1F2;&#x1F1FD;</p>
          </div>
        </div>
        <div className={styles.AboutRight}>
          <div>
            <ul className={styles.tabs}>
              <li className={activeSection === 0 ? styles.active : null}>
                <button type="button" onClick={() => setActiveSection(0)}>
                  about
                </button>
                <span className={styles.divider}>|</span>
              </li>
              <li className={activeSection === 1 ? styles.active : null}>
                <button type="button" onClick={() => setActiveSection(1)}>
                  skills
                </button>
                <span className={styles.divider}>|</span>
              </li>
              <li className={activeSection === 2 ? styles.active : null}>
                <button type="button" onClick={() => setActiveSection(2)}>
                  formación
                </button>
                <span className={styles.divider}>|</span>
              </li>
              <li className={activeSection === 3 ? styles.active : null}>
                <button type="button" onClick={() => setActiveSection(3)}>
                  Certificados
                </button>
                <span className={styles.divider}>|</span>
              </li>
              <li className={activeSection === 4 ? styles.active : null}>
                <button type="button" onClick={() => setActiveSection(4)}>
                  Experiencia
                </button>
                <span className={styles.divider}>|</span>
              </li>
              <li className={activeSection === 5 ? styles.active : null}>
                <button type="button" onClick={() => setActiveSection(5)}>
                  CV
                </button>
                <span className={styles.divider}>|</span>
              </li>
              <li>
                <span>Actualizado el 5 de Marzo, 2022</span>
              </li>
            </ul>
          </div>
          <div className={styles.tabContent}>
            {activeSection === 0 && <About />}
            {activeSection === 1 && <Skills />}
            {activeSection === 2 && <Education />}
            {activeSection === 3 && <Studies />}
            {activeSection === 4 && <p>Privado</p>}
            {activeSection === 5 && <CV />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
