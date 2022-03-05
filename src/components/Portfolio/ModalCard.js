import styles from './ModalCard.module.css';

function ModalCard({ project }) {
  const { id, category, totalLike, title, image, desc } = project;

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalImg}>
        <img src="https://picsum.photos/900/500?random=1" alt="" />
      </div>
      <div className={styles.modalText}>
        <span>2022 - Design</span>
        <h1>{title}</h1>
        <p>{desc}</p>
        <h4>Tecnologias Usadas</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          nobis optio, dolor ea molestias ullam sequi omnis libero
        </p>
        <div className={styles.modalActions}>
          <button className={styles.actionBtn} type="button">
            VER CODIGO <i className="fab fa-github" />
          </button>
          <button className={styles.actionBtn} type="button">
            VISITAR PROYECTO <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalCard;
