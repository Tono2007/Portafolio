import { useState, useEffect } from 'react';
import Slide from './Slide';
import styles from './Testimonial.module.css';
import testimonialData from './TestimonialData';

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = testimonialData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, testimonialData]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 6000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <section id="clients" className={styles.testimonial}>
      <div className="container">
        <div className={styles.heading}>
          <h4>QUE DICEN DE MI TRABAJO</h4>
          <h1>Testimonios</h1>
        </div>
        <div className={styles.slider}>
          {testimonialData.map((data) => (
            <Slide
              data={data}
              valueIndex={data.id}
              key={data.id}
              index={index}
              dataLength={testimonialData.legth}
            />
          ))}

          <div className={styles.slideButtons}>
            <button
              className={styles.sliderBtn}
              type="button"
              onClick={() => setIndex(index - 1)}
            >
              <i className="fas fa-arrow-left" />
            </button>
            <button
              className={styles.sliderBtn}
              type="button"
              onClick={() => setIndex(index + 1)}
            >
              <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
