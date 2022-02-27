import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import './Testimonial.css';

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
    <section id="clients" className="testimonial">
      <div className="container">
        <div className="heading text-center">
          <h4>WHAT CLIENTS SAY</h4>
          <h1>Testimonial</h1>
        </div>
        <div className="slide">
          {data.map((id) => (
            <Slide
              valueIndex={id}
              key={id}
              index={index}
              dataLength={data.legth}
            />
          ))}

          <div className="slide_button">
            <button
              className="btn_shadow prev_btn"
              type="button"
              onClick={() => setIndex(index - 1)}
            >
              <i className="fas fa-arrow-left" />
            </button>
            <button
              className="btn_shadow next_btn"
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
