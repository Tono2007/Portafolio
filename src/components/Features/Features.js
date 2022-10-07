import { useRef } from 'react';
import styles from './Features.module.css';
import Card from './Card';
import data from './FeaturesData';
import useIsInViewportOnce from '../../utils/hooks/useIsInViewportOnce';
import useIsInViewportTop from '../../utils/hooks/useIsInViewportTop';

function Features() {
  const sectionRef = useRef();
  const isInViewportTop = useIsInViewportTop(sectionRef);
  const isInViewportOnce = useIsInViewportOnce(sectionRef);

  return (
    <section className={styles.Features} id="features" ref={sectionRef}>
      <div className="container">
        <div
          className={`heading ${
            isInViewportOnce ? 'useSlideInLeft' : 'useSlideInLeftEnter'
          }`}
        >
          <h4>Habilidades</h4>
          <h1>Que hago</h1>
        </div>
        <div className={styles.contentGrid}>
          {data.map((feature, index) => (
            <div key={index} className={isInViewportTop ? styles.slideIn : ''}>
              <Card
                image={feature.image}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
