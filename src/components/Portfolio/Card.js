import { useState } from 'react';
import styles from './Portfolio.module.css';
import Modal from '../Modal/Modal';
import ModalCard from './ModalCard';

const Card = (props) => {
  const { id, category, totalLike, title, image } = props.project;
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal openModal={modal} fnCloseModal={() => setModal(false)}>
        <ModalCard />
      </Modal>
      <div
        className={styles.card}
        onClick={() => setModal(true)}
        onKeyPress={() => setModal(true)}
        role="button"
        tabIndex={0}
      >
        <div className={styles.img}>
          <img src={image} alt="" />
        </div>
        <div className={styles.category}>
          <span>{category}</span>
          <span>
            <i className="fas fa-heart" />
            {totalLike}
          </span>
        </div>
        <div>
          <h2>{title}</h2>

          <span className={styles.arrow}>
            <i className="fas fa-arrow-right" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
