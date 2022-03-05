import styles from './Testimonial.module.css';

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
    <article className={`${styles.slide} ${styles[position]}`}>
      <div className={styles.left}>
        <div className={styles.slideImg}>
          <img
            src={`https://picsum.photos/400/250?random=${valueIndex}`}
            alt=""
          />
        </div>
        <div className={styles.details}>
          <span>AppDT Software</span>
          <h2>Miguel Cortes</h2>
          <p>Operating Officer</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.quote}>
          <i className="fas fa-quote-right" />
        </div>
        <div className={styles.content}>
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
