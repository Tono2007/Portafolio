import { useState, useRef } from 'react';

import Card from './Card';
import PortfolioData from './PortfolioData';
import styles from './Portfolio.module.css';
import AllPortfolioProjects from '../AllPortfolioProjects';
import Modal from '../Modal/Modal';
import useIsInViewportOnce from '../../utils/hooks/useIsInViewportOnce';

const Portfolio = () => {
  const sectionRef = useRef();
  const isInViewportOnce = useIsInViewportOnce(sectionRef);
  const [modal, setModal] = useState(false);
  return (
    <>
      <Modal openModal={modal} fnCloseModal={() => setModal(false)}>
        <AllPortfolioProjects />
      </Modal>
      <section className={styles.portafolio} id="portfolio" ref={sectionRef}>
        <div className="container">
          <div
            className={`${styles.heading} ${
              isInViewportOnce ? 'useSlideInLeft' : 'useSlideInLeftEnter'
            }`}
          >
            <h4>VISITA LOS PROYECTOS MAS RECIENTES DE MI PORTAFOLIO</h4>
            <h1>Mi Portafolio</h1>
          </div>
          <button
            type="button"
            className={styles.seeAllBtn}
            onClick={() => setModal(true)}
            aria-label="ver todos los proyectos"
          >
            VER TODOS LOS PROYECTOS
          </button>
          <div className={styles.contentGrid}>
            {/* {PortfolioData.slice(0) //clonar array para poder usar reverse()
              .reverse()
              .slice(0, 3)
              .map((project, index) => (
                <Card key={index} project={project} />
              ))} */}
            <Card project={PortfolioData[2]} />
            <Card project={PortfolioData[1]} />
            <Card project={PortfolioData[3]} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
