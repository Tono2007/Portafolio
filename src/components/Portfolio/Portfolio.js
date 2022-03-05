import Card from './Card';
import PortfolioData from './PortfolioData';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <section className={styles.portafolio} id="portfolio">
      <div className="container">
        <div className={styles.heading}>
          <h4>VISITA LOS PROYECTOS MAS RECIENTES DE MI PORTAFOLIO</h4>
          <h1>Mi Portafolio</h1>
        </div>
        <button type="button" className={styles.seeAllBtn}>
          VER TODOS LOS PROYECTOS
        </button>
        <div className={styles.contentGrid}>
          {PortfolioData.slice(0, 3).map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
