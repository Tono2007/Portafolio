import data from '../Blog/BlogData';
import styles from './styles.module.css';
//import Card from '../Portfolio/Card';
import Card from './Card';

import PortfolioData from '../Portfolio/PortfolioData';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';

function Index() {
  return (
    <section className={styles.allPortfolio}>
      <div className="container">
        <div className={styles.heading}>
          <h4>VISITA LOS PROYECTOS DE MI PORTAFOLIO</h4>
          <h1>Portafolio</h1>
        </div>
        <div className={styles.tagsContainer}>
          <p>Categorias-&gt;</p>

          <span className={styles.tag}>APPLICATION</span>
          <span className={styles.tag}>WEB DESIGN</span>
          <span className={styles.tag}>MOVILE</span>
          <span className={styles.tag}>DESKTOP</span>
        </div>
        <div className={styles.contentGrid}>
          {/* {data.slice(0, 3).map((post) => (
      <Card key={post.id} data={post} />
    ))} */}
          {/*  {data.slice(0, 3).map((post) => (
            <Card key={post.id} data={post} />
          ))} */}
          {PortfolioData.slice(0, 3).map((project, index) => (
            <Card
              key={index}
              project={project}
              style={style.card}
              stylesCard={style.card}
            />
          ))}
          {PortfolioData.slice(0, 3).map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Index;
