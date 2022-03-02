import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import hero from '../../assets/hero8.svg';
import styles from './Hero.module.css';

const Hero = () => {
  const [activeNav, setActiveNav] = useState(false);
  useEffect(() => {
    function handleScroll() {
      window.scrollY > 100 ? setActiveNav(true) : setActiveNav(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section
      className={
        activeNav ? `${styles.hero} ${styles.heroActive}` : styles.hero
      }
      id="home"
    >
      {/*       <div className={styles.boxP}>ss</div>
      <div className={styles.boxS}>f</div> */}
      {/*       <div className="container f_flex top">
       */}{' '}
      <div className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <h3> WELCOME TO MY WORLD</h3>
          <h1>
            Hi, I&#39;m <span>Antonio Ayola</span>
          </h1>

          <h2>
            a
            <span>
              <Typewriter
                words={[' Profesional Coder', ' Developer']}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            ducimus facilis voluptatum quis quisquam possimus cupiditate ab iste
            aut fugit! Officiis fugiat quo distinctio error ea accusantium,
            placeat dignissimos fuga.
          </p>
          <div className={styles.socialSkills}>
            <div className="col_1">
              <h4>FIND ME WITH</h4>
              <div className={styles.socialContainer}>
                <button className={styles.socialBtn} type="button">
                  <i className="fa-brands fa-facebook-f" />
                </button>
                <button className={styles.socialBtn} type="button">
                  <i className="fa-brands fa-github" />
                </button>
                <button className={styles.socialBtn} type="button">
                  <i className="fa-brands fa-linkedin-in" />
                </button>
              </div>
            </div>
            <div className="col_1">
              <h4>BEST SKILL ON</h4>
              <button className={styles.skillBtn} type="button">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                />
              </button>
              <button className={styles.skillBtn} type="button">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="NodeJs"
                />
              </button>
              <button className={styles.skillBtn} type="button">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="Js"
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.rightImg}>
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
