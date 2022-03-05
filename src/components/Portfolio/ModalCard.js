import styles from './ModalCard.module.css';

function ModalCard() {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalImg}>
        <img src="https://picsum.photos/900/500?random=1" alt="" />
      </div>
      <div className={styles.modalText}>
        <span>Featured - Design</span>
        <h1>titleee</h1>
        <p>
          Lorem ipsum dolor sit amet con sectetur, adipisicing elit. Ratione
          nobis optio, dolor ea molestias ullam sequi omnis libero
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          nobis optio, dolor ea molestias ullam sequi omnis libero
        </p>
        <div className={styles.modalActions}>
          <button className={styles.actionBtn} type="button">
            LIKE THIS <i className="fas fa-thumbs-up" />
          </button>
          <button className={styles.actionBtn} type="button">
            VIEW PROJECT <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalCard;
