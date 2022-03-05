import styles from './Features.module.css';

const Card = ({ image, title, description, icon }) => {
  return (
    <div className={styles.card}>
      {/* <img src={image} alt="" /> */}
      <span className={styles.mainIcon}>
        <i className={icon} />
      </span>

      <h2>{title}</h2>
      <p>{description}</p>
      <span className={styles.actionIcon}>
        <i className="fas fa-arrow-right action" />
      </span>
    </div>
  );
};

export default Card;
