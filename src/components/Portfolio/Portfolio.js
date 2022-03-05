import Card from './Card';
import PortfolioData from './PortfolioData';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <section className={styles.portafolio} id="portfolio">
      <div className="container">
        <div className={styles.heading}>
          <h4>VISIT MY PORTFOLIO SOME OF MY MOST RECENT PROJECTS</h4>
          <h1>My Portfolio</h1>
        </div>
        <div className={styles.contentGrid}>
          {PortfolioData.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
