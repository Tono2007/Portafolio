import { useState } from 'react';
import styles from './Blog.module.css';
import Modal from '../Modal/Modal';
import ModalCard from './ModalCard';

const Card = ({ data }) => {
  const [modal, setModal] = useState(false);
  const { id, title, date, banner } = data;
  // eslint-disable-next-line import/no-dynamic-require
  const img = require(`./BlogData/${banner}`);

  return (
    <>
      <Modal
        openModal={modal}
        fnCloseModal={() => setModal(false)}
        styleContent={styles.modalContent}
      >
        <ModalCard data={data} />
      </Modal>
      <article
        className={styles.card}
        onClick={() => setModal(true)}
        onKeyPress={() => setModal(true)}
        role="presentation"
      >
        <div className={styles.img}>
          <img src={img} alt="" />
        </div>
        <div className={styles.date}>
          <span>{date}</span>
        </div>
        <div className={styles.title}>
          <h2>{title}</h2>
          <span className={styles.arrow}>
            <i className="fas fa-arrow-right" />
          </span>
        </div>
      </article>
    </>
  );
};

export default Card;
