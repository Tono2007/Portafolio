import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import styles from './Testimonial.module.css';

const Testimonial = () => {
  const [data, setdata] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <section id="clients" className={styles.testimonial}>
      <div className="container">
        <div className={styles.heading}>
          <h4>WHAT CLIENTS SAY</h4>
          <h1>Testimonial</h1>
        </div>
        <div className={styles.slider}>
          {data.map((id) => (
            <Slide
              valueIndex={id}
              key={id}
              index={index}
              dataLength={data.legth}
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
