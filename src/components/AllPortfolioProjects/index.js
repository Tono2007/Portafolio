import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import data from '../Blog/BlogData';
import styles from './styles.module.css';
//import Card from '../Portfolio/Card';
import Card from './Card';

import PortfolioData from '../Portfolio/PortfolioData';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';

const categories = [
  'TODOS',
  'DEVELOPMENT',
  'WEB DESIGN',
  'APPLICATION',
  'DESIGN',
  'MOBILE',
  'COLABORATION',
];

function Index() {
  const [activeSection, setActiveSection] = useState(0);
  const [projectsList, setProjectsList] = useState(PortfolioData);

  function filterProjects(category) {
    if (category !== 'TODOS') {
      /* const list = [];
      MyGroupsList.forEach((x) => {
        const groupName = x.nombre_grupo.toLowerCase();
        if (groupName.indexOf(e.target.value.toLowerCase()) >= 0) {
          list.push(x);
        }
      });
      setSearchList(list); */
      const list = PortfolioData.filter(
        (project) => project.category === category,
      );

      setProjectsList(list);
    } else {
      console.log('todos');
      setProjectsList(PortfolioData);
    }
  }

  return (
    <section className={styles.allPortfolio}>
      <div className="container">
        <div className={styles.heading}>
          <h4>VISITA LOS PROYECTOS DE MI PORTAFOLIO</h4>
          <h1>Portafolio</h1>
        </div>
        {/* <div className={styles.tagsContainer}>
          <p>Categorias-&gt;</p>

          <span className={styles.tag}>APPLICATION</span>
          <span className={styles.tag}>WEB DESIGN</span>
          <span className={styles.tag}>MOVILE</span>
          <span className={styles.tag}>DESKTOP</span>
        </div> */}
        <div className={styles.tagsContainer}>
          <p>Filtrar Categorias-&gt;</p>
          <ul className={styles.tabs}>
            {categories.map((category, index) => (
              <li
                key={index}
                className={activeSection === index ? styles.active : null}
              >
                <button
                  type="button"
                  onClick={() => {
                    setActiveSection(index);
                    filterProjects(category);
                  }}
                  className={styles.tabBtn}
                >
                  {category}
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
            ))}
          </ul>
        </div>

        <TransitionGroup className={styles.contentGrid}>
          {projectsList.map((project, index) => (
            <CSSTransition
              key={project.id}
              timeout={500}
              classNames="transition"
            >
              <Card key={project.id} project={project} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </section>
  );
}

export default Index;
