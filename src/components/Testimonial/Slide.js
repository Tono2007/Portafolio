import React from 'react';

const Slide = ({ valueIndex, index, dataLength }) => {
  let position = 'nextSlide';
  if (valueIndex === index) {
    position = 'activeSlide';
  }

  if (
    valueIndex === index - 1 ||
    (index === 0 && valueIndex === dataLength - 1)
  ) {
    position = 'lastSlide';
  }
  return (
    <article className={`box d_flex ${position}`}>
      <div className="left box_shadow">
        <div className="slide_img">
          <img
            src={`https://picsum.photos/400/250?random=${valueIndex}`}
            alt=""
          />
        </div>
        <div className="details mtop">
          <span>AppDT Software</span>
          <h2>Miguel Cortes</h2>
          <span>Operating Officer</span>
        </div>
      </div>
      <div className="right">
        <div className="icon">
          <div className="quote">
            <i className="fas fa-quote-right" />
          </div>
        </div>
        <div className="content box_shadow mtop">
          <h1>Android App Design</h1>
          <h3>Fiver - 17 Septiembre 2097</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
            cumque? Tempore magnam sed necessitatibus dolorem, unde minima
            perspiciatis adipisci ex reiciendis explicabo nam eveniet id placeat
            repudiandae ad hic nesciunt!
          </p>
        </div>
      </div>
    </article>
  );
};

export default Slide;
